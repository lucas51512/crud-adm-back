import { IsString, IsEmail } from "class-validator";

export class CreateUsuarioDto {

  @IsString()
  nomeUsuario: string;

  @IsEmail()
  emailUsuario: string;

  @IsString()
  senhaUsuario: string;
}
