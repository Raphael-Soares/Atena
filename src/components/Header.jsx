import React from "react";

function Header({scrollToContato, scrollToServicos, scrollToSobre, scrollToForm}) {
    return (
        <header>
            <nav className="bg-white shadow">
                <div className="container mx-auto px-6 py-3 ">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-semibold text-gray-700">
                                <a href="#" className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">
                                    Atena Condomínios
                                </a>
                            </div>

                            <div className="flex md:hidden">
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                                    aria-label="toggle menu"
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

                        <div className="hidden -mx-4 md:flex md:items-center">
                            <div
                                onClick={() => scrollToServicos()}
                                className="block mx-4 mt-2 cursor-pointer md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                            >
                                Serviços
                            </div>
                            <div
                                onClick={() => scrollToSobre()}
                                className="block mx-4 mt-2 cursor-pointer md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                            >
                                Sobre nós
                            </div>
                            <div
                                onClick={() => scrollToForm()}
                                className="block mx-4 mt-2 cursor-pointer md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                            >
                                Solicitar proposta
                            </div>
                            <div
                                onClick={() => scrollToContato()}
                                className="block mx-4 mt-2 cursor-pointer md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                            >
                                Contato
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className="w-full bg-cover bg-center"
                style={{
                    height: "32rem",
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
                }}
            >
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Serviços Administrativos e assessoria para condomínios</h1>
                        <a
                            href="tel:+47997301224"
                            className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
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
