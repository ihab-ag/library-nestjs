import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './clients.schema';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';


@Injectable()
export class ClientsService {

  constructor(@InjectModel(Client.name) private readonly ClientModel: Model<ClientDocument>) {}
  
  create(createClientInput: CreateClientInput) {
    
  }

  findAll() {
    return `This action returns all clients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientInput: UpdateClientInput) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
