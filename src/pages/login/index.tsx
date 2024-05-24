import { FormEvent, useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(nome);
    console.log(senha);
  }

  return (
    <main className="text-black bg-gray-200 flex">
      <img src="/fundo.webp" alt="foto_de_fundo" className="w-1/2 h-screen" />
      <section className="flex-col justify-center items-center flex p-32 w-1/2">
        <h1 className="mb-20 text-3xl font-semibold">
          Avaliação de professores
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            className="p-2 m-3 rounded-lg w-full"
            type="text"
            placeholder="nome"
          />
          <input
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            className="p-2 m-3 rounded-lg w-full"
            type="text"
            placeholder="senha"
          />
          <div className="flex flex-row">
            <button
              type="submit"
              className="transition-transform duration-300 hover:scale-110 p-2 m-3 bg-green-300 rounded-lg"
            >
              Entrar
            </button>
            <button
              className="transition-transform duration-300 hover:scale-110 p-2 m-3 bg-green-300 rounded-lg"
            >
              Criar conta
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
