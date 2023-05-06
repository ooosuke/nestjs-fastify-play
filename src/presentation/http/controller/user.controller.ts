import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AllUserUseCase } from 'src/usecase/user/all-user.usecase';
import { CreateUserUseCase } from 'src/usecase/user/create-user.usecase';
import { GetUserUseCase } from 'src/usecase/user/get-user.usecase';
import { UserSerializer } from '../serializer/user.serializer';
import { GetUserInput } from 'src/usecase/user/dto/get-user.input';
import { CreateUserInput } from 'src/usecase/user/dto/create-user.input';

@Controller('user')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private getUserUseCase: GetUserUseCase,
    private allUserUseCase: AllUserUseCase,
  ) {}

  @Get()
  async all() {
    const users = await this.allUserUseCase.handle();
    return users.map((user) => UserSerializer.serialize(user));
  }

  @Get(':id')
  async getUser(@Param() id: string) {
    const user = await this.getUserUseCase.handle(new GetUserInput(id));
    return UserSerializer.serialize(user);
  }

  @Post()
  async createUser(@Body() data: CreateUserInput) {
    const user = await this.createUserUseCase.handle(
      new CreateUserInput(data.name, data.email),
    );

    return UserSerializer.serialize(user);
  }
}
