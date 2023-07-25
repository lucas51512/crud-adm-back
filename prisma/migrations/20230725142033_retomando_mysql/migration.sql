-- CreateTable
CREATE TABLE `Usuario` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeUsuario` VARCHAR(191) NOT NULL,
    `emailUsuario` VARCHAR(191) NOT NULL,
    `senhaUsuario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reuniao` (
    `idReuniao` INTEGER NOT NULL AUTO_INCREMENT,
    `assuntoReuniao` VARCHAR(191) NOT NULL,
    `descricaoReuniao` VARCHAR(191) NOT NULL,
    `observacoes` VARCHAR(191) NOT NULL,
    `reuniaoDesmarcada` BOOLEAN NOT NULL DEFAULT false,
    `localIdFk` INTEGER NULL,
    `inicioReuniao` DATETIME(3) NOT NULL,
    `fimReuniao` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Reuniao_localIdFk_key`(`localIdFk`),
    PRIMARY KEY (`idReuniao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participante` (
    `idParticipante` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeParticipante` VARCHAR(191) NOT NULL,
    `emailParticipante` VARCHAR(191) NOT NULL,
    `telefoneParticipante` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idParticipante`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Local` (
    `idLocal` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeLocal` VARCHAR(191) NOT NULL,
    `enderecoLocal` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idLocal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ParticipanteReuniao` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ParticipanteReuniao_AB_unique`(`A`, `B`),
    INDEX `_ParticipanteReuniao_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reuniao` ADD CONSTRAINT `Reuniao_localIdFk_fkey` FOREIGN KEY (`localIdFk`) REFERENCES `Local`(`idLocal`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ParticipanteReuniao` ADD CONSTRAINT `_ParticipanteReuniao_A_fkey` FOREIGN KEY (`A`) REFERENCES `Participante`(`idParticipante`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ParticipanteReuniao` ADD CONSTRAINT `_ParticipanteReuniao_B_fkey` FOREIGN KEY (`B`) REFERENCES `Reuniao`(`idReuniao`) ON DELETE CASCADE ON UPDATE CASCADE;
