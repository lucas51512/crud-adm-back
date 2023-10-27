import { IsString } from "class-validator";

export class CreateLocalDto {
  @IsString()
  nomeLocal: string;

  @IsString()
  enderecoLocal: string;
}
