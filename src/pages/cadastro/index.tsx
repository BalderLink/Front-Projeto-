import axios from "axios";
import { useState } from "react";

interface createUserProps {
  email: string;
  senha: string;
  nome: string;
  departamento: string;
  curso: string;
  fotoPerfil: string;
}

export default function CadastroUsuario() {
  const [formData, setFormData] = useState<createUserProps>({
    email: "",
    senha: "",
    nome: "",
    departamento: "",
    curso: "",
    fotoPerfil: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("kakak");
    try {
      const response = await axios.post(
        "http://localhost:5000/users",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <main className="text-black bg-gray-200 flex">
      <img src="/fundo.webp" alt="background" className="w-1/2 h-screen" />
      <section className="flex-col justify-center items-center flex p-32 w-1/2">
        <h1 className="mb-20 text-3xl font-semibold">Cadastro Usuário</h1>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 m-3 rounded-lg w-full"
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <input
            className="p-2 m-3 rounded-lg w-full"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="p-2 m-3 rounded-lg w-full"
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
          />
          <input
            className="p-2 m-3 rounded-lg w-full"
            type="text"
            name="curso"
            placeholder="Curso"
            value={formData.curso}
            onChange={handleChange}
          />
          <input
            className="p-2 m-3 rounded-lg w-full"
            type="text"
            name="departamento"
            placeholder="Departamento"
            value={formData.departamento}
            onChange={handleChange}
          />
          <input
            className="p-2 m-3 rounded-lg w-full"
            type="text"
            name="fotoPerfil"
            placeholder="URL da Foto de Perfil"
            value={formData.fotoPerfil}
            onChange={handleChange}
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
