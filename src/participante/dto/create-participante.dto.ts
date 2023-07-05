export class CreateParticipanteDto {
  idParticipante?: number;
  nomeParticipante: string;
  emailParticipante: string;
  telefoneParticipante: string;
  reuniaoIdFk?: number;
}
