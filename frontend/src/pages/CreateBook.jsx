import React, { useState } from "react";
import axios from "axios";

// Component imports
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

// Other imports
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { API_URL } from "../Config";

const CreateBook = () => {
    // States for book attributes
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    // State for loading
    const [loading, setLoading] = useState("");
    // Used to navigate back to home after creating new book
    const navigate = useNavigate();
    // notistack
    const { enqueueSnackbar } = useSnackbar();

    // function that executes when data is submitted via forms
    const handleSaveBook = () => {
        // Create an object to hold all necessary data
        const data = {
            title,
            author,
            publishYear,
        };
        // Set loading to true
        setLoading(true);
        axios
            .post(`${API_URL}/books`, data)
            .then(() => {
                // If successful, set loading to false and navigate back to home
                setLoading(false);
                enqueueSnackbar("Book created successfully.", {
                    variant: "success",
                });
                navigate("/");
            })
            .catch((error) => {
                // If unsuccessful, set loading to false, show alert message, print error to console
                setLoading(false);
                // Alert no longer needed, snackbar notistack instead
                //alert("An error happened. Please check console.");
                enqueueSnackbar("Error. Book not created.", {
                    variant: "error",
                });
                console.log(error);
            });
    };
    // Return forms
    return (
        <div className="p-4 mx-auto max-w-7xl animate-slideRightLeft">
            <div className="flex items-center">
                <BackButton />
                <h1 className="text-2xl my-4 ml-4 font-bold">Add Book</h1>
            </div>
            {loading ? <Spinner /> : ""}
            <div className="flex flex-col max-w-xl px-3 py-2 mx-auto border-2 border-slate-700 rounded-md bg-slate-800">
                <div className="flex items-center">
                    <label className="mr-4 text-white font-bold w-40">
                        Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-2 rounded-md border-slate-700 my-1 px-2 py-1 w-full bg-transparent"
                    />
                </div>
                <div className="flex items-center">
                    <label className="mr-4 text-white font-bold w-40">
                        Author
                    </label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="border-2 rounded-md border-slate-700 my-1 px-2 py-1 w-full bg-transparent"
                    />
                </div>
                <div className="flex items-center">
                    <label className="mr-4 rounded-md text-white font-bold w-40">
                        Publish Year
                    </label>
                    <input
                        type="text"
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className="border-2 rounded-md border-slate-700 my-1 px-2 py-1 w-full bg-transparent"
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    className="rounded-md border-2 border-green-700 p-1 bg-green-800 my-4 w-20 hover:brightness-150 transition ease-in-out"
                    onClick={handleSaveBook}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default CreateBook;
