import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsNotEmpty,
} from 'class-validator';

export class ChangePasswordDto {
  @IsNotEmpty({ message: 'Enter a password' })
  @MinLength(6, { message: 'Enter a password with 6 characters' })
  @MaxLength(32, { message: 'Password must have a maximum of 14 characters' })
  @IsString({ message: 'Enter a valid password' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must contain at least one uppercase letter, a lowercase letter, a number and a symbol.',
  })
  password: string;

  @IsNotEmpty({ message: 'Confirm a password' })
  @MinLength(6, {
    message: 'Repeat password with 6 characters',
  })
  @MaxLength(32, {
    message: 'Password must have a maximum of 32 characters',
  })
  @IsString({ message: 'Enter a valid password' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must contain at least one uppercase letter, a lowercase letter, a number and a symbol.',
  })
  passwordConfirmation: string;
}
