import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import Tooltip from "../Tooltip";

const HomeTable = ({ books }) => {
    return (
        <div className="bg-slate-800 border-2 border-slate-700 rounded-md">
            <table className="w-full">
                <thead>
                    <tr className="h-8 max-md:text-sm">
                        <th className=" text-white px-2">No</th>
                        <th className="bg-slate-800 text-white px-2">Title</th>
                        <th className="bg-slate-800 text-white max-md:hidden px-2">
                            Author
                        </th>
                        <th className="bg-slate-800 text-white max-md:hidden px-2">
                            Publish Year
                        </th>
                        <th className=" text-white px-2">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => {
                        // If last element, then only show top table border
                        if (books.length - 1 === index) {
                            return (
                                <tr key={book._id} className="h-12">
                                    <td className="border-t-2 border-slate-700 rounded-md bg-slate-800 text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border-t-2 border-slate-700 rounded-md bg-slate-800 text-center max-md:text-sm">
                                        {book.title}
                                    </td>
                                    <td className="border-t-2 border-slate-700 rounded-md bg-slate-800 text-center max-md:hidden">
                                        {book.author}
                                    </td>
                                    <td className="border-t-2 border-slate-700 rounded-md bg-slate-800 text-center max-md:hidden">
                                        {book.publishYear}
                                    </td>
                                    <td className="border-t-2 border-slate-700 rounded-md bg-slate-800 text-center">
                                        <div className="flex justify-center gap-x-2">
                                            <Tooltip text="Details">
                                                <Link
                                                    to={`/books/details/${book._id}`}
                                                >
                                                    <span
                                                        data-tip="working?"
                                                        className=""
                                                    >
                                                        <CgDetailsMore className="text-2xl text-white border-2 rounded-md border-sky-500 bg-sky-800 hover:brightness-150 transition ease-in-out" />
                                                    </span>
                                                </Link>
                                            </Tooltip>
                                            <Tooltip text="Edit">
                                                <Link
                                                    to={`/books/edit/${book._id}`}
                                                >
                                                    <MdEdit className="text-2xl text-white border-2 rounded-md border-yellow-600 bg-yellow-800 hover:brightness-150 transition ease-in-out" />
                                                </Link>
                                            </Tooltip>
                                            <Tooltip text="Delete">
                                                <Link
                                                    to={`/books/delete/${book._id}`}
                                                >
                                                    <MdDelete className="text-2xl text-white border-2 rounded-md border-red-600 bg-red-800 hover:brightness-150 transition ease-in-out" />
                                                </Link>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                            );
                        } else {
                            // Else, show top and bottom table borders
                            return (
                                <tr key={book._id} className="h-12">
                                    <td className="border-y-2 border-slate-700 rounded-md bg-slate-800 text-center max-md:text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="border-y-2 border-slate-700 rounded-md bg-slate-800 text-center max-md:text-sm">
                                        {book.title}
                                    </td>
                                    <td className="border-y-2 border-slate-700 rounded-md bg-slate-800 text-center max-md:hidden">
                                        {book.author}
                                    </td>
                                    <td className="border-y-2 border-slate-700 rounded-md bg-slate-800 text-center max-md:hidden">
                                        {book.publishYear}
                                    </td>
                                    <td className="border-y-2 border-slate-700 rounded-md bg-slate-800 text-center">
                                        <div className="flex justify-center gap-x-2 mx-1">
                                            <Tooltip text="Details">
                                                <Link
                                                    to={`/books/details/${book._id}`}
                                                >
                                                    <span
                                                        data-tip="working?"
                                                        className=""
                                                    >
                                                        <CgDetailsMore className="text-2xl text-white border-2 rounded-md border-sky-500 bg-sky-800 hover:brightness-150 transition ease-in-out" />
                                                    </span>
                                                </Link>
                                            </Tooltip>
                                            <Tooltip text="Edit">
                                                <Link
                                                    to={`/books/edit/${book._id}`}
                                                >
                                                    <MdEdit className="text-2xl text-white border-2 rounded-md border-yellow-600 bg-yellow-800 hover:brightness-150 transition ease-in-out" />
                                                </Link>
                                            </Tooltip>
                                            <Tooltip text="Delete">
                                                <Link
                                                    to={`/books/delete/${book._id}`}
                                                >
                                                    <MdDelete className="text-2xl text-white border-2 rounded-md border-red-600 bg-red-800 hover:brightness-150 transition ease-in-out" />
                                                </Link>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default HomeTable;
