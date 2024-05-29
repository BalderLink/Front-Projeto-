export default function PerfilDeslogado() {
    return (
        <div className="bg-gray-300 flex flex-col min-h-screen">
            <div className="bg-green-200 h-16 w-full flex justify-between items-center px-2">
                <img src="unb.png" alt="Logo UNB" className="h-10 mt-2 ml-2" />
                <button className="hover:scale-110 p-2 m-3 bg-blue-500 text-white border-2 border-white rounded-xl">Fazer Login</button>
            </div>
            <button className="hover:scale-110 p-3 m-3 border-5 border-black text-black flex ml-72">⇦</button>
            <section className="relative w-1/2 h-72 -mt-16 mx-auto">
                <div className="bg-green-400 h-1/2 rounded-xl"></div>
                <img src="itadori.jpg" alt="Foto do perfil" className="absolute border-3 border-green-1000 rounded-full overflow-hidden object-cover h-20 w-20 -mt-12" />
                <div className="bg-white h-1/2 rounded-xl mt-8 flex flex-col items-center">
                    <h2 className="text-xl font-bold text-gray-800 mt-4">Billian</h2>
                    <p className="text-black font-arial">Brasília/DF</p>
                    <p className="text-black font-arial">💻 Curso de Lic. em Computação</p>
                    <p className="text-black font-arial">✉️ willian.leandro.24@cjr.org.br</p>
                </div>
            </section>
            <section className="relative mt-2 rounded-xl h-96 w-1/2 bg-white mx-auto">
                <h2 className="font-bold text-black ml-2 mt-2">Publicações</h2>
                <div className="mt-1 bg-green-400 h-1/2 w-full rounded-xl p-2">
                    <div className="flex items-center">
                        <img src="itadori.jpg" alt="Foto do perfil" className="border-2 border-green-700 rounded-full overflow-hidden object-cover h-14 w-14 mr-2" />
                        <div>
                            <p className="font-bold text-black">Billian</p>
                            <p className="text-gray-600 text-sm">- 23/10/2021, às 19:32 - João - Avaliação</p>
                        </div>
                    </div>
                    <p className="text-black text-sm ml-4 mt-2">Não Gosto desta pessoa, todo o problema é que faz ti, fora isso ótima personalidade</p>
                    <p className="text-black text-sm ml-6 mt-2">💬 5 Comentários</p>
                </div>
                <div className="mt-2 bg-green-400 h-1/2 w-full rounded-xl p-2">
                    <div className="flex items-center">
                        <img src="itadori.jpg" alt="Foto do perfil" className="border-2 border-green-700 rounded-full overflow-hidden object-cover h-14 w-14 mr-2" />
                        <div>
                            <p className="font-bold text-black">Billian2</p>
                            <p className="text-gray-600 text-sm">- 05/12/2022, às 20:16 - Vitor - Avaliação</p>
                        </div>
                    </div>
                    <p className="text-black text-sm ml-4 mt-2">Gosto muito como pessoa, porém a didática como professor não é das melhores. Mas tem muito conteúdo extra para estudar, o que facilita muito a matéria.</p>
                    <p className="text-black text-sm ml-6 mt-2">💬 5 Comentários</p>
                </div>
            </section>
        </div>
    );
}