import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsResolver } from './clients.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './clients.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Client.name , schema: ClientSchema }])],
  providers: [ClientsResolver, ClientsService]
})
export class ClientsModule {}
