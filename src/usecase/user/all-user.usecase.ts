import { User } from 'src/domain/model/user';
import { UseCase } from 'src/lib/types';

export type AllUserUseCase = UseCase<null, User[]>;
