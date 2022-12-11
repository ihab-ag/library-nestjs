import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/user/entities/role.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);