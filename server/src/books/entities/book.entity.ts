import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Status } from './status.enum';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  status: Status;

  @Field(() => ID, { nullable: true })
  client_id: string | null;
}
