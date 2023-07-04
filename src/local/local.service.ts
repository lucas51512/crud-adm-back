import { Injectable } from '@nestjs/common';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LocalService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateLocalDto) {
    return await this.prisma.local.create({
      data: {
        ...data,
      },
    });
  }

  async findAll() {
    return await this.prisma.local.findMany({
      include: {
        reuniao: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.local.findUnique({
      include: {
        reuniao: true,
      },
      where: {
        idLocal: id,
      },
    });
  }

  async update(id: number, data: UpdateLocalDto) {
    return await this.prisma.local.update({
      where: { idLocal: id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.local.delete({
      where: { idLocal: id },
    });
    return `Local ${id} removido`;
  }
}
