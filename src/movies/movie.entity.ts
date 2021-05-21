import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "movies" })
class Movie {
	@PrimaryGeneratedColumn({ type: "int" })
	movieId!: number

	@Column("text", { nullable: false })
	imdbId!: string

	@Column("text", { nullable: false })
	title!: string

	@Column("text", { nullable: true })
	overview?: string

	@Column("simple-json", { nullable: true })
	productionCompanies?: Array<{
		id: number
		name: string
	}>

	@Column("date", { nullable: true })
	releaseDate?: string

	@Column("int", { nullable: true })
	budget?: number

	@Column("int", { nullable: true })
	revenue?: number

	@Column("real", { nullable: true })
	runtime?: number

	@Column("text", { nullable: true })
	language?: string

	@Column("simple-json", { nullable: true })
	genres?: Array<{
		id: number
		name: string
	}>

	@Column("text", { nullable: true })
	status?: string
}

export { Movie }
