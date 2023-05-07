import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middlewere/logger.middleware';
import { UseCaseProxyModule } from './infrastructure/usecase-proxy/usecase.proxy.module';
import { ControllerModule } from './presentation/http/controller/controller.module';

@Module({
  imports: [UseCaseProxyModule.register(), ControllerModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
