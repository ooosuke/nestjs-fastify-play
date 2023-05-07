import { Module } from '@nestjs/common';
import { UseCaseProxyModule } from 'src/infrastructure/usecase-proxy/usecase.proxy.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [UseCaseProxyModule.register()],
  controllers: [UserController],
})
export class ControllerModule {}
