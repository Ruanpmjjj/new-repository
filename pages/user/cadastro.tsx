import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

export default function cadastroPage() {
    // Constante para navegaçao entre páginas
    const router = useRouter();

    //formulário a ser enviado 
    const [formData, setFormData] = useState(
        {
            name: '',
            cpf: '',
            email: '',
            password: ''
        }
    )

    const [ error , setError] = useState('');

    //funçao para preencher o formulário com o conteudo dos inputs
    function handleFormEdit(event: any, name: any) {
        setFormData({
            ...formData,
            [name]: event.target.value
        })

    }

    //funçao para enviar a requisição ao servidor.
    async function formSubmit(event: any) {

        try {
            event.preventDefault();

            const response = await fetch(`/api/actions/user/create`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const responseJson = await response.json();
            console.log(responseJson);
            console.log(response.status);

            if (response.status != 200) {
                throw new Error(responseJson.message);
            }

            alert("account created");

            router.push(`/user/login`);
        }
        catch (err:any) {
            console.log(err);
            setError (err.message);
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Head>
                <title>Cadastro</title>
            </Head>

            <form onSubmit={formSubmit}>

                <p className='errorText'>{error}</p>


                <input type="text" placeholder="Nome(não obrigatório)" value={formData.name} onChange={(evento) => { handleFormEdit(evento, 'name') }} />
                <br></br>
                <input type="text" placeholder="CPF" value={formData.cpf} onChange={(evento) => { handleFormEdit(evento, 'cpf') }} required />
                <br></br>
                <input type="email" placeholder="Email" value={formData.email} onChange={(evento) => { handleFormEdit(evento, 'email') }} required />
                <br></br>
                <input type="password" placeholder="Senha" value={formData.password} onChange={(evento) => { handleFormEdit(evento, 'password') }} required />
                <br></br>
                <button>Enviar</button>

                <br></br>

            </form>
        </main>
    )
}