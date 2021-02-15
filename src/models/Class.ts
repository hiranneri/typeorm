import {Entity, Column, CreateDateColumn, UpdateDateColumn,PrimaryGeneratedColumn,  OneToMany } from "typeorm";
import Lesson from "./Lesson";

@Entity('class')
export default class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({
        length: 100,
        unique: true
    })
    @Column({
        unique: true,
        length: 300
    })
    name: string;

    @OneToMany(type=> Lesson, aula=> Class)
    lesson: Lesson[];

    @Column()
    duracao: number;
    
    @CreateDateColumn()
    created_At: Date;
    
    @UpdateDateColumn()
    updated_At: Date;
}
