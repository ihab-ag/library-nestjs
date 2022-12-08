import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  _id: string;

  @Field()
  username: string;

}