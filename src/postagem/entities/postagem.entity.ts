import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"}) // precisa setar pelas boas praticas// 
export class Postagem{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn()
    data: Date; 

}   