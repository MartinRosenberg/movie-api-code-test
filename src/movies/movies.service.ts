import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { ILike, Repository } from "typeorm"

import { Movie } from "./movie.entity"

@Injectable()
export class MoviesService {
	constructor(
		@InjectRepository(Movie) private moviesRepository: Repository<Movie>,
	) {}

	async findOne(movieId: number): Promise<Movie | undefined> {
		return this.moviesRepository.findOne(movieId, {
			select: [
				"imdbId",
				"title",
				"overview",
				"releaseDate",
				"budget",
				"runtime",
				"genres",
				"language",
				"productionCompanies",
			],
		})
	}

	async findMany(
		genre?: string,
		year?: number,
		page: number = 0,
	): Promise<Array<Movie>> {
		const pageSize = 50
		const offset = page * pageSize
		return this.moviesRepository.find({
			select: ["imdbId", "title", "genres", "releaseDate", "budget"],
			skip: offset,
			take: offset + pageSize,
			where: {
				...(genre && { genres: ILike(`%${genre}%`) }),
				...(year && { releaseDate: ILike(`${year}-__-__`) }),
			},
			order: { movieId: "ASC" },
		})
	}
}
