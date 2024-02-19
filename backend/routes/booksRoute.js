import express from "express";
const router = express.Router();
import { Book } from "../models/bookModel.js";

// Note: Working with Mongoose isn't a synchronous process, thus we need to use async

// POST: Create new book
router.post("/", async (request, response) => {
    try {
        // Check to see if all required data has been provided
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            // If missing data, send error message
            return response.status(400).send({
                message: "Send all required fields: title, author, publicYear",
            });
        }
        // If no validation issues, create newBook and add to database
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// GET: Get all books
router.get("/", async (request, response) => {
    try {
        // Passing an empty object inside of .find() allows you to get a list of all books
        const books = await Book.find({});
        // Must return a status code, or else will request forever. Returns count and list of books inside data
        return response.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// GET: Get one book by ID
router.get("/:id", async (request, response) => {
    try {
        // Get ID of book in question
        const { id } = request.params;
        // Find book using findById() function
        const book = await Book.findById(id);

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// PUT: Update book by ID
router.put("/:id", async (request, response) => {
    try {
        // Check to see if all required data has been provided
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            // If missing data, send error message
            return response.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }

        // Get ID of book in question
        const { id } = request.params;
        // Get book by ID and update it with data in request.body
        const result = await Book.findByIdAndUpdate(id, request.body);
        // If result does not exist, book not found
        if (!result) {
            return response.status(404).json({ message: "Book not found" });
        }
        // If result exists, updated book successfully
        return response
            .status(200)
            .send({ message: "Book updated successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// DELETE: Delete book by ID
router.delete("/:id", async (request, response) => {
    try {
        // Get ID of book in question
        const { id } = request.params;
        // Get book by ID and delete it
        const result = await Book.findByIdAndDelete(id);

        // If result does not exist, book not found
        if (!result) {
            return response.status(404).json({ message: "Book not found" });
        }
        // If result exists, deleted book successfully
        return response
            .status(200)
            .send({ message: "Book deleted successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
