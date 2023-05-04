import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { FastifyReply, FastifyRequest } from 'fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async getHello(
    @Req() req: FastifyRequest,
    @Res() res: FastifyReply,
  ): Promise<string> {
    return res.status(200).send(this.appService.getHello());
  }
}
