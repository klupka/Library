import React, { useEffect, useState } from "react";
import axios from "axios";

// Component imports
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

// Other imports
import { useParams } from "react-router-dom";
import { API_URL } from "../Config";

const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const getTimeFromDate = (dateData) => {
        const date = new Date(dateData);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        return formattedTime;
    };

    const bookCreatedAtTime = getTimeFromDate(book.createdAt);
    const bookUpdatedAtTime = getTimeFromDate(book.updatedAt);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${API_URL}/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-4 mx-auto max-w-7xl animate-slideRightLeft">
            <div className="flex items-center just">
                <BackButton />
                <h1 className="text-2xl my-4 ml-4 font-bold">Book Details</h1>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex justify-center max-md:text-sm">
                    <div className="w-[576px] bg-slate-800 rounded-md border-2 border-slate-700">
                        <table className="w-full">
                            <tbody>
                                <tr className="h-12 border-b-2 border-slate-700">
                                    <th className="text-white text-left pl-5">
                                        ID
                                    </th>
                                    <td className="text-white">{book._id}</td>
                                </tr>
                                <tr className="h-12 border-b-2 border-slate-700">
                                    <th className="text-white text-left pl-5">
                                        Title
                                    </th>
                                    <td className="text-white">{book.title}</td>
                                </tr>
                                <tr className="h-12 border-b-2 border-slate-700">
                                    <th className="text-white text-left pl-5">
                                        Author
                                    </th>
                                    <td className="text-white">
                                        {book.author}
                                    </td>
                                </tr>
                                <tr className="h-12 border-b-2 border-slate-700">
                                    <th className="text-white text-left pl-5">
                                        Published
                                    </th>
                                    <td className="text-white">
                                        {book.publishYear}
                                    </td>
                                </tr>
                                <tr className="h-12 border-b-2 border-slate-700">
                                    <th className="bg-slate-800 text-white text-left pl-5">
                                        Created
                                    </th>
                                    <td className="text-white">
                                        {new Date(
                                            book.createdAt
                                        ).toLocaleDateString("en-US")}
                                        {" at "}
                                        {bookCreatedAtTime}
                                    </td>
                                </tr>
                                <tr className="h-12">
                                    <th className="text-white text-left pl-5">
                                        Updated
                                    </th>
                                    <td className="text-white">
                                        {new Date(
                                            book.updatedAt
                                        ).toLocaleDateString("en-US")}
                                        {" at "}
                                        {bookUpdatedAtTime}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowBook;
