import {BsInstagram, BsFacebook} from "react-icons/bs";
import React from "react";

function Social() {
    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-gray-800 text-2xl text-center font-bold hover:text-gray-700 ">Tambem estamos nas redes sociais!</h2>
            <div className="flex flex-col items-center ">
                <a href="https://www.facebook.com/Atena-Administradora-de-Condom%C3%ADnios-212030632859244/" className="inline-flex gap-1 items-center ">
                    <BsFacebook />
                    Atena Administradora de Condomínios
                </a>
                <a href="https://www.instagram.com/atenacondominios/" className="inline-flex gap-1 items-center ">
                    <BsInstagram />
                    atenacondominios
                </a>
            </div>
        </div>
    );
}

export default Social;
