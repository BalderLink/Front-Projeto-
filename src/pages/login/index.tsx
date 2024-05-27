export default function Home() {
    return (
        <main className="text-black bg-gray-200 flex min-h-screen">
            <img src="/fundo.webp" alt="foto_de_fundo" className="w-1/2 h-auto object-cover" />
            <section className="flex flex-col justify-center items-center flex p-8 w-1/2">
                <h1 className="mb-8 text-3xl font-semibold text-center">
                    Avaliação de professores
                </h1>
                <form className="w-full flex flex-col items-center">
                    <input className="p-2 m-3 rounded-lg w-full" type="text" placeholder="nome" />
                    <input className="p-2 m-3 rounded-lg w-full" type="password" placeholder="senha" />
                    <div className="flex flex-row">
                        <button className="transition-transform duration-300 hover:scale-110 p-2 m-3 bg-green-300 rounded-lg" type="submit">Entrar</button>
                        <button className="transition-transform duration-300 hover:scale-110 p-2 m-3 bg-green-300 rounded-lg">Criar conta</button>
                    </div>
                </form>
            </section>
        </main>
    );
}