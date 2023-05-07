import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/model/user';
import { UserRepository } from 'src/domain/repository/user.repository';
import { CreateUserInput } from 'src/usecase/user/port/create-user.input';
import { GetUserInput } from 'src/usecase/user/port/get-user.input';
import { UserUseCase } from 'src/usecase/user/user.usecase';

@Injectable()
export class UserInteractor implements UserUseCase {
  constructor(private userRepository: UserRepository) {}
  async createUser(input: CreateUserInput) {
    return await this.userRepository.create(input);
  }

  async getUser(input: GetUserInput): Promise<User> {
    return await this.userRepository.findById(input.id);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
