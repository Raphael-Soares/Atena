import {BsInstagram, BsFacebook} from "react-icons/bs";
import React from "react";

function Social() {
    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-xl">Tambem estamos nas redes sociais!</h2>
            <div className="flex gap-2">
                <span className="inline-flex gap-1 items-center ">
                    <BsInstagram />
                    intagram
                </span>
                <span className="inline-flex gap-1 items-center ">
                    <BsFacebook />
                    facebook
                </span>
            </div>
        </div>
    );
}

export default Social;
