import React from "react";

import {MdOutlineEmail, MdOutlinePhone} from "react-icons/md";
import {BsInstagram, BsFacebook} from "react-icons/bs";
function Footer() {
    return (
        <footer
            className="flex flex-col sm:flex-row justify-around p-4 py-14 gap-4
        bg-gray-100 border-t-2 border-neutral-300"
        >
            <div className="flex flex-col sm:flex-row  items-center">
                <h1 className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Entre em Contato Conosco!</h1>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <span className="inline-flex gap-1 items-center ">
                        <MdOutlinePhone />
                        (47) 3227-7169
                    </span>
                    <span className="inline-flex gap-1 items-center ">
                        <MdOutlineEmail />
                        atenacondominios@gmail.com
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Tambem estamos nas redes sociais!</h2>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <span className="inline-flex gap-1 items-center ">
                        <BsInstagram />
                        <a href="https://www.instagram.com/atenacondominios/">atenacondominios</a>
                    </span>
                    <span className="inline-flex gap-1 items-center ">
                        <BsFacebook />
                        <a href="https://www.facebook.com/Atena-Administradora-de-Condom%C3%ADnios-212030632859244/">Atena Administradora de Condomínios</a>
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Venha nos visitar!</h1>

                <div className="flex flex-col sm:flex-row items-center gap-2">
                    <div className="text-center">R. Orestes Guimarães, 336 - América, Joinville - SC, 89206-200 </div>
                    <div>Segunda à Sexta: 8:00 às 17:00</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
