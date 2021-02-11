import {MigrationInterface, QueryRunner} from "typeorm";

export class PopulateClass1613004108456 implements MigrationInterface {
    name = 'PopulateClass1613004108456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO class (name, duracao) VALUES ('Javascript I', 50)",
            );
        await queryRunner.query(
            "INSERT INTO class (name, duracao) VALUES ('Javascript II', 30)",
            );
        await queryRunner.query(
            "INSERT INTO class (name, duracao) VALUES ('Heroku II', 50)",
            );
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DELETE FROM class WHERE name='Javascript I'`);
        await queryRunner.query(`
        DELETE FROM class WHERE name='Javascript II'`);
        await queryRunner.query(`
        DELETE FROM class WHERE name='Heroku II'`);

       
    }

}
