import { Injectable } from '@nestjs/common';
import { CreateReuniaoDto } from './dto/create-reuniao.dto';
import { UpdateReuniaoDto } from './dto/update-reuniao.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReuniaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateReuniaoDto, listaParticipantesNumeros: number[]) {
    console.log(data, listaParticipantesNumeros);
    return await this.prisma.reuniao.create({
      data: {
        ...data,
        listaParticipantes: {
          connect: listaParticipantesNumeros.map((participanteNumero) => ({
            idParticipante: participanteNumero,
          })),
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.reuniao.findMany({
      include: {
        listaParticipantes: true,
        localReuniao: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.reuniao.findUnique({
      include: {
        listaParticipantes: true,
      },
      where: {
        idReuniao: id,
      },
    });
  }

  async update(id: number, data: UpdateReuniaoDto) {
    return await this.prisma.reuniao.update({
      where: { idReuniao: id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.reuniao.delete({
      where: { idReuniao: id },
    });
    return `Reuniao ${id} removida`;
  }
}
