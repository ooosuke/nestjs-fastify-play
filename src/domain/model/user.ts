import { Type, plainToInstance } from 'class-transformer';

// domain model
export class User {
  id: string;

  name: string;

  email: string;

  @Type(() => Date)
  createdAt: Date;

  @Type(() => Date)
  updatedAt: Date;

  static build(user: Partial<User>) {
    return plainToInstance(User, user);
  }
}
