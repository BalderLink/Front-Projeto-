import React from 'react';

export default function AvaliacaoComComentario() {
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
                <h3 className="font-bold">Morty Gamer</h3>
                <p className="text-gray-600">07/04/2024, às 21:42 · João Frango · Surf</p>
              </div>
              <div className="flex ml-auto">
                <button className="p-2">
                  <i className="fas fa-comment-dots"></i>
                </button>
                <button className="p-2 ml-2">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
            <p className="mt-2">Professor bacana. Adoro quando falta!</p>
            <p className="text-gray-600 mt-2">2 comentários</p>
          </div>
          <div className="bg-green-200 p-4 rounded-lg w-full mb-4">
            <div className="flex items-center">
              <img src="itadori.jpg" alt="avatar" className="h-10 w-10 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">João Frango</h4>
                <p className="text-gray-600">07/04/2024, às 21:43</p>
              </div>
            </div>
            <p className="mt-2">tudo encima bro?</p>
          </div>
          <div className="bg-green-200 p-4 rounded-lg w-full">
            <div className="flex items-center">
              <img src="itadori.jpg" alt="avatar" className="h-10 w-10 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">João Frango</h4>
                <p className="text-gray-600">07/04/2024, às 21:43</p>
              </div>
            </div>
            <p className="mt-2">você viu o Kadu?</p>
          </div>
        </section>
      </div>
    </div>
  );
}
