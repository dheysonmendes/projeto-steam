import { UserRole } from '../user-roles.enum';
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Please enter a valid username' })
  name: string;

  @IsOptional()
  @IsEmail({}, { message: 'Please enter a valid email address' })
  email: string;

  @IsOptional()
  image: string;

  @IsOptional()
  bio: string;

  @IsOptional()
  role: UserRole;

  @IsOptional()
  status: boolean;
}
