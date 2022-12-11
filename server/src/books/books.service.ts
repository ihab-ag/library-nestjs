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
    const books = this.bookModel.find().exec();
    return books;
  }

  findOne(id: string) {
    const book = this.bookModel.findById(id).exec();
    return book;
  }

  update(id: string, updateBookInput: UpdateBookInput) {
    const updated_book = this.bookModel.findByIdAndUpdate(id, {...updateBookInput}, { new: true }).exec();
    return updated_book;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
