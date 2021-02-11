import {MigrationInterface, QueryRunner} from "typeorm";

export class PopulateClass1613004108456 implements MigrationInterface {
    name = 'PopulateClass1613004108456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO public."class (id, "name", duracao, "created_At", "updated_At")
        VALUES(uuid_generate_v4(), 'Javascript I', 0, now(), now());
         `);
         await queryRunner.query(`
         INSERT INTO public."class (id, "name", duracao, "created_At", "updated_At")
         VALUES(uuid_generate_v4(), 'Javascript II', 0, now(), now());
          `);
          await queryRunner.query(`
          INSERT INTO public."class (id, "name", duracao, "created_At", "updated_At")
          VALUES(uuid_generate_v4(), 'Heroku', 0, now(), now());
           `);
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DELETE FROM class WHERE name='Javascript I'`);
        await queryRunner.query(`
        DELETE FROM class WHERE name='Javascript II'`);
        await queryRunner.query(`
        DELETE FROM class WHERE name='Heroku'`);

       
    }

}
