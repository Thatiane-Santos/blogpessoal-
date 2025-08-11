import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Generation Brasil","https://github.com/Thatiane-Santos","thatiane.ssantana@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

 process.env.TZ = '-03:00'; // setar o fuso// 

 app.useGlobalPipes(new ValidationPipe()); // Validar //

 app.enableCors(); //verifica quem acessou// 

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
