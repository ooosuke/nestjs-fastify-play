import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { PrismaService } from './infrastructure/database/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );
  const prisma = app.get(PrismaService);
  prisma.enableShtdownHooks(app);
  await app.listen(process.env.PORT || 3000, '0.0.0.0'); // 外部ホストからのAPIを受け入れるため0.0.0.0を指定する
}
bootstrap();
