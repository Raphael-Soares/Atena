import React from "react";

function Mapa() {
    return (
        <div className="flex justify-center">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8280000000003!2d-48.850999684796!3d-26.304999983124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dfe5b4b8b2b2c7%3A0x8b8b2b2b2b2b2b2b!2sR.%20Orestes%20Guimar%C3%A3es%2C%20336%20-%20Am%C3%A9rica%2C%20Joinville%20-%20SC%2C%2089206-200!5e0!3m2!1spt-BR!2sbr!4v1629200000000!5m2!1spt-BR!2sbr"
                width="1000"
                height="450"
                style={{border: "1px solid #ccc"}}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}

export default Mapa;
