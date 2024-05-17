import React from "react";

export default function Home() {
  return (
    <main className="bg-white-400 text-black flex h-screen">
      <div className=" w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Perfil de Usuário</h2>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome:</label>
          <p className="text-gray-800" id="nome">Billian</p>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail:</label>
          <p className="text-gray-800" id="email">teste@gmail.com</p>
        </div>
        <div className="mb-4">
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone:</label>
          <p className="text-gray-800" id="telefone">(61) 99999-9999</p>
        </div>
        <div className="mb-4">
          <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">Endereço:</label>
          <p className="text-gray-800" id="endereco">UnB- Darcy Ribeiro</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Editar Perfil</button>
      </div>
    </main>
  );
}