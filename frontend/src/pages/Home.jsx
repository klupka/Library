import React, { useState, useEffect } from "react";
import axios from "axios";

// Component imports
import Spinner from "../components/Spinner";
import HomeTable from "../components/home/HomeTable";
import HomeCards from "../components/home/HomeCards";

// Icon imports
import { Link } from "react-router-dom";
import { PiBooksFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import { HiViewList } from "react-icons/hi";
import { HiViewGrid } from "react-icons/hi";

// Other imports
import { API_URL } from "../Config";

const Home = ({ setCardsView, cardsView }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Loading equals true
        setLoading(true);
        axios
            // If successful, get data and loading equals false
            .get(`${API_URL}/books`)
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            // If unsuccessful, return error and loading equals false
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-4 mx-auto max-w-7xl animate-slideLeftRight">
            <div className="flex justify-between items-center">
                <h1 className="flex items-center text-2xl my-4 ">
                    <PiBooksFill className="mr-3 text-3xl" />
                    <span className="font-bold">Library</span>
                </h1>
                <div className="flex gap-2">
                    {/* Table button */}
                    <button
                        className={
                            "bg-slate-800 border-2 border-slate-700 hover:brightness-150 transition ease-in-out p-1 rounded-md " +
                            (cardsView ? "opacity-50" : "")
                        }
                        onClick={() => {
                            setCardsView(false);
                        }}
                    >
                        <HiViewList className="text-xl" />
                    </button>
                    {/* Cards button */}
                    <button
                        className={
                            "bg-slate-800 border-2 border-slate-700 hover:brightness-150 transition ease-in-out p-1 rounded-md " +
                            (cardsView ? "" : "opacity-50")
                        }
                        onClick={() => {
                            setCardsView(true);
                        }}
                    >
                        <HiViewGrid className="text-xl" />
                    </button>
                </div>
                <Link to="/books/create">
                    <div className="w-fit m-4 mx-auto flex justify-between items-center  font-bold pr-2 hover:brightness-150 transition ease-in-out">
                        <FaPlus className="text-green-500 text-1xl mr-2" />
                        <span className="text-green-500">Add Book</span>
                    </div>
                    {/*<MdAddBox className="text-sky-400 text-4xl" />*/}
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : cardsView ? (
                <HomeCards books={books} />
            ) : (
                <HomeTable books={books} />
            )}
            <div className="mt-5 text-sm text-slate-600 flex justify-center">
                © 2024 Seth Klupka. All rights reserved.
            </div>
        </div>
    );
};

export default Home;
