import { User } from '../model/user';

export type CreateUserData = {
  name: string;
  email: string;
};

export type UpdateUserData = {
  name: string;
  email: string;
};

export interface UserRepository {
  create(user: CreateUserData): Promise<User>;
  update(id: string, user: UpdateUserData): Promise<void>;
  findById(id: string): Promise<User>;
  findAll(): Promise<User[]>;
}
