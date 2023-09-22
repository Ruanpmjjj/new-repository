import Head from "next/head";
import {useState} from "react"

export default function cadastroPage() {
    const [formData , setFormData] = useState(
        {
            name: '',
            cpf: '',
            email: '',
            password: ''
        }
    );

        function handleFormEdit(event:any , name:any) {
            setFormData({
                ...formData,
                [name]: event.target.value
            })
            
        }

        function formSubmit(event:any) {
            event.preventDefault();

            console.log(formData);
        }

    return (
        <main className= "">
        <Head>
        <title>Cadastro</title>
        </Head>

        <form onSubmit={formSubmit}>
            <input type="text" placeholder="Nome(não obrigatório)" value={formData.name} onChange={(evento) => {handleFormEdit(evento , 'name')}}/>
            <br></br>
            <input type="text" placeholder="CPF" value={formData.cpf} onChange={(evento) => {handleFormEdit(evento , 'cpf')}} />
            <br></br>
            <input type="text" placeholder="Email" value={formData.email} onChange={(evento) => {handleFormEdit(evento , 'email')}} />
            <br></br>
            <input type="text" placeholder="Senha" value={formData.password} onChange={(evento) => {handleFormEdit(evento , 'password')}}/>
            <br></br>
            <button>Enviar</button>

        </form>
        </main>
    )
}