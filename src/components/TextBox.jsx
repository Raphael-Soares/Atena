import React from "react";

function TextBox({title, children}) {
    return (
        <div className="m-6 p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-gray-800 text-xl font-bold md:text-2xl ">{title}</h5>
            <span className="font-normal text-gray-700 dark:text-gray-700">{children}</span>
        </div>
    );
}

export default TextBox;
