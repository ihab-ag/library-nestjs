import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserCredentialsInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
