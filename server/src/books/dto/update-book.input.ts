import { CreateBookInput } from './create-book.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { Status } from '../entities/status.enum';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(() => ID)
  id: string;
  
  @Field(() => ID, { nullable: true })
  client_id: string;

  @Field(() => Status)
  status: Status;
}
