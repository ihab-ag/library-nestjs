import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from './entities/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({
        required: true,
        unique: true,
    })
    username: string;

    @Prop({
        required: true,
    })
    password: string;

    @Prop()
    roles: Role[];

}

export const UserSchema = SchemaFactory.createForClass(User);