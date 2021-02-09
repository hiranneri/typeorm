import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
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

    @Column()
    duracao: number;
    
    @CreateDateColumn()
    created_At: Date;
    
    @UpdateDateColumn()
    updated_At: Date;
}
