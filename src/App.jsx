import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import image from "./assets/foto1.jpg";

function App() {
    return (
        <>
            <Header />
            <main className="flex flex-col justify-center max-w-screen-md items-center">
                <article className=" flex flex-row justify-between my-16">
                    <figure className="w-full shadow">
                        <img src={image} alt="Foto de um homem com uma máscara de proteção" />
                    </figure>
                    <section className="  border-sky-700 border-t-2 mx-8 w-full">
                        <h1 className="text-3xl py-4 font-bold">Sobre Nós</h1>

                        <p className="text-neutral-700 leading-8 text-justify">
                            A Atena é uma empresa espelializada em atendimento á condomínios, com profissionais experientes e capacitados. Proporcionando um
                            custo/benefício excepcional aos seus clientes, transparência na gestão, ética em seus processos, confiança, agregando valor e
                            facilitando a rotina do síndico.
                        </p>
                    </section>
                </article>
                <article className="flex flew-row justify-between w-full ">
                    <section className="  border-sky-700 border-t-2 mx-8 w-full">
                        <h1 className="text-3xl py-4 font-bold">Missão</h1>
                        <p>
                            Promover a gestão condominial com a máxima eficácia e eficiência, a fim de oferecer aos nossos cliente o que há de melhor para a
                            administração de condomínios.
                        </p>
                    </section>
                    <section className="  border-sky-700 border-t-2 mx-8 w-full">
                        <h1 className="text-3xl py-4 font-bold">Visão</h1>
                        <p>Compartilhar aos clientes e amigos o máximo de conhecimento, técnicas e estratégias que visem o sucesso da gestão condominial.</p>
                    </section>
                    <section className="  border-sky-700 border-t-2 mx-8 w-full">
                        <h1 className="text-3xl py-4 font-bold">Valores</h1>
                        <p>
                            Conduta permeada na ética; Respeito e humildade das relações, Atenção ás minúncias dos processos, Resiliência, Empatia e Equilibrio.
                        </p>
                    </section>
                </article>
                <article className="border">
                    <h1>Serviços</h1>
                </article>
                <article className="border">
                    <h1>Depoimentos</h1>
                </article>
                <article className="border">
                    <h1>Proposta</h1>
                </article>
                <article className="border">
                    <h1>Aplicativo</h1>
                </article>
                <article className="border">
                    <h1> Área do cliente</h1>
                </article>
            </main>
            <Footer />
        </>
    );
}

export default App;
