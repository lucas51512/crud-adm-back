import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
  .setTitle("Documentação com Swagger - Crud de Reuniões")
  .setDescription(
    'O Swagger (aka OpenApi) é uma biblioteca muito conhecida no universo backend, estando disponível para diversas linguagens e frameworks. Ela gera um site interno no seu backend que descreve, com muitos detalhes, cada endpoint e estrutura de entidades presentes na sua aplicação.',
  )
  .setVersion('1.0')
  .addTag('Usuarios')
  .addTag('Reuniões')
  .addTag('Participantes')
  .addTag('Locais')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document)

  await app.listen(3000);
}
bootstrap();
