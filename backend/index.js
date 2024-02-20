import express from "express";
import mongoose from "mongoose";

import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

import cors from "cors";

// Get data from .env
import { config } from "dotenv";
config();

const app = express();

// Allow express to use json. Required for POST to send json data
// All app.XXX() are Express functions
app.use(express.json());

// Option 1: Allow all origins with default of cors(*)
app.use(cors());
// Option 2: Allow custom origins
// app.use(
//     cors({
//         origin: "https://localhost:5555",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type"],
//     })
// );

// GET request route using '/' to print a welcome message to the default path
app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN Stack Tutorial");
});

// For all requests with URL of '/books' use the booksRoute file/object
app.use("/books", booksRoute);

// Connect to MongoDB using mongoDB_URL and listen on PORT
mongoose
    .connect(process.env.mongoDB_URL)
    .then(() => {
        console.log("App connected to database.");
        // Express func: app.listen([port[, host[, backlog]]][, callback])
        // Tells the app to start listening for visitors on a specific address and port
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
