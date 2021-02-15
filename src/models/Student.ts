import { Column, CreateDateColumn, Entity, IsNull, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Class from './Class'

import { IsEmail, isEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
@Entity('students')
export default class Student{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    @MinLength(3, {message:'Informe no mínimo 3 caracteres para o nome'})
    @MaxLength(250)
    name:string

    @Column()
    @MaxLength(9999, {message:'Informe até 9.999 caracteres para a key'})
    @MinLength(3, {message:'Informe no mínimo 3 caracteres para a key'})
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