import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/model/user';
import { UserRepository } from 'src/domain/repository/user.repository';
import { CreateUserUseCase } from 'src/usecase/user/create-user.usecase';
import { CreateUserInput } from 'src/usecase/user/dto/create-user.input';

@Injectable()
export class CreateUserInteractor implements CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async handle(input: CreateUserInput): Promise<User> {
    return await this.userRepository.create(input);
  }
}
