import React from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const Spinner = () => {
    return (
        <div className="flex">
            <div className="m-auto">
                <div className="flex items-center justify-center animate-spin">
                    <CgSpinnerTwoAlt className="text-4xl my-[100px]" />
                </div>
            </div>
        </div>
    );
};

export default Spinner;
