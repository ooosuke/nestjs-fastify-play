import { User } from 'src/domain/model/user';

export class UserSerializer {
  static serialize(user: User) {
    return {
      ...user,
    };
  }
}
