import React from "react";
import {MdOutlineEmail, MdOutlinePhone} from "react-icons/md";

function Contato() {
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Entre em Contato Conosco!</h1>

            <div className="flex gap-2">
                <span className="inline-flex gap-1 items-center ">
                    <MdOutlinePhone />
                    47 99999999
                </span>
                <span className="inline-flex gap-1 items-center ">
                    <MdOutlineEmail />
                    email@email.com
                </span>
            </div>
        </div>
    );
}

export default Contato;
