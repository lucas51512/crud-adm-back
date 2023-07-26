import { IsString, IsEmail, MinLength, MaxLength, Matches} from "class-validator";

export class CreateUsuarioDto {

  @IsString()
  nomeUsuario: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  senha: string;
}
