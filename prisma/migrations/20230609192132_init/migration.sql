-- CreateTable
CREATE TABLE `Reuniao` (
    `reuniaoId` INTEGER NOT NULL AUTO_INCREMENT,
    `descricaoReuniao` VARCHAR(191) NOT NULL,
    `numeroParticipantes` INTEGER NOT NULL,
    `nomesParticipantes` VARCHAR(191) NOT NULL,
    `inicioReuniao` DATETIME(3) NOT NULL,
    `fimReuniao` DATETIME(3) NOT NULL,

    PRIMARY KEY (`reuniaoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
