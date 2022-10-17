import React from "react";

function Endereco() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Venha nos visitar!</h1>

            <div className="flex flex-col items-center gap-2">
                <div>R. Orestes Guimarães, 336 - América, Joinville - SC, 89206-200 </div>
                <div>Segunda à Sexta: 8:00 às 17:00</div>
            </div>
        </div>
    );
}

export default Endereco;
