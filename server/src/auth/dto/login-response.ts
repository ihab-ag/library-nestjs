import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class LoginResponse {
    @Field()
    accessToken: string;

    @Field()
    user: User
    }
