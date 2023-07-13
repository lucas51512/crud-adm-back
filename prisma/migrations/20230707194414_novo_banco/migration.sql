/*
  Warnings:

  - You are about to drop the column `reuniaoIdFk` on the `participante` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `participante` DROP FOREIGN KEY `Participante_reuniaoIdFk_fkey`;

-- AlterTable
ALTER TABLE `participante` DROP COLUMN `reuniaoIdFk`;

-- CreateTable
CREATE TABLE `_ParticipanteReuniao` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ParticipanteReuniao_AB_unique`(`A`, `B`),
    INDEX `_ParticipanteReuniao_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ParticipanteReuniao` ADD CONSTRAINT `_ParticipanteReuniao_A_fkey` FOREIGN KEY (`A`) REFERENCES `Participante`(`idParticipante`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ParticipanteReuniao` ADD CONSTRAINT `_ParticipanteReuniao_B_fkey` FOREIGN KEY (`B`) REFERENCES `Reuniao`(`idReuniao`) ON DELETE CASCADE ON UPDATE CASCADE;
