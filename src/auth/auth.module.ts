import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [UsuarioModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: '30d'}
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy,]
})
export class AuthModule {}
