import React, { useState } from 'react';

export default function AvaliacaoComComentario() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gray-300 flex flex-col min-h-screen">
      <header className="bg-green-200 flex justify-between items-center p-4">
        <img src="unb.png" alt="logo" className="h-12" />
        <div className="flex items-center">
          <button className="p-2 rounded-full bg-gray-100">
            <i className="bell-icon"></i>
          </button>
          <img src="itadori.jpg" alt="avatar" className="h-12 w-12 rounded-full mx-2" />
          <button className="p-2 bg-red-400 text-white rounded-lg">Sair</button>
        </div>
      </header>
      <div className="flex flex-col items-start p-4 m-4 w-full">
        <button className="hover:scale-110 p-3 border-5 border-black text-black">⇦</button>
        <section className="bg-green-100 flex flex-col items-start p-4 mt-4 rounded-lg shadow-md w-full">
          <div className="bg-green-400 p-4 rounded-lg w-full mb-4">
            <div className="flex items-center">
              <img src="itadori.jpg" alt="avatar" className="h-12 w-12 rounded-full mr-4" />
              <div>
                <h3 className="font-bold">Billian</h3>
                <p className="text-gray-600">07/04/2024, às 21:42 · Heitor · Matematica</p>
              </div>
              <div className="flex ml-auto space-x-4">
                <button 
                  className="p-2 bg-blue-500 text-white rounded"
                  onClick={() => setShowModal(true)}
                >
                  Criar Comentário
                </button>
                <button className="p-2 bg-red-500 text-white rounded">Excluir</button>
              </div>
            </div>
            <p className="mt-2">Baita professor!</p>
            <p className="text-gray-600 mt-2">2 comentários</p>
          </div>
          <div className="bg-green-200 p-4 rounded-lg w-full mb-4">
            <div className="flex items-center">
              <img src="" alt="." className="h-10 w-10 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">luquinhas</h4>
                <p className="text-gray-600">07/04/2024, às 21:43</p>
              </div>
            </div>
            <p className="mt-2">concordo</p>
          </div>
          <div className="bg-green-200 p-4 rounded-lg w-full">
            <div className="flex items-center">
              <img src="" alt="." className="h-10 w-10 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">joaozin</h4>
                <p className="text-gray-600">07/04/2024, às 21:43</p>
              </div>
            </div>
            <p className="mt-2">nem é mano</p>
          </div>
        </section>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-green-200 p-6 rounded-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Comentário</label>
              <textarea className="w-full p-2 rounded-lg bg-white border border-gray-300"></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white p-2 rounded-lg mx-2"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button className="bg-blue-400 text-white p-2 rounded-lg">
                Comentar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
