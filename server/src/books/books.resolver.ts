import { Resolver, Query, Mutation, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { ClientsService } from 'src/clients/clients.service';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/user/entities/role.enum';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Roles(Role.Admin)
@Resolver(() => Book)
@UseGuards(JwtGuard, RolesGuard)
export class BooksResolver {
  constructor(
    private readonly booksService: BooksService,
    private readonly clientsService: ClientsService
    ) {}

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.booksService.create(createBookInput);
  }

  @Query(() => [Book], { name: 'books' })
  findAll() {
    return this.booksService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.booksService.findOne(id);
  }

  @Mutation(() => Book)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.booksService.update(updateBookInput.id, updateBookInput);
  }

  @ResolveField()
  client(@Parent() book: Book) {
    const { client_id } = book;
    return this.clientsService.findOne(client_id);
  }
}
