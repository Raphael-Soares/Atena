import React from "react";
import TextCard from "./TextCard";

function Sobre() {
    return (
        <TextCard title="Sobre nós">
            <p className="text-center p-4">
                A Atena é uma empresa espelializada em atendimento á condomínios, com profissionais experientes e capacitados. Proporcionando um custo/benefício
                excepcional aos seus clientes, transparência na gestão, ética em seus processos, confiança, agregando valor e facilitando a rotina do síndico.
            </p>
            <div className="flex justify-around">
                <TextCard title="Missão">
                    Promover a gestão condominial com a máxima eficácia e eficiência, a fim de oferecer aos nossos cliente o que há de melhor para a
                    administração de condomínios.
                </TextCard>
                <TextCard title="Visão">
                    Compartilhar aos clientes e amigos o máximo de conhecimento, técnicas e estratégias que visem o sucesso da gestão condominial.
                </TextCard>
                <TextCard title="Valores">
                    Conduta permeada na ética; Respeito e humildade das relações, Atenção ás minúncias dos processos, Resiliência, Empatia e Equilibrio.
                </TextCard>
            </div>
        </TextCard>
    );
}

export default Sobre;
