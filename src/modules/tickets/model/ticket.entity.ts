import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    message: string;
}