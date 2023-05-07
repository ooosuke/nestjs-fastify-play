import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserSerializer } from '../../serializer/user/user.serializer';
import { GetUserInput } from 'src/usecase/user/port/get-user.input';
import { CreateUserInput } from 'src/usecase/user/port/create-user.input';
import { UserUseCase } from 'src/usecase/user/user.usecase';
import { UseCaseProxyModule } from 'src/infrastructure/usecase-proxy/usecase.proxy.module';
import { UseCaseProxy } from 'src/infrastructure/usecase-proxy/usecase.proxy';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UseCaseProxyModule.USER_USECASE_PROXY)
    private userUseCase: UseCaseProxy<UserUseCase>,
  ) {}

  @Get()
  async all() {
    const users = await this.userUseCase.getInstance().findAll();
    return users.map((user) => UserSerializer.serialize(user));
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.userUseCase
      .getInstance()
      .getUser(new GetUserInput(id));
    return user ? UserSerializer.serialize(user) : null;
  }

  @Post()
  async createUser(@Body() data: CreateUserInput) {
    const user = await this.userUseCase
      .getInstance()
      .createUser(new CreateUserInput(data.name, data.email));

    return UserSerializer.serialize(user);
  }
}
