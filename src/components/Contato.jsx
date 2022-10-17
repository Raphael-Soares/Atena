import React from "react";
import {MdOutlineEmail, MdOutlinePhone} from "react-icons/md";
import {BsInstagram, BsFacebook} from "react-icons/bs";

function Contato() {
    return (
        <div className="flex flex-col items-center">
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

export default Contato;
