import {useRef} from "react";

import Zap from "./components/Zap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextCard from "./components/TextCard";
import TextBox from "./components/TextBox";
import Aplicativo from "./components/Aplicativo";
import Sobre from "./components/Sobre";
import Avaliacao from "./components/Avaliacao";
import Form from "./components/Form";
import Contato from "./components/Contato";
import Mapa from "./components/Mapa";

import Social from "./components/Social";
import Endereco from "./components/Endereco";
function App() {
    const servicos = useRef(null);
    const sobre = useRef(null);
    const contato = useRef(null);
    const form = useRef(null);
    const depoimentos = useRef(null);

    function scrollToServicos() {
        scrollToRef(servicos.current.offsetTop);
    }

    function scrollToSobre() {
        scrollToRef(sobre.current.offsetTop);
    }

    function scrollToContato() {
        scrollToRef(contato.current.offsetTop);
    }

    function scrollToForm() {
        scrollToRef(form.current.offsetTop);
    }
    function scrollToDepoimentos() {
        scrollToRef(depoimentos.current.offsetTop);
    }

    function scrollToRef(ref) {
        window.scrollTo({
            top: ref - 100,
            behavior: "smooth",
        });
    }

    return (
        <div>
            <Header
                scrollToDepoimentos={scrollToDepoimentos}
                scrollToContato={scrollToContato}
                scrollToServicos={scrollToServicos}
                scrollToSobre={scrollToSobre}
                scrollToForm={scrollToForm}
            />
            <main className="p-2">
                <div className="flex flex-col sm:flex-row my-16 justify-around gap-4" ref={contato}>
                    <Contato />
                    <Social />
                    <Endereco />
                </div>
                <div className="my-16">
                    <Mapa />
                </div>

                <div ref={servicos}>
                    <TextCard title="Serviços Administrativos" id="servicos">
                        <div className="flex flex-col sm:flex-row">
                            <TextBox title="Assessoria ao Síndico">
                                Atividades administrativas do condomínio (balancetes, relatórios, manutenções, regulamentação, Atas). Atividades administrativas
                                do condomínio (balancetes, relatórios, manutenções, regulamentação, Atas). Intermediação e controle junto aos prestadores de
                                serviços.
                            </TextBox>
                            <Aplicativo />
                            <TextBox title="Gestão de Contas a Pagar">
                                Balancetes por período, com arquivos físicos e digitais com total acesso e transparência via APP. Previsão orçamentária anual.
                                Emissão e cobrança (extrajudicial) da taxa condominial. Auxílio contábil, Gestão e planejamento financeiro.
                            </TextBox>
                        </div>
                    </TextCard>
                    <TextCard title="Manutenção">
                        <div className="flex flex-col sm:flex-row my-8">
                            <TextBox title="Plano de Manutenção">
                                Manutenção preventiva adequada ao seu condomínio, em que o técnico faz uma visita ao condomínio, vistoriando todos os itens, e
                                fornece um cronograma de verificações á serem executadas.
                            </TextBox>
                            <TextBox title="Consultoria Técnica">
                                O Especialista fica á disposição do condomínio para dirimir dúvidas e orientação quanto á manutenções, obras, materiais e
                                durabilidade.
                            </TextBox>
                            <TextBox title="Serviços e Manutenções">
                                Leituras de consumos (água, gás, etc.). Alvenaria, Hidráulica, Esgoto, Pintura, Serralheria, Portões, Telhados e Elétrica.
                            </TextBox>
                        </div>
                    </TextCard>
                </div>

                <hr className="w-24 border-2 mx-auto border-gray-600" />

                <div className="my-16" ref={depoimentos}>
                    <h1 className="text-sky-900 p-1 text-center text-xl font-bold md:text-3xl">Depoimentos</h1>
                    <div className="text-center">
                        <p className=" mt-2 md:mt-0   text-gray-700 ">Nossos clientes são como uma família!</p>
                        <p className=" mt-2 md:mt-0   text-gray-700 ">
                            Nós da Atena Condomínios estamos sempre pensando no bem estar e sucesso de nossos clientes!
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row ">
                        <Avaliacao name="Elisete Rocha" funcao="Síndica do Res. Mar Azul">
                            “Empresa super comprometida em lhe atender e fazer o melhor para seu condomínio, sempre trabalhando com transparência e prezando o
                            bem de todos, sem medir esforços para ajudar o síndico(a). Eu super recomendo seu trabalho, pois me ajuda muito...""
                        </Avaliacao>
                        <Avaliacao name="Jairo dos Santos Borges" funcao="Síndico do Res. Vila Vitória">
                            “Após a cotratação da Atena Condomínios passamos a nos sentir muito mais seguros com nossas questões administrativas. É ótimo o
                            síndico trabalhar e saber que pode contar com pessoas muito bem qualificadas!”
                        </Avaliacao>{" "}
                        <Avaliacao name="Bruce L" funcao="Contador">
                            “Empresa responsável e atualizada no mercado a capacitação de seus gestores são excelentes o respeito e o zelo pelo o que fazem e o
                            que eleva sua marca, parabéns pelo ótimo serviços que prestam.”
                        </Avaliacao>{" "}
                    </div>
                </div>

                <hr className="w-24 border-2 mx-auto border-gray-600" />

                <div className="my-8" ref={sobre}>
                    <Sobre />
                </div>

                <hr className="w-24 border-2 mx-auto border-gray-600" />

                <div className="my-8" ref={form}>
                    <p className=" mt-2 md:mt-0 text-center  text-gray-700 ">
                        Preencha o formulário abaixo para solicitar SUA proposta de Administração de Condomíno.
                    </p>
                    <Form />
                </div>
            </main>
            <div>
                <Footer />
            </div>
            <Zap />
        </div>
    );
}

export default App;
