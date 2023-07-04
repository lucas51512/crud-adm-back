import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ParticipanteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateParticipanteDto) {
    return await this.prisma.participante.create({
      data: {
        ...data,
      },
    });
  }

  async findAll() {
    return await this.prisma.participante.findMany({
      include: {
        reuniao: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.participante.findUnique({
      include: {
        reuniao: true,
      },
      where: {
        idParticipante: id,
      },
    });
  }

  async update(id: number, data: UpdateParticipanteDto) {
    return await this.prisma.participante.update({
      where: { idParticipante: id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.participante.delete({
      where: { idParticipante: id },
    });
    return `Participante ${id} removido`;
  }
}
