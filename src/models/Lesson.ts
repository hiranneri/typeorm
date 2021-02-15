import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    OneToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from 'typeorm';
import Class from './Class';
import Content from './Content';

@Entity('lesson')
export default class Lesson{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    description:string;

    @OneToOne(type => Content, lesson => Lesson)
    content: Content

    @ManyToOne(type => Class, lessons => Lesson, {eager:true})
    @JoinColumn()
    aula: Class

    @CreateDateColumn({name:'created_At'})
    createdAt:Date;

    @UpdateDateColumn({name:'updated_At'})
    updateAt:string;


}