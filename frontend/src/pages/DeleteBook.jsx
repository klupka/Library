import React, { useState } from "react";
import axios from "axios";

// Component imports
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

// Icon imports
import { MdDelete } from "react-icons/md";

// Other imports
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { API_URL } from "../Config";

const DeleteBook = () => {
    // State for loading
    const [loading, setLoading] = useState("");
    // Used to navigate back to home after creating new book
    const navigate = useNavigate();
    // Get ID from params
    const { id } = useParams();
    // notistack
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteBook = () => {
        setLoading(true);
        // If successful, delete book and navigate to home
        axios
            .delete(`${API_URL}/books/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Book deleted successfully.", {
                    variant: "success",
                });
                navigate("/");
            })
            // If unsuccessful, return error
            .catch((error) => {
                setLoading(false);
                console.log(error);
                // Alert no longer needed, snackbar notistack instead
                //alert("An error happened. Please check console.");
                enqueueSnackbar("Error. Book not deleted.", {
                    variant: "error",
                });
            });
    };

    return (
        <div className="p-4 mx-auto max-w-7xl animate-slideRightLeft">
            <div className="flex items-center just">
                <BackButton />
                <h1 className="text-2xl my-4 ml-4 font-bold">Delete Book</h1>
            </div>
            {loading ? <Spinner /> : ""}
            <div className="flex flex-col items-center border-slate-700 bg-slate-800 rounded-md border-2 max-w-xl px-3 py-2 mx-auto">
                <h2 className="">Are you sure you want to delete this book?</h2>
                <h2>
                    This action <span className="underline">cannot</span> be
                    undone.
                </h2>
            </div>
            <div className="flex justify-center">
                <button
                    className="p-1 border-2 border-red-500 bg-red-700 text-white my-4 w-25 rounded-md font-bold flex items-center gap-1 pr-2 hover:brightness-150 transition ease-in-out"
                    onClick={handleDeleteBook}
                >
                    <MdDelete className="text-1xl" />
                    DELETE
                </button>
            </div>
        </div>
    );
};

export default DeleteBook;
