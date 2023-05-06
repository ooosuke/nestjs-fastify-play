import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/model/user';
import { UserRepository } from 'src/domain/repository/user.repository';
import { GetUserInput } from 'src/usecase/user/dto/get-user.input';
import { GetUserUseCase } from 'src/usecase/user/get-user.usecase';

@Injectable()
export class GetUserInteractor implements GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async handle(input: GetUserInput): Promise<User> {
    return await this.userRepository.findById(input.id);
  }
}
