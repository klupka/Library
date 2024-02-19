import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import React from "react";

const BackButton = ({ destination = "/" }) => {
    return (
        <div className="flex">
            <Link to={destination} className="text-white px-0 py-1 w-fit">
                <IoArrowBackOutline className="text-2xl" />
            </Link>
        </div>
    );
};

export default BackButton;
