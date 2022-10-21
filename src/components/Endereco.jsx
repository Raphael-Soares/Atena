import React from "react";

function Endereco() {
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Venha nos visitar!</h1>

            <div className="flex flex-col items-center gap-2">
                <div>R. Orestes Guimarães, 336 - América, Joinville - SC, 89206-200 </div>
                <div>Segunda à Sexta: 8:00 às 17:00</div>
                <a href="https://www.google.com/maps/dir//Atena+Administradora+de+Condom%C3%ADnios/data=!4m8!4m7!1m0!1m5!1m1!1s0x94deb14c3dd05617:0x3b9954a3259b209d!2m2!1d-48.8454586!2d-26.2946214">
                    <div className="text-sky-700 underline text-xl hover:text-sky-900 transition">Ver no mapa</div>
                </a>
            </div>
        </div>
    );
}

export default Endereco;
