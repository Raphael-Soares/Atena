import {useRef} from "react";

import Zap from "./components/Zap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextCard from "./components/TextCard";
import Aplicativo from "./components/Aplicativo";
import Sobre from "./components/Sobre";
import Avaliacao from "./components/Avaliacao";
import Form from "./components/Form";
import Contato from "./components/Contato";
import Mapa from "./components/Mapa";
import Card from "./components/Card";

import Social from "./components/Social";
import Endereco from "./components/Endereco";
import app from "./assets/app.png";

import assessoria from "./assets/assessoria.jpg";
import dinheiro from "./assets/dinheiro.jpg";
import plano from "./assets/plano.jpg";
import reuniao from "./assets/reuniao.jpg";
import manuntencao from "./assets/manutencao.jpg";
import gestao from "./assets/gestao.jpg";

function App() {
    const servicos = useRef(null);
    const sobre = useRef(null);
    const contato = useRef(null);
    const form = useRef(null);
    const depoimentos = useRef(null);
    const app = useRef(null);

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
    function scrollToApp() {
        scrollToRef(app.current.offsetTop);
    }

    function scrollToRef(ref) {
        window.scrollTo({
            top: ref - 30,
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
            <main className="sm:mx-16 mx-8">
                <section className="" ref={sobre}>
                    <Sobre />
                </section>
                <hr className="w-24 border-2 mx-auto my-16 border-gray-600" />

                <div className="my-16  border-sky-700" ref={servicos}>
                    <Aplicativo />
                    <hr className="w-24 border-2 mx-auto my-16 border-gray-600" />

                    <TextCard title="Serviços Administrativos" id="servicos">
                        <div className="flex flex-col  gap-2 " ref={app}>
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-between">
                                <Card image={assessoria} title="Assessoria ao Síndico">
                                    <ul className="list-disc ml-6">
                                        <li className="my-2">
                                            Atividades administrativas do condomínio (balancetes, relatórios, manutenções, regulamentação, Atas).
                                        </li>
                                        <li>Intermediação e controle junto aos prestadores de serviços.</li>
                                    </ul>
                                </Card>

                                <Card image={dinheiro} title="Gestão de Contas a Pagar">
                                    <ul className="list-disc ml-6 flex flex-col gap-2">
                                        <li>Balancetes por período, com arquivos físicos e digitais com total acesso e transparência via APP.</li>
                                        <li> Auxílio contábil, Gestão e planejamento financeiro.</li>
                                    </ul>
                                </Card>
                                <Card image={gestao} title="Planejamento financeiro">
                                    <ul className="list-disc ml-6 flex flex-col gap-2">
                                        <li>Emissão e cobrança (extrajudicial) da taxa condominial.</li>
                                        <li> Previsão orçamentária anual. </li>
                                    </ul>
                                </Card>
                            </div>
                        </div>
                    </TextCard>
                    <br />
                    <TextCard title="Manutenção">
                        <div className="flex flex-col sm:flex-row my-8 gap-4 justify-between">
                            <Card image={manuntencao} title="Plano de Manutenção">
                                Manutenção preventiva adequada ao seu condomínio, em que o técnico faz uma visita ao condomínio, vistoriando todos os itens, e
                                fornece um cronograma de verificações á serem executadas.
                            </Card>
                            <Card image={reuniao} title="Consultoria Técnica">
                                O Especialista fica á disposição do condomínio para dirimir dúvidas e orientação quanto á manutenções, obras, materiais e
                                durabilidade.
                            </Card>
                            <Card image={plano} title="Serviços e Manutenções">
                                Leituras de consumos (água, gás, etc.). Alvenaria, Hidráulica, Esgoto, Pintura, Serralheria, Portões, Telhados e Elétrica.
                            </Card>
                        </div>
                    </TextCard>
                </div>
                <hr className="w-24 border-2 mx-auto my-16 border-gray-600" />

                <div className="flex flex-col sm:flex-row my-16 justify-between gap-4" ref={contato}>
                    <Contato />
                    <Social />
                    <Endereco />
                </div>

                <div className="my-16">
                    <Mapa />
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
                        <Avaliacao name="Johann Erdmann" funcao="Síndico do Res. Chandon">
                            O Residencial Chandon está a pouco tempo com a Atena, mas o pouco que convivemos, foi o suficiente para sentir segurança no serviço
                            oferecido e prestado. Dêem uma conversada com a equipe. Tenho certeza que terão a mesma confiança de estar no caminho certo, para
                            melhor conduzir seu condomínio.
                        </Avaliacao>{" "}
                    </div>
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
