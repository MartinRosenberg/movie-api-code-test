import {
	Controller,
	Get,
	NotFoundException,
	Param,
	Query,
} from "@nestjs/common"
import { Movie } from "./movie.entity"

import { MoviesService } from "./movies.service"

@Controller("movies")
export class MoviesController {
	constructor(private moviesService: MoviesService) {}

	@Get(":movieId")
	async findOne(@Param("movieId") movieId: number): Promise<Movie> {
		const res = await this.moviesService.findOne(movieId)
		if (res == null) {
			throw new NotFoundException("No movie was found with that ID.")
		}
		return res
	}

	@Get()
	async findMany(
		@Query("genre") genre?: string,
		@Query("year") year?: number,
		@Query("page") page?: number,
	): Promise<Array<Movie>> {
		return this.moviesService.findMany(genre, year, page)
	}
}
