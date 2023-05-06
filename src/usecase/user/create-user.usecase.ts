import { UseCase } from 'src/lib/types';
import { CreateUserInput } from './dto/create-user.input';
import { User } from 'src/domain/model/user';

export type CreateUserUseCase = UseCase<CreateUserInput, User>;
