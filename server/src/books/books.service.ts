import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './books.schema';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Status } from './entities/status.enum';

@Injectable()
export class BooksService {

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  create(createBookInput: CreateBookInput) {
    const createdBook = new this.bookModel({
      ...createBookInput,
      status: Status.Available,
      client_id: null
    });
    return createdBook.save();
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
