import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './models/UserPayload';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuarioService,
     private readonly jwtService: JwtService) {}
  
    login(usuario: Usuario): UserToken {
        const payload: UserPayload = {
          sub: usuario.idUsuario,
          email: usuario.email,
          name: usuario.nomeUsuario
        };

        const jwtToken = this.jwtService.sign(payload);

        return {
          access_token: jwtToken
        }
    }
    
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
 