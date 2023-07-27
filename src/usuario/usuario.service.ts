import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUsuarioDto) {
    const usuario = {
      ...data,
      password: await bcrypt.hash(data.password, 10)
    }
    const usuarioCriado = await this.prisma.usuario.create({
      data: usuario
    });

    return { ...usuarioCriado, senha: undefined }
  }

  async findAll() {
    return await this.prisma.usuario.findMany();
  }

  // async findOne(id: number) {
  //   return await this.prisma.usuario.findUnique({
  //     where: {
  //       idUsuario: id,
  //     },
  //   });
  // }


  findByEmail(email: string){
    return this.prisma.usuario.findFirst({
      where: { email: email },
    });
  }

  async update(id: number, data: UpdateUsuarioDto) {
    return await this.prisma.usuario.update({
      where: { idUsuario: id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.usuario.delete({
      where: { idUsuario: id },
    });
    return `Usuario ${id} removido`;
  }
}
