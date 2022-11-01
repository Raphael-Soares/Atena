import React from "react";

function TextCard({title, children}) {
    return (
        <div className=" w-full">
            <h1 className="text-3xl py-4 font-bold text-center">{title}</h1>
            <span className=" mt-2 md:mt-0   text-gray-700 ">{children}</span>
        </div>
    );
}

export default TextCard;
