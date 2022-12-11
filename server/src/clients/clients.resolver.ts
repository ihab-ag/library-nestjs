import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ClientsService } from './clients.service';
import { Client } from './entities/client.entity';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { BooksService } from 'src/books/books.service';
import { Book } from 'src/books/entities/book.entity';

@Resolver(() => Client)
export class ClientsResolver {
  constructor(
    private readonly clientsService: ClientsService,
    private readonly booksService: BooksService
    ) {}

  @Mutation(() => Client)
  createClient(@Args('createClientInput') createClientInput: CreateClientInput) {
    return this.clientsService.create(createClientInput);
  }

  @Query(() => [Client], { name: 'clients' })
  findAll() {
    return this.clientsService.findAll();
  }

  @Query(() => Client, { name: 'client' })
  findOne(@Args('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @Mutation(() => Client)
  updateClient(@Args('updateClientInput') updateClientInput: UpdateClientInput) {
    return this.clientsService.update(updateClientInput.id, updateClientInput);
  }

  @Mutation(() => Client)
  removeClient(@Args('id') id: string) {
    return this.clientsService.remove(id);
  }

  @ResolveField(() => [Book])
  books(@Parent() client: Client) {
    return this.booksService.findByClientId(client.id);
  }
}
