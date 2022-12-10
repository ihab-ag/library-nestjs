import { Injectable } from "@nestjs/common";
import { UserCredentialsInput } from "src/user/dto/user-credentials.input";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt';
import { LoginResponse } from "./dto/login-response";
import { User } from "src/user/entities/user.entity";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findUsername(username);
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async signup(userCredentialsInput: UserCredentialsInput): Promise<any> {
        return this.userService.create(userCredentialsInput);
    }

    async login(user: User): Promise<LoginResponse> {

        return {
            accessToken: this.jwtService.sign({
                sub: user._id,
                roles: user.roles
            }),
            user
        };
    }
}