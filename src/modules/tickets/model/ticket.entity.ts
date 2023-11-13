import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity()
@ObjectType()
export class Ticket{
    @PrimaryGeneratedColumn('increment')
    @Field((type) => Int)
    id:number;

    @Column()
    @Field()
    tittle: string;

    @Column()
    @Field()
    description: string;

    @Column()
    @Field()
    priority: string;

    @Column()
    @Field()
    category: string;

    @Column()
    @Field()
    status: string;
}
