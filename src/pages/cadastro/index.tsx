export default function CadastroUsuario() {
    return (
        <main className="text-black bg-gray-200 flex">
            <img src="/fundo.webp" alt="background" className="w-1/2 h-screen" />
            <section className="flex-col justify-center items-center flex p-32 w-1/2">
                <h1 className="mb-20 text-3xl font-semibold">
                    Cadastro Usuário
                </h1>
                <form className="flex flex-col items-center">
                <input className="p-2 m-3 rounded-lg w-full" type="text" placeholder="Nome" />
                <input className="p-2 m-3 rounded-lg w-full" type="email" placeholder="Email" />
                <input className="p-2 m-3 rounded-lg w-full" type="password" placeholder="Senha" />
                <input className="p-2 m-3 rounded-lg w-full" type="text" placeholder="Curso" />
                <input className="p-2 m-3 rounded-lg w-full" type="text" placeholder="Departamento" />
                <div className="flex flex-row">
                    <button className="transition-transform duration-300 hover:scale-110 p-2 m-3 bg-green-300 rounded-lg w-full" type="submit">Criar Conta</button>
                </div>
                </form>
            </section>
        </main>
    );
}
