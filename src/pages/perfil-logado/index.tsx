import React, { useState } from "react";
import Modal from "../../components/Modal";

export default function PerfilDeslogado() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="bg-gray-300 flex flex-col min-h-screen">
      <header className="bg-green-200 flex justify-between items-center p-4">
        <img src="unb.png" alt="logo" className="h-12" />
        <div className="flex items-center">
          <button className="p-2 rounded-full bg-gray-100">
            <i className="bell-icon"></i>
          </button>
          <img
            src="itadori.jpg"
            alt="avatar"
            className="h-12 w-12 rounded-full mx-2"
          />
          <button className="p-2 bg-red-400 text-white rounded-lg">Sair</button>
        </div>
      </header>
      <button className="hover:scale-110 p-3 m-3 border-5 border-black text-black flex ml-72">
        ⇦
      </button>
      <section className="relative w-1/2 h-72 -mt-16 left-1/2 transform -translate-x-1/2">
        <div className="bg-green-400 h-1/2 rounded-xl">
          <button
            className="p-2 border-2 border-black text-black font-bold bg-green-200 rounded-xl"
            onClick={openModal}
          >
            Editar Perfil
          </button>
          <button className="p-2 border-2 border-black text-black font-bold bg-red-200 rounded-xl ml-3">
            Excluir Perfil
          </button>
        </div>
        <img
          src="itadori.jpg"
          alt="Foto do perfil"
          className="absolute border-3 border-green-1000 rounded-full overflow-hidden object-cover h-auto w-20 -mt-12"
        />
        <div className="bg-white h-1/2 rounded-xl">
          <h2 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold text-gray-800 -mt-4">
            Billian
          </h2>
          <p className="text-center text-black font-arial">Brasília/DF</p>
          <p className="text-center text-black font-arial">
            {" "}
            💻 Curso de Lic. em Computação
          </p>
          <p className="text-center text-black font-arial">
            {" "}
            ✉️ willian.leandro.24@cjr.org.br
          </p>
        </div>
      </section>
      <section className="relative mt-2 rounded-xl h-96 w-1/2 bg-white left-1/2 transform -translate-x-1/2">
        <h2 className="font-bold text-black ml-2">Publicações</h2>
        <div className="mt-1 bg-green-400 h-1/2 w-full rounded-xl">
          <div className="flex">
            <img
              src="itadori.jpg"
              alt="Foto do perfil"
              className="mt-1 ml-1 border-2 border-green-700 rounded-full overflow-hidden object-cover h-auto w-14"
            />
            <p className="font-bold text-black">Billian</p>
            <p className="text-gray-600 text-sm ml-2">
              - 23/10/2021, às 19:32 - João - Avaliação
            </p>
          </div>
          <div>
            <p className="text-black text-sm ml-4">
              Não Gosto desta pessoa, todo o problema é que faz ti, fora isso
              ótima personalidade
            </p>
          </div>
          <p className="text-black text-sm ml-6">💬 5 Comentários</p>
        </div>
        <div className="mt-2 bg-green-400 h-1/2 w-full rounded-xl">
          <div className="flex">
            <img
              src="itadori.jpg"
              alt="Foto do perfil"
              className="mt-1 ml-1 border-2 border-green-700 rounded-full overflow-hidden object-cover h-auto w-14"
            />
            <p className="font-bold text-black">Billian2</p>
            <p className="text-gray-600 text-sm ml-2">
              - 05/12/2022, às 20:16 - Vitor - Avaliação
            </p>
          </div>
          <div>
            <p className="text-black text-sm ml-4">
              Gosto muito como pessoa, porém a didática como professor não é das
              melhores. Mas tem muito conteúdo extra para estudar o que facilita
              muito a matéria.
            </p>
          </div>
          <p className="text-black text-sm ml-6">💬 5 Comentários</p>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form>
          <div className="flex justify-center">
            <img
              src={
                selectedFile ? URL.createObjectURL(selectedFile) : "itadori.jpg"
              }
              alt="Foto do perfil"
              className="border-2 border-gray-300 rounded-full overflow-hidden object-cover h-24 w-24"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Curso
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Departamento
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Senha atual
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Nova senha
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Confirmar nova senha
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Trocar Foto
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md"
            >
              Salvar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
