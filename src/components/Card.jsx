import React from "react";

function Card({image, title, children}) {
    return (
        <div className="w-full max-w-sm border-t-2  shadow-lg drop-shadow-md border-sky-700 ">
            <div className="">
                <img src={image} alt={title} />
            </div>
            <section className=" p-4 border-sky-700 border-t-2 w-full">
                <h1 className="text-sky-800 text-2xl py-4 font-bold">{title}</h1>
                <p className="h-full">{children}</p>
            </section>
        </div>
    );
}

export default Card;
