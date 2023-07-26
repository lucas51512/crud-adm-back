import { Participante } from '@prisma/client';
import { IsString, IsBoolean } from 'class-validator';

export class CreateReuniaoDto {

  @IsString()
  assuntoReuniao: string;

  @IsString()
  descricaoReuniao: string;

  @IsString()
  observacoes: string;

  @IsBoolean()
  reuniaoDesmarcada: boolean;
  inicioReuniao?: Date | string;
  fimReuniao?: Date | string;
  
  localIdFk?: number;
  listaParticipantes?: Participante[];
}
