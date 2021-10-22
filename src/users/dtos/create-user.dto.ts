import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Enter an email address' })
  @IsEmail({}, { message: 'Please enter a valid email address' })
  @MaxLength(200, {
    message: 'The email address must be less than 250 characters.',
  })
  email: string;

  @IsNotEmpty({ message: 'Enter user name.' })
  @MaxLength(200, {
    message: 'Name must be less than 200 characters.',
  })
  name: string;

  @IsNotEmpty({ message: 'Enter a date of birth' })
  @MaxLength(20, {
    message: 'Date of birth must be less than 20 characters.',
  })
  nascimento: string;

  @IsNotEmpty({ message: 'Enter a password' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;

  @IsNotEmpty({ message: 'Repeat the password' })
  @MinLength(6, {
    message: 'Repeat password with 6 characters',
  })
  passwordConfirmation: string;
}
