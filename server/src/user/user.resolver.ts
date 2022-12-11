import { UseGuards } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { Roles } from "src/auth/decorators/roles.decorator";
import { JwtGuard } from "src/auth/guards/jwt.guard";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { Role } from "./entities/role.enum";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Roles(Role.Admin) 
@Resolver()
@UseGuards(JwtGuard, RolesGuard)
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query(() => [User], { name: 'users' })
    findAll() {
      return this.userService.findAll();
    }

    @Query(() => User)
    user(@Args('username') username: string) {
        return this.userService.findUsername(username);
    }
}