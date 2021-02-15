import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLesson1613329707569 implements MigrationInterface {
    name = 'CreateLesson1613329707569'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "aulaId" uuid, CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_707fbd6b6d9ed66453619b278a3" FOREIGN KEY ("aulaId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_707fbd6b6d9ed66453619b278a3"`);
        await queryRunner.query(`DROP TABLE "lesson"`);
    }

}
