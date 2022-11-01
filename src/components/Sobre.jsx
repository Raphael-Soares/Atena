import image from "../assets/foto1.jpg";

function Sobre() {
    return (
        <section className=" flex flex-col  border-sky-700  w-full">
            <article className=" flex sm:flex-row flex-col-reverse justify-between my-16  ">
                <figure className="w-full shadow">
                    <img src={image} alt="Foto de um homem com uma máscara de proteção" />
                </figure>

                <section className="  border-sky-700 border-t-2 sm:ml-8 w-full">
                    <h1 className="text-3xl py-4 font-bold">Sobre Nós</h1>

                    <p className="text-neutral-700 sm:leading-8 sm:pb-0 pb-4 text-justify">
                        A Atena é uma empresa espelializada em atendimento á condomínios, com profissionais experientes e capacitados. Proporcionando um
                        custo/benefício excepcional aos seus clientes, transparência na gestão, ética em seus processos, confiança, agregando valor e
                        facilitando a rotina do síndico.
                    </p>
                </section>
            </article>
            <article className="flex sm:flex-row flex-col justify-between w-full ">
                <section className=" shadow-lg drop-shadow-sm p-4 border-sky-700 border-l-2 sm:border-l-0 sm:border-t-2 mx-0 sm:mx-8 w-full">
                    <h1 className="text-3xl py-4 font-bold">Missão</h1>
                    <p>
                        Promover a gestão condominial com a máxima eficácia e eficiência, a fim de oferecer aos nossos cliente o que há de melhor para a
                        administração de condomínios.
                    </p>
                </section>
                <section className=" shadow-lg drop-shadow-sm p-4 border-sky-700 border-l-2 sm:border-l-0 sm:border-t-2 sm:my-0 my-4 sm:mx-8 w-full">
                    <h1 className="text-3xl py-4 font-bold">Visão</h1>
                    <p>Compartilhar aos clientes e amigos o máximo de conhecimento, técnicas e estratégias que visem o sucesso da gestão condominial.</p>
                </section>
                <section className=" shadow-lg drop-shadow-sm p-4 border-sky-700 border-l-2 sm:border-l-0 sm:border-t-2  sm:mx-8 w-full">
                    <h1 className="text-3xl py-4 font-bold">Valores</h1>
                    <p>Conduta permeada na ética; Respeito e humildade das relações, Atenção ás minúncias dos processos, Resiliência, Empatia e Equilibrio.</p>
                </section>
            </article>
        </section>
    );
}

export default Sobre;
