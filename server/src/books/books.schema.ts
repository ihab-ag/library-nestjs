import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
    
    @Prop({
        required: true,
    })
    title: string;

    @Prop({
        required: true,
    })
    status: string

    @Prop({
        required: false,
    })
    client_id: mongoose.Schema.Types.ObjectId | null

}

export const BookSchema = SchemaFactory.createForClass(Book);