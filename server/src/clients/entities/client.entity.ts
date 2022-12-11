import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Client {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field()
  email: string
}
