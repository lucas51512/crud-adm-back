import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ParticipanteModule } from './participante/participante.module';
import { LocalModule } from './local/local.module';
import { ReuniaoModule } from './reuniao/reuniao.module';

@Module({
  imports: [UsuarioModule, ParticipanteModule, LocalModule, ReuniaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
