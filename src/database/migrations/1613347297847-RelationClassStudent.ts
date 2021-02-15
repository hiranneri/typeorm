import {MigrationInterface, QueryRunner} from "typeorm";

export default class RelationClassStudent1613347297847 implements MigrationInterface {
    name = 'RelationClassStudent1613347297847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "students_aulas_class" ("studentsId" uuid NOT NULL, "classId" uuid NOT NULL, CONSTRAINT "PK_ea4e5a832fe3e1bd9252a0527f5" PRIMARY KEY ("studentsId", "classId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bd5a0761285003342aa330ddaf" ON "students_aulas_class" ("studentsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_63d06c17d17fde8665c2af5322" ON "students_aulas_class" ("classId") `);
        await queryRunner.query(`ALTER TABLE "students_aulas_class" ADD CONSTRAINT "FK_bd5a0761285003342aa330ddaf0" FOREIGN KEY ("studentsId") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "students_aulas_class" ADD CONSTRAINT "FK_63d06c17d17fde8665c2af5322c" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students_aulas_class" DROP CONSTRAINT "FK_63d06c17d17fde8665c2af5322c"`);
        await queryRunner.query(`ALTER TABLE "students_aulas_class" DROP CONSTRAINT "FK_bd5a0761285003342aa330ddaf0"`);
        await queryRunner.query(`DROP INDEX "IDX_63d06c17d17fde8665c2af5322"`);
        await queryRunner.query(`DROP INDEX "IDX_bd5a0761285003342aa330ddaf"`);
        await queryRunner.query(`DROP TABLE "students_aulas_class"`);
    }

}
