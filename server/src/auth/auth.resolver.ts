import { AuthService } from "./auth.service";
import { Args, Mutation, Resolver, Context } from "@nestjs/graphql";
import { UserCredentialsInput } from "src/user/dto/user-credentials.input";
import { User } from "src/user/entities/user.entity";
import { LoginResponse } from "./dto/login-response";
import { LocalAuthGuard } from "./guards/local.guard";
import { UseGuards } from "@nestjs/common";

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) { }

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