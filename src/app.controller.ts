import {Controller, Get} from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/hello')
  getRootRoute() {
    return '안녕 Nest';
  }

  @Get('/bye')
  getByeNest(){
    return '잘가 Nest'
  }
}