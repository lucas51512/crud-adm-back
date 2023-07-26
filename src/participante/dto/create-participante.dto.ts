import { IsInt, IsString, IsEmail, IsPhoneNumber, IsNumber, ValidateIf } from "class-validator";

export class CreateParticipanteDto {

  @IsInt()
  idParticipante: number;

  @IsString()
  nomeParticipante: string;

  @IsEmail()
  emailParticipante: string;

  @IsPhoneNumber()
  telefoneParticipante: string;

  @IsNumber()
  @ValidateIf((object, value) => value !== null)
  reuniaoIdFk?: number;
}
