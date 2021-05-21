import { Controller, Get, Param, Query } from "@nestjs/common"
import { Movie } from "./movie.entity"

import { MoviesService } from "./movies.service"

@Controller("movies")
export class MoviesController {
	constructor(private moviesService: MoviesService) {}

	@Get(":id")
	async findOne(@Param("id") id: number): Promise<Movie | undefined> {
		return this.moviesService.findOne(id)
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
