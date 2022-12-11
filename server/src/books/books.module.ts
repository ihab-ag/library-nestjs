import { forwardRef, Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './books.schema';
import { ClientsModule } from 'src/clients/clients.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    forwardRef(() => ClientsModule)
  ],
  providers: [BooksResolver, BooksService]
})
export class BooksModule {}
