import { Participante } from '@prisma/client';

export class CreateReuniaoDto {
  assuntoReuniao: string;
  descricaoReuniao: string;
  observacoes: string;
  reuniaoDesmarcada: boolean;
  inicioReuniao?: Date | string;
  fimReuniao?: Date | string;
  localIdFk?: number;
  listaParticipantes?: Participante[];
}
