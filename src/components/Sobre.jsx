import React from "react";
import TextCard from "./TextCard";
import SideImageCard from "./SideImageCard";
import TopImageCard from "./TopImageCard";

import foto1 from "../assets/foto1.jpg";
import foto4 from "../assets/foto4.jpg";
import foto5 from "../assets/foto5.jpg";
import foto6 from "../assets/foto6.jpg";

function Sobre() {
    return (
        <div className="flex flex-col gap-4 p-6">
            <TextCard title="Sobre Nós" image={foto1}>
                A Atena é uma empresa espelializada em atendimento á condomínios, com profissionais experientes e capacitados. Proporcionando um custo/benefício
                excepcional aos seus clientes, transparência na gestão, ética em seus processos, confiança, agregando valor e facilitando a rotina do síndico.
            </TextCard>
            <div className="flex flex-col gap-4 justify-between sm:flex-row">
                <TopImageCard title="Missão" image={foto5}>
                    Promover a gestão condominial com a máxima eficácia e eficiência, a fim de oferecer aos nossos cliente o que há de melhor para a
                    administração de condomínios.
                </TopImageCard>

                <TopImageCard title="Visão" image={foto4}>
                    Compartilhar aos clientes e amigos o máximo de conhecimento, técnicas e estratégias que visem o sucesso da gestão condominial.
                </TopImageCard>

                <TopImageCard title="Valores" image={foto6}>
                    Conduta permeada na ética; Respeito e humildade das relações, Atenção ás minúncias dos processos, Resiliência, Empatia e Equilibrio.
                </TopImageCard>
            </div>
        </div>
    );
}

export default Sobre;
