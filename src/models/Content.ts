import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Lesson from './Lesson';

@Entity('content')
export default class Content{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    description:string

    @OneToOne(type=> Lesson, content => Content)
    @JoinColumn()
    lesson: Lesson

    @Column()
    linkContent:string;
}