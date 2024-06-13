import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleCreateAccountClick = () => {
    router.push("/cadastro");
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        senha,
      });
      console.log("Response:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("Nome ou senha inválidos");
      } else {
        setError("Erro inesperado ao tentar fazer login");
      }
      console.error("Login error:", error);
    }
  };

  return (
    <main className="text-black bg-gray-200 flex">
      <img src="/fundo.webp" alt="foto_de_fundo" className="w-1/2 h-screen" />
      <section className="flex-col justify-center items-center flex p-32 w-1/2">
        <h1 className="mb-20 text-3xl font-semibold">
          Avaliação de professores
        </h1>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleLogin}
        >
          <input
            className="p-2 m-3 rounded-lg w-full"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 m-3 rounded-lg w-full"
            type="password"
            placeholder="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <div className="flex flex-row">
            <button
              className="transition-transform duration-300 hover:scale-110 p-2 m-3 bg-green-300 rounded-lg"
              type="submit"
            >
              Entrar
            </button>
            <button
              className="transition-transform duration-300 hover:scale-110 p-2 m-3 bg-green-300 rounded-lg"
              type="button"
              onClick={handleCreateAccountClick}
            >
              Criar conta
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
