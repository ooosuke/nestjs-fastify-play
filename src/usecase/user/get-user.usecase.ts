import { UseCase } from 'src/lib/types';
import { GetUserInput } from './dto/get-user.input';
import { User } from 'src/domain/model/user';

export type GetUserUseCase = UseCase<GetUserInput, User>;
