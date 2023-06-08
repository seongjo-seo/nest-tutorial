import {Controller, Module, Get} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return '안녕 Nest';
  }
}


@Module({
  controllers: [AppController]
})
class AppModule {}

async function bootstrap(){
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();