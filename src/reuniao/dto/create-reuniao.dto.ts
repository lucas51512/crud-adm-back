export class CreateReuniaoDto {
  assuntoReuniao: string;
  descricaoReuniao: string;
  inicioReuniao?: Date | string;
  fimReuniao?: Date | string;
  listaParticipantesNumeros?: null | number[];
}
