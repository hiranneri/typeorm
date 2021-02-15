import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEmailStudent1613352075432 implements MigrationInterface {
    name = 'AddEmailStudent1613352075432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE  "students" ADD "email" character varying NOT NULL`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "email"`);
    }

}
