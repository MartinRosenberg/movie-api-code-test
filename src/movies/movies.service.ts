import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { Movie } from "./movie.entity"

@Injectable()
export class MoviesService {
	constructor(
		@InjectRepository(Movie) private moviesRepository: Repository<Movie>,
	) {}

	async findOne(movieId: number): Promise<Movie | undefined> {
		// return `Movie with id ${id}`
		return this.moviesRepository.findOne({ movieId })
	}

	async findMany(genre?: string, year?: string): Promise<Array<Movie>> {
		// return `Movies of ${genre || "any"} genre from ${year || "whenever"}`
		return []
	}
}
