import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Client } from 'src/clients/entities/client.entity';
import { Status } from './status.enum';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => Status)
  status: Status;

  @Field(() => ID, { nullable: true })
  client_id: string | null;

  @Field(() => Client)
  client: Client;
}

registerEnumType(Status, {
  name: 'Status',
});