import { NestMiddleware } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

export class LoggerMiddleware implements NestMiddleware {
  use(
    req: FastifyRequest['raw'],
    res: FastifyReply['raw'],
    next: (error?: any) => void,
  ) {
    console.log(`Request...`);
    next();
  }
}
