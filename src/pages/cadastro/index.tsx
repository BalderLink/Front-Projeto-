import { useState, FormEvent } from "react";

export default function CadastroUsuario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [curso, setCurso] = useState("");
    const [departamento, setDepartamento] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(nome);
        console.log(email);
        console.log(senha);
        console.log(curso);
        console.log(departamento);
    }

    return (
        <main className="text-black bg-gray-200 flex">
            <img src="/fundo.webp" alt="background" className="w-1/2 h-screen" />
            <section className="flex-col justify-center items-center flex p-32 w-1/2">
                <h1 className="mb-20 text-3xl font-semibold">
                    Cadastro Usuário
                </h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                    <input
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                        className="p-2 m-3 rounded-lg w-full"
                        type="text"
                        placeholder="Nome"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="p-2 m-3 rounded-lg w-full"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => setSenha(e.target.value)}
                        value={senha}
                        className="p-2 m-3 rounded-lg w-full"
                        type="password"
                        placeholder="Senha"
                    />
                    <input
                        onChange={(e) => setCurso(e.target.value)}
                        value={curso}
                        className="p-2 m-3 rounded-lg w-full"
                        type="text"
                        placeholder="Curso"
                    />
                    <input
                        onChange={(e) => setDepartamento(e.target.value)}
                        value={departamento}
                        className="p-2 m-3 rounded-lg w-full"
                        type="text"
                        placeholder="Departamento"
                    />
                    <div className="flex flex-row">
                        <button
                            className="transition-transform duration-300 hover:scale-110 p-2 m-3 bg-green-300 rounded-lg w-full"
                            type="submit"
                        >
                            Criar Conta
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}
