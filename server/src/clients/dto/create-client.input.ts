import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
  @Field()
  name: string

  @Field()
  email: string
}