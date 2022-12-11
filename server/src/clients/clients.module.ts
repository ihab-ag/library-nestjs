import { forwardRef, Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsResolver } from './clients.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './clients.schema';
import { BooksModule } from 'src/books/books.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
    forwardRef(() => BooksModule)
  ],
  providers: [ClientsResolver, ClientsService],
  exports: [ClientsService]
})
export class ClientsModule { }
