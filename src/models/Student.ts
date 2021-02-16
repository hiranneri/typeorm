import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Class from './Class'

import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
@Entity('students')
export default class Student{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    @MinLength(3, {message:'Informe no mínimo 3 caracteres para o nome'})
    @MaxLength(250, {message: 'Informe no máximo 250 caracteres para o nome'})
    name:string

    @Column()
    @Max(9999, {message:'Informe o valor de até 9.999 para a key'})
    @Min(1, {message:'Informe o valor de no mínimo 1 para key'})
    key:number

    @Column()
    @IsEmail()
    email: string


    @Column({nullable:true})
    teste:number

    @ManyToMany(type => Class)
    @JoinTable()
    aulas: Class

    @CreateDateColumn({name:'created_At'})
    createdAt:Date

    @UpdateDateColumn({name:'updated_At'})
    updatedAt:Date
}