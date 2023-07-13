import { Injectable } from '@nestjs/common';
import { CreateReuniaoDto } from './dto/create-reuniao.dto';
import { UpdateReuniaoDto } from './dto/update-reuniao.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReuniaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateReuniaoDto) {
    const { listaParticipantes, ...rest } = data;
    const listaParticipantesNumeros = listaParticipantes.map((participante) => {
      return participante.idParticipante;
    });
    console.log(data, listaParticipantesNumeros);
    return await this.prisma.reuniao.create({
      data: {
        ...rest,
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
    const { listaParticipantes, ...rest } = data;
    const listaParticipantesNumeros = listaParticipantes.map((participante) => {
      return participante.idParticipante;
    });

    return await this.prisma.reuniao.update({
      where: { idReuniao: id },
      data: {
        ...rest,
        listaParticipantes: {
          set: listaParticipantesNumeros.map((participanteNumero) => ({
            idParticipante: participanteNumero,
          })),
        },
      },
    });
  }

  async remove(id: number) {
    await this.prisma.reuniao.delete({
      where: { idReuniao: id },
    });
    return `Reuniao ${id} removida`;
  }
}
