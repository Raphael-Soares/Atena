import React from "react";
import Contato from "./Contato";
import Endereco from "./Endereco";
import Social from "./Social";
function Footer() {
    return (
        <footer
            className="flex flex-col  sm:flex-row justify-around p-4 py-14 gap-4
        bg-gray-100 border-t-2 border-neutral-300"
        >
            <Contato />
            <Endereco />
            <Social />
        </footer>
    );
}

export default Footer;
