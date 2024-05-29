export default function PerfilDeslogado() {
    return (
        <div className="bg-gray-300 flex flex-col min-h-screen">
            <div className="bg-green-200 h-16 w-full flex justify-between">
                <img src="unb.png" alt="Logo UNB" className="flex h-10 mt-4 ml-2 " />
                <div className="flex">
                    <button className="w-24 h-10 m-4 bg-blue-500 text-white border-2 border-white rounded-xl">Fazer Login</button>
                    
                </div>
            </div>
            <button className="hover:scale-110 p-3 m-3 border-5 border-black text-black flex ml-72"> ⇦</button>
            <section className="relative w-1/2 h-72 -mt-16 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-400 h-1/2 rounded-xl "> 
                    
                    
                </div>
                <img src="simpsonprof.jpg" alt="Foto do perfil" className="absolute border-3 border-green-1000 rounded-full overflow-hidden object-cover h-auto w-20 -mt-12" />
                <div className="bg-white h-1/2 rounded-xl">
                    <h2 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold text-gray-800 -mt-4">Professor Genérico</h2>
                    <p className="text-center text-black font-arial">Brasília/DF</p>
                    <p className="text-center text-black font-arial"> 💼 Departamento de Computação</p>
                    <p className="text-center text-black font-arial"> ✉️ professor.generico@unb.br</p>
                </div>
            </section>
            <section className="relative mt-2 rounded-xl h-96 w-1/2 bg-white left-1/2 transform -translate-x-1/2">
                <h2 className="font-bold text-black ml-2 "> Publicações</h2>
                <div className="mt-1 bg-green-400 h-1/2 w-full rounded-xl ">
                    <div className="flex ">
                        <img src="bartsimpson.jpg" alt="Foto do perfil" className="mt-1 ml-1 border-2 border-green-700 rounded-full overflow-hidden object-cover h-auto w-14" />
                        <p className="font-bold text-black">BartzinDeCria12</p>
                        <p className="text-gray-600 font-8 text-sm"> - 23/10/2021, às 19:32 - João - Avaliação</p>
                    </div>
                    <div className="">
                        <p className="text-black text-sm ml-4">Ótimo professor, explica muito bem e é muito atencioso com os alunos.</p>
                    </div>
                    <p className="text-black text-sm ml-6"> 💬 5 Comentários</p>
                </div>
                <div className="mt-2 bg-green-400 h-1/2 w-full rounded-xl ">
                    <div className="flex ">
                        <img src="transferir.png" alt="Foto do perfil" className="mt-1 ml-1 border-2 border-green-700 rounded-full overflow-hidden object-cover h-auto w-14" />
                        <p className="font-bold text-black">LisaSimpson01</p>
                        <p className="text-gray-600 font-8 text-sm"> - 05/12/2022, às 20:16 - Vitor - Avaliação</p>
                    </div>
                    <div className="">
                        <p className="text-black text-sm ml-4">Tem muito conhecimento, mas às vezes as aulas são um pouco confusas. No geral, um ótimo educador.</p>
                    </div>
                    <p className="text-black text-sm ml-6"> 💬 5 Comentários</p>
                </div>
            </section>
        </div>
    );
    
}
