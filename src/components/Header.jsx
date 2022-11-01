import {useState} from "react";
import foto from "../assets/foto8.jpg";
import logo from "../assets/logo.png";

function Header({scrollToContato, scrollToServicos, scrollToSobre, scrollToForm, scrollToDepoimentos, scrollToApp}) {
    const [menu, setMenu] = useState(false);
    return (
        <header>
            <nav className="bg-white shadow">
                <div className="container mx-auto px-6 py-3 ">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-semibold text-sky-900">
                                <img className="w-48" src={logo} alt="" />
                            </div>

                            <div className={`flex md:hidden`}>
                                <button
                                    onClick={() => setMenu(!menu)}
                                    className="text-neutral-900 hover:text-neutral-600 focus:outline-none focus:text-neutral-600"
                                >
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path
                                            fillRule="evenodd"
                                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className={`${!menu ? "hidden " : "block"}sm:flex -mx-4   sm:items-center`}>
                            <div
                                onClick={() => scrollToSobre()}
                                className="block mx-4 mt-2 cursor-pointer md:mt-0 text-sm text-neutral-900 capitalize hover:text-sky-800"
                            >
                                Sobre nós
                            </div>
                            <div
                                onClick={() => scrollToServicos()}
                                className="block mx-4 mt-2 cursor-pointer md:mt-0 text-sm text-neutral-900 capitalize hover:text-sky-800"
                            >
                                Serviços
                            </div>
                            <div
                                onClick={() => scrollToApp()}
                                className="block mx-4 mt-2 cursor-pointer md:mt-0 text-sm text-neutral-900 capitalize hover:text-sky-800"
                            >
                                Aplicativo
                            </div>
                            <div
                                onClick={() => scrollToContato()}
                                className="block mx-4 mt-2 cursor-pointer md:mt-0 text-sm text-neutral-900 capitalize hover:text-sky-800"
                            >
                                Contato
                            </div>{" "}
                            <div
                                onClick={() => scrollToDepoimentos()}
                                className="block mx-4 mt-2 cursor-pointer md:mt-0 text-sm text-neutral-900 capitalize hover:text-sky-800"
                            >
                                Depoimentos
                            </div>{" "}
                            <div
                                onClick={() => scrollToForm()}
                                className="block mx-4 mt-2 cursor-pointer md:mt-0 text-sm text-neutral-900 capitalize hover:text-sky-800"
                            >
                                Solicitar proposta
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className="w-full bg-cover bg-center"
                style={{
                    height: "32rem",
                    backgroundImage: `url(${foto})`,
                }}
            >
                <div className="flex items-center justify-center h-full w-full bg-sky-900 bg-opacity-40">
                    <div className="text-center mt-56">
                        <h1 className="text-white text-2xl mb-4 font-semibold uppercase md:text-3xl ">
                            Serviços Administrativos e assessoria para condomínios
                        </h1>
                        <a
                            href="tel:+554732277169"
                            className="mt-6 px-4 py-2 bg-sky-800 text-white text-sm uppercase font-medium rounded hover:bg-sky-500 focus:outline-none focus:bg-sky-500"
                        >
                            Ligue agora
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
