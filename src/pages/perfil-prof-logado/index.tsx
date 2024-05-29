export default function PerfilLogado() {
    return (
        <div className="bg-gray-300 flex flex-col min-h-screen">
            <div className="bg-green-200 h-16 w-full flex justify-between items-center px-4">
                <div className="flex items-center">
                    <img src="unb.png" alt="Logo da UnB" className="h-10 w-10" />
                </div>
                <div className="flex items-center">
                    <img src="sininho.png" alt="Notificações" className="h-10 w-10 mr-4" />
                    <img src="itadori.jpg" alt="Foto do aluno" className="rounded-full w-16 h-16 mr-4" />
                    <button className="w-10 h-10 flex items-center justify-center">
                        <img src="saida.png" alt="Sair da conta" />
                    </button>
                </div>
            </div>
            <button className="hover:scale-110 p-3 m-3 border-5 border-black text-black flex ml-72">⇦</button>
            <section className="relative w-1/2 h-72 -mt-16 mx-auto">
                <div className="bg-green-400 h-1/2 rounded-xl flex justify-center items-center space-x-3">
                </div>
                <img src="simpsonprof.jpg" alt="Foto do perfil" className="absolute border-3 border-green-1000 rounded-full overflow-hidden object-cover h-20 w-20 -mt-12" />
                <div className="bg-white h-1/2 rounded-xl mt-8 flex flex-col items-center">
                    <h2 className="text-xl font-bold text-gray-800 mt-4">Professor Genérico</h2>
                    <p className="text-black font-arial">Brasília/DF</p>
                    <p className="text-black font-arial">💼 Departamento de Computação</p>
                    <p className="text-black font-arial">✉️ professor.generico@unb.br</p>
                </div>
            </section>
            <section className="relative mt-2 rounded-xl h-96 w-1/2 bg-white mx-auto">
                <h2 className="font-bold text-black ml-2 mt-2">Publicações</h2>
                <div className="mt-1 bg-green-400 h-1/2 w-full rounded-xl p-2">
                    <div className="flex items-center">
                        <img src="bartsimpson.jpg" alt="Foto do perfil" className="border-2 border-green-700 rounded-full overflow-hidden object-cover h-14 w-14 mr-2" />
                        <div>
                            <p className="font-bold text-black">BartzinDeCria12</p>
                            <p className="text-gray-600 text-sm"> - 23/10/2021, às 19:32 - Bart - Avaliação</p>
                        </div>
                    </div>
                    <p className="text-black text-sm ml-4 mt-2">Ótimo professor, explica muito bem e é muito atencioso com os alunos.</p>
                    <p className="text-black text-sm ml-6 mt-2">💬 5 Comentários</p>
                </div>
                <div className="mt-2 bg-green-400 h-1/2 w-full rounded-xl p-2">
                    <div className="flex items-center">
                        <img src="transferir.png" alt="Foto do perfil" className="border-2 border-green-700 rounded-full overflow-hidden object-cover h-14 w-14 mr-2" />
                        <div>
                            <p className="font-bold text-black">LisaSimpson01</p>
                            <p className="text-gray-600 text-sm"> - 05/12/2022, às 20:16 - Lisa - Avaliação</p>
                        </div>
                    </div>
                    <p className="text-black text-sm ml-4 mt-2">Tem muito conhecimento, mas às vezes as aulas são um pouco confusas. No geral, um ótimo educador.</p>
                    <p className="text-black text-sm ml-6 mt-2">💬 5 Comentários</p>
                </div>
            </section>
        </div>
    );
}