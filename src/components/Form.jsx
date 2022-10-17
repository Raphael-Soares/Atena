import {useState, useRef} from "react";
import emailjs from "emailjs-com";
import Input from "./Input";
import Alerta from "./Alerta";

function Form() {
    const ref = useRef(null);
    const serviceID = "service_mg3sum9";
    const templateID = "template_f7kxbel";
    const userID = "W1NXJfm2l6E3WbKxh";

    const [alert, setAlert] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        contato: "",
        condominio: "",
        endereco: "",
        cidade: "",
        unidades: "",
        comoChegou: "",
        addInfo: "",
    });

    function changeForm(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function showAlert() {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 5000);
    }

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, ref.current, userID).then(
            (result) => {
                console.log(result.text);
                document.getElementById("form").reset();
                showAlert();
            },
            (error) => {
                console.log(error.text);
            }
        );
        // console.log(form);
    }
    return (
        <form className="flex flex-col justify-center p-4 sm:p-14" onSubmit={handleSubmit} ref={ref} id="form">
            <Input label="Nome Completo *" name="name" placeholder="Nome Completo" required={true} changeForm={(e) => changeForm(e)} />
            <Input label="Email *" name="email" placeholder="exemplo@email.com" required={true} changeForm={(e) => changeForm(e)} />
            <Input label="Contato *" name="contato" placeholder="(99) 99999-9999" required={true} changeForm={(e) => changeForm(e)} />
            <Input label="Nome do Condomínio" name="condominio" placeholder="Nome do Condomínio" changeForm={(e) => changeForm(e)} />
            <Input label="Endereço " name="endereco" placeholder="Endereço " changeForm={(e) => changeForm(e)} />
            <Input label="Cidade  " name="cidade" placeholder="Cidade  " changeForm={(e) => changeForm(e)} />
            <Input label="Número de Unidades" name="unidades" placeholder="Número de Unidades" changeForm={(e) => changeForm(e)} />
            <Input label="Como chegou até a Atena?" name="comoChegou" placeholder="Como chegou até a Atena?" changeForm={(e) => changeForm(e)} />
            <Input label="Informação Adicional " name="addInfo" placeholder="Informação Adicional " changeForm={(e) => changeForm(e)} />
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Enviar solicitação
                </button>
            </div>

            {alert && <Alerta />}
        </form>
    );
}

export default Form;
