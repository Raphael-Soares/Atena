import React from "react";

function TextCard({title, children}) {
    return (
        <div className="p-2 sm:m-4 m-0 w-full">
            <h1 className="text-gray-800 p-1 text-center text-xl font-bold md:text-3xl">{title}</h1>
            <span className=" mt-2 md:mt-0   text-gray-700 ">{children}</span>
        </div>
    );
}

export default TextCard;
