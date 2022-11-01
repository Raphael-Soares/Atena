import React from "react";

function TextCard({title, children}) {
    return (
        <div className=" w-full">
            <h1 className=" p-1 text-center my-8 text-2xl font-bold md:text-3xl">{title}</h1>
            <span className=" mt-2 md:mt-0   text-gray-700 ">{children}</span>
        </div>
    );
}

export default TextCard;
