import { Injectable } from "@nestjs/common";
import { UserCredentialsInput } from "src/user/dto/user-credentials.input";
import { User } from "src/user/user.schema";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findUsername(username);
        if (user && bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async signup(userCredentialsInput: UserCredentialsInput): Promise<User> {
        return this.userService.create(userCredentialsInput);
    }

    async login(user: User) {

        return {
            access_token: 'jwt-token',
            user
        };
    }
}