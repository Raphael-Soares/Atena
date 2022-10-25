import React from "react";

function AboutContainer({image, title, children}) {
    return (
        <article className=" flex flex-row justify-between my-16">
            <figure className="w-full shadow">
                <img src={image} alt="Foto de um homem com uma máscara de proteção" />
            </figure>
            <section className="  border-sky-700 border-t-2 mx-8 w-full">
                <h1 className="text-3xl py-4 font-bold">{title}</h1>

                <p className="text-neutral-700 leading-8 text-justify">{children}</p>
            </section>
        </article>
    );
}

export default AboutContainer;
