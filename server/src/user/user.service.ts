import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCredentialsInput } from './dto/user-credentials.input';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) { }

  async create(userCredentialsInput: UserCredentialsInput): Promise<User> {

    const hashed_password = await bcrypt.hash(userCredentialsInput.password, 10);

    userCredentialsInput.password = hashed_password;

    const user = new this.UserModel(userCredentialsInput);

    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findUsername(username: string): Promise<User> {
    const user = await this.UserModel.findOne({ username }).exec();
    return user;
  }

}
