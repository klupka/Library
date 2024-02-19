import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { FaUserPen } from "react-icons/fa6";
import { ImBook } from "react-icons/im";
import { FaInfoCircle } from "react-icons/fa";
import Tooltip from "../Tooltip";

const HomeCards = ({ books }) => {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book, index) => {
                return (
                    <div
                        key={book._id}
                        className="bg-slate-800 border-2 border-slate-700 rounded-md flex flex-col justify-between"
                    >
                        <div className="flex flex-col gap-2 p-4 ">
                            <div className="font-bold flex items-center gap-3">
                                <ImBook className="text-xs text-slate-500" />
                                {book.title}
                            </div>
                            <div className="text-rg flex items-center gap-3">
                                <FaUserPen className="text-xs text-slate-500" />
                                {book.author}
                            </div>
                            <div className="text-sm flex items-center gap-3">
                                <FaInfoCircle className="text-xs text-slate-500" />
                                {book.publishYear}
                            </div>
                        </div>
                        <div className="flex justify-between border-t-2 border-slate-700 px-4 py-2">
                            <div className="bg-slate-700 border-2 border-slate-600 rounded-md px-[7.1px] py-[2px] text-xs">
                                {book._id}
                            </div>
                            <div className="flex justify-center gap-x-2">
                                <Tooltip text="Details">
                                    <Link to={`/books/details/${book._id}`}>
                                        <span data-tip="working?" className="">
                                            <CgDetailsMore className="text-2xl text-white border-2 rounded-md border-sky-500 bg-sky-800 hover:brightness-150 transition ease-in-out" />
                                        </span>
                                    </Link>
                                </Tooltip>
                                <Tooltip text="Edit">
                                    <Link to={`/books/edit/${book._id}`}>
                                        <MdEdit className="text-2xl text-white border-2 rounded-md border-yellow-600 bg-yellow-800 hover:brightness-150 transition ease-in-out" />
                                    </Link>
                                </Tooltip>
                                <Tooltip text="Delete">
                                    <Link to={`/books/delete/${book._id}`}>
                                        <MdDelete className="text-2xl text-white border-2 rounded-md border-red-600 bg-red-800 hover:brightness-150 transition ease-in-out" />
                                    </Link>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default HomeCards;
