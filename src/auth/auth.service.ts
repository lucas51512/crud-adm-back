import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usuarioService: UsuarioService) {}
    async validateUser(email: string, password: string) {
        const usuario = await this.usuarioService.findByEmail(email);

        if(usuario){
          const senhaValida = await bcrypt.compare(password, usuario.password);

          if(senhaValida){
            return {
                ...usuario, 
                password: undefined
            }
          }
        }

        throw new Error('Email ou senha inválidos!');
    }
}
 