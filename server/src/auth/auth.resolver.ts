import { AuthService } from "./auth.service";
import { Args, Mutation, Resolver, Context } from "@nestjs/graphql";
import { UserCredentialsInput } from "src/user/dto/user-credentials.input";
import { User } from "src/user/entities/user.entity";
import { LoginResponse } from "./dto/login-response";
import { LocalAuthGuard } from "./guards/local.guard";
import { UseGuards } from "@nestjs/common";
import { Roles } from "./decorators/roles.decorator";
import { Role } from "src/user/entities/role.enum";
import { JwtGuard } from "./guards/jwt.guard";
import { RolesGuard } from "./guards/roles.guard";

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) { }

    @Roles(Role.Admin)
    @UseGuards(JwtGuard, RolesGuard)
    @Mutation(() => User)
    signup(@Args('userCredentialsInput') userCredentialsInput: UserCredentialsInput) {
        return this.authService.signup(userCredentialsInput);
    }

    @Mutation(() => LoginResponse)
    @UseGuards(LocalAuthGuard)
    login(@Args('loginInput') loginInput: UserCredentialsInput, @Context() ctx) {
        return this.authService.login(ctx.user._doc);
    }
}