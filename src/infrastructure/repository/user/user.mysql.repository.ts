import { User } from 'src/domain/model/user';
import {
  CreateUserData,
  UpdateUserData,
  UserRepository,
} from 'src/domain/repository/user.repository';
import { PrismaService } from '../../database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserMysqlRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async create(user: CreateUserData): Promise<User> {
    const created = await this.prisma.user.create({ data: { ...user } });

    return User.build(created);
  }

  async update(id: string, user: UpdateUserData): Promise<void> {
    await this.prisma.user.update({ data: user, where: { id } });
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    return user ? User.build(user) : null;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users.map((user) => User.build(user));
  }
}
