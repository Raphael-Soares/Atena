import React from "react";
import {AiOutlineWhatsApp} from "react-icons/ai";
function Zap() {
    return (
        <a href="https://api.whatsapp.com/send?phone=554732277169">
            <div className="rounded-full p-4  w-min h-min bg-green-700 fixed bottom-4 right-2 opacity-50 hover:opacity-80 transition duration-100 ease-in-out">
                <AiOutlineWhatsApp className="text-4xl text-white" />
            </div>
        </a>
    );
}

export default Zap;
