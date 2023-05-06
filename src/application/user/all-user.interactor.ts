import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/model/user';
import { UserRepository } from 'src/domain/repository/user.repository';
import { AllUserUseCase } from 'src/usecase/user/all-user.usecase';

@Injectable()
export class AllUserInteractor implements AllUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async handle(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
