import { Module } from '@nestjs/common';
import { PrismaModule } from '../database/prisma.module';
import { UserMysqlRepository } from './user/user.mysql.repository';

@Module({
  imports: [PrismaModule],
  providers: [UserMysqlRepository],
  exports: [UserMysqlRepository],
})
export class RepositoryModule {}
