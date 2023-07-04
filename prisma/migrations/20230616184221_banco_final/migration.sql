/*
  Warnings:

  - The primary key for the `reuniao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nomesParticipantes` on the `reuniao` table. All the data in the column will be lost.
  - You are about to drop the column `numeroParticipantes` on the `reuniao` table. All the data in the column will be lost.
  - You are about to drop the column `reuniaoId` on the `reuniao` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[localIdFk]` on the table `Reuniao` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `assuntoReuniao` to the `Reuniao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idReuniao` to the `Reuniao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reuniao` DROP PRIMARY KEY,
    DROP COLUMN `nomesParticipantes`,
    DROP COLUMN `numeroParticipantes`,
    DROP COLUMN `reuniaoId`,
    ADD COLUMN `assuntoReuniao` VARCHAR(191) NOT NULL,
    ADD COLUMN `idReuniao` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `localIdFk` INTEGER NULL,
    ADD PRIMARY KEY (`idReuniao`);

-- CreateTable
CREATE TABLE `Usuario` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeUsuario` VARCHAR(191) NOT NULL,
    `emailUsuario` VARCHAR(191) NOT NULL,
    `senhaUsuario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participante` (
    `idParticipante` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeParticipante` VARCHAR(191) NOT NULL,
    `emailParticipante` VARCHAR(191) NOT NULL,
    `telefoneParticipante` VARCHAR(191) NOT NULL,
    `reuniaoIdFk` INTEGER NULL,

    PRIMARY KEY (`idParticipante`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Local` (
    `idLocal` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeLocal` VARCHAR(191) NOT NULL,
    `enderecoLocal` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idLocal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Reuniao_localIdFk_key` ON `Reuniao`(`localIdFk`);

-- AddForeignKey
ALTER TABLE `Reuniao` ADD CONSTRAINT `Reuniao_localIdFk_fkey` FOREIGN KEY (`localIdFk`) REFERENCES `Local`(`idLocal`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participante` ADD CONSTRAINT `Participante_reuniaoIdFk_fkey` FOREIGN KEY (`reuniaoIdFk`) REFERENCES `Reuniao`(`idReuniao`) ON DELETE SET NULL ON UPDATE CASCADE;
