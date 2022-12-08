import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import {PassportModule} from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
imports: [UserModule, PassportModule],
    providers: [AuthService, AuthResolver, LocalStrategy],
})
export class AuthModule {}