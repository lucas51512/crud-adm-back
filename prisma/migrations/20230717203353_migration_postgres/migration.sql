-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "nomeUsuario" TEXT NOT NULL,
    "emailUsuario" TEXT NOT NULL,
    "senhaUsuario" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "Reuniao" (
    "idReuniao" SERIAL NOT NULL,
    "assuntoReuniao" TEXT NOT NULL,
    "descricaoReuniao" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "reuniaoDesmarcada" BOOLEAN NOT NULL DEFAULT false,
    "localIdFk" INTEGER,
    "inicioReuniao" TIMESTAMP(3) NOT NULL,
    "fimReuniao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reuniao_pkey" PRIMARY KEY ("idReuniao")
);

-- CreateTable
CREATE TABLE "Participante" (
    "idParticipante" SERIAL NOT NULL,
    "nomeParticipante" TEXT NOT NULL,
    "emailParticipante" TEXT NOT NULL,
    "telefoneParticipante" TEXT NOT NULL,

    CONSTRAINT "Participante_pkey" PRIMARY KEY ("idParticipante")
);

-- CreateTable
CREATE TABLE "Local" (
    "idLocal" SERIAL NOT NULL,
    "nomeLocal" TEXT NOT NULL,
    "enderecoLocal" TEXT NOT NULL,

    CONSTRAINT "Local_pkey" PRIMARY KEY ("idLocal")
);

-- CreateTable
CREATE TABLE "_ParticipanteReuniao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Reuniao_localIdFk_key" ON "Reuniao"("localIdFk");

-- CreateIndex
CREATE UNIQUE INDEX "_ParticipanteReuniao_AB_unique" ON "_ParticipanteReuniao"("A", "B");

-- CreateIndex
CREATE INDEX "_ParticipanteReuniao_B_index" ON "_ParticipanteReuniao"("B");

-- AddForeignKey
ALTER TABLE "Reuniao" ADD CONSTRAINT "Reuniao_localIdFk_fkey" FOREIGN KEY ("localIdFk") REFERENCES "Local"("idLocal") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParticipanteReuniao" ADD CONSTRAINT "_ParticipanteReuniao_A_fkey" FOREIGN KEY ("A") REFERENCES "Participante"("idParticipante") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParticipanteReuniao" ADD CONSTRAINT "_ParticipanteReuniao_B_fkey" FOREIGN KEY ("B") REFERENCES "Reuniao"("idReuniao") ON DELETE CASCADE ON UPDATE CASCADE;
