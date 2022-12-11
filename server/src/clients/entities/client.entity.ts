import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Book } from 'src/books/entities/book.entity';

@ObjectType()
export class Client {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field()
  email: string

  @Field(()=> [Book])
  books: Book[]
}
