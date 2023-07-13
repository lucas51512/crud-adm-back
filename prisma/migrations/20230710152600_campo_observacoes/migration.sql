/*
  Warnings:

  - Added the required column `observacoes` to the `Reuniao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reuniao` ADD COLUMN `observacoes` VARCHAR(191) NOT NULL;
