import { Participante } from '@prisma/client';

export class CreateReuniaoDto {
  assuntoReuniao: string;
  descricaoReuniao: string;
  inicioReuniao?: Date | string;
  fimReuniao?: Date | string;
  listaParticipantesObjetos?: null | Participante[];
}
