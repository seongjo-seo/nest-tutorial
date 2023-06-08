import {Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return '안녕 Nest';
  }
}