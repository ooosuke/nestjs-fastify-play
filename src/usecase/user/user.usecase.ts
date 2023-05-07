import { CreateUserInput } from './port/create-user.input';
import { User } from 'src/domain/model/user';
import { GetUserInput } from './port/get-user.input';

export interface UserUseCase {
  createUser(input: CreateUserInput): Promise<User>;
  getUser(input: GetUserInput): Promise<User>;
  findAll(): Promise<User[]>;
}
