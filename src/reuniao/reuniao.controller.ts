import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReuniaoService } from './reuniao.service';
import { CreateReuniaoDto } from './dto/create-reuniao.dto';
import { UpdateReuniaoDto } from './dto/update-reuniao.dto';

@Controller('reuniao')
export class ReuniaoController {
  constructor(private readonly reuniaoService: ReuniaoService) {}

  @Post()
  create(@Body() createReuniaoDto: CreateReuniaoDto) {
    const { listaParticipantesObjetos, ...rest } = createReuniaoDto;
    console.log(listaParticipantesObjetos);
    const listaParticipantesNumeros = listaParticipantesObjetos.map(
      (participante) => {
        return participante.idParticipante;
      },
    );
    return this.reuniaoService.create(rest, listaParticipantesNumeros);
  }

  @Get()
  findAll() {
    return this.reuniaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reuniaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReuniaoDto: UpdateReuniaoDto) {
    return this.reuniaoService.update(+id, updateReuniaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reuniaoService.remove(+id);
  }
}
