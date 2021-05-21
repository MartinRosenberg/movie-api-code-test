import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "ratings" })
class Rating {
	@PrimaryGeneratedColumn({ type: "int" })
	ratingId!: number

	@Column("int", { nullable: false })
	userId!: number

	@Column("int", { nullable: false })
	movieId!: number

	@Column("real", { nullable: false })
	rating!: number

	@Column("int", { nullable: false })
	timestamp!: number
}

export { Rating }
