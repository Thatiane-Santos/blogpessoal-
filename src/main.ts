import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 process.env.TZ = '-03:00'; // setar o fuso// 

 app.useGlobalPipes(new ValidationPipe()); // Validar //

 app.enableCors(); //verifica quem acessou// 

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
