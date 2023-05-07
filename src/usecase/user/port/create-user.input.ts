import { IsEmail, IsNotEmpty, IsString, validate } from 'class-validator';

export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  async isValid() {
    const errors = await validate(this);
    return errors.length < 1;
  }
}
