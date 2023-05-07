import { DynamicModule, Module } from '@nestjs/common';
import { UserMysqlRepository } from '../repository/user/user.mysql.repository';
import { UseCaseProxy } from './usecase.proxy';
import { UserInteractor } from 'src/application/user/user.interactor';
import { RepositoryModule } from '../repository/repository.module';

@Module({
  imports: [RepositoryModule],
})
export class UseCaseProxyModule {
  static USER_USECASE_PROXY = 'UserUseCaseProxy';

  static register(): DynamicModule {
    return {
      module: UseCaseProxyModule,
      providers: [
        {
          inject: [UserMysqlRepository],
          provide: UseCaseProxyModule.USER_USECASE_PROXY,
          useFactory: (userRepository: UserMysqlRepository) =>
            new UseCaseProxy(new UserInteractor(userRepository)),
        },
      ],
      exports: [UseCaseProxyModule.USER_USECASE_PROXY],
    };
  }
}
