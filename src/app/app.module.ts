import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConfigurationModule } from "../configuration/configuration.module"
import { Movie } from "../movies/movie.entity"
import { MoviesModule } from "../movies/movies.module"
import { Rating } from "../ratings/rating.entity"
import { RatingsModule } from "../ratings/ratings.module"

@Module({
	imports: [
		ConfigurationModule,
		MoviesModule,
		RatingsModule,
		TypeOrmModule.forRoot({
			// name: "movies",
			type: "sqlite",
			database: "db/movies.db",
			entities: [Movie],
		}),
		// TypeOrmModule.forRoot({
		// 	name: "ratings",
		// 	type: "sqlite",
		// 	database: "db/ratings.db",
		// 	entities: [Rating],
		// }),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
