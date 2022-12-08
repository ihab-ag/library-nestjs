import { AuthService } from "./auth.service";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserCredentialsInput } from "src/user/dto/user-credentials.input";
import { User } from "src/user/entities/user.entity";

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) { }

    @Mutation(() => User)
    signup(@Args('userCredentialsInput') userCredentialsInput: UserCredentialsInput) {
        return this.authService.signup(userCredentialsInput);
    }
}