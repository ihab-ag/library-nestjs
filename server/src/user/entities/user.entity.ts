import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Role } from './role.enum';

@ObjectType()
export class User {
  @Field(type => ID)
  _id: string;

  @Field()
  username: string;

  @Field(() => [String], { nullable: true })
  roles?: Role[];
}