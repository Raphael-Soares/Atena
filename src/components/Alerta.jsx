import React from "react";

function Alerta() {
    return (
        <div
            className="fixed bottom-8 right-16 left-16 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
        >
            <span className="font-medium">Sua solicitção foi enviada!</span> Entraremos em contato.
        </div>
    );
}

export default Alerta;
