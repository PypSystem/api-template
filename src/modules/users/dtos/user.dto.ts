import { Role } from '@prisma/client';

export class UserDto {
  id: string;

  name: string;

  email: string;

  password?: string;

  role: Role;

  createdAt: Date;

  updatedAt: Date;
}
