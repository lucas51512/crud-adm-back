import { Module } from '@nestjs/common';
import { ReuniaoService } from './reuniao.service';
import { ReuniaoController } from './reuniao.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ReuniaoController],
  providers: [ReuniaoService, PrismaService],
})
export class ReuniaoModule {}
