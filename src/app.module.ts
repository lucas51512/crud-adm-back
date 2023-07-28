import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ParticipanteModule } from './participante/participante.module';
import { LocalModule } from './local/local.module';
import { ReuniaoModule } from './reuniao/reuniao.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
  imports: [UsuarioModule, ParticipanteModule, LocalModule, ReuniaoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }],
})
export class AppModule {}
