import { Injectable } from "@nestjs/common"

@Injectable()
export class MoviesService {
	async findOne(id: string): Promise<unknown> {
		return `Movie with id ${id}`
	}

	async findMany(genre?: string, year?: string): Promise<unknown> {
		return `Movies of ${genre || "any"} genre from ${year || "whenever"}`
	}
}
