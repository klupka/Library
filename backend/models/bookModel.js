import mongoose from "mongoose";

// defines the schema/outline for a book. EX: books posses a title, author, publishYear, etc.
const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// assign the Book object a model using the bookSchema defined previously.
export const Book = mongoose.model("Cat", bookSchema);
