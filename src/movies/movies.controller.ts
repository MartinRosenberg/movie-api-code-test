import { Controller, Get, Param, Query } from "@nestjs/common"

import { MoviesService } from "./movies.service"

@Controller("movies")
export class MoviesController {
	constructor(private moviesService: MoviesService) {}

	@Get(":id")
	async findOne(@Param("id") id: number): Promise<unknown> {
		return this.moviesService.findOne(id)
	}

	@Get()
	async findMany(
		@Query("genre") genre?: string,
		@Query("year") year?: string,
	): Promise<unknown> {
		return this.moviesService.findMany(genre, year)
	}
}
