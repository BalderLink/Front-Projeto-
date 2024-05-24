export default function FeedDeslogado() {
    return (
        <main className="text-black bg-gray-200 flex flex-col min-h-screen">
           
            <header className="bg-green-200 flex justify-between items-center p-4">
                <img src="/logo.png" alt="logo" className="h-12" />
                <button className="p-2 bg-blue-400 text-white rounded-lg">
                    Login
                </button>
            </header>
            
            <div className="flex justify-center mt-5 bg-gray-200">
                <input 
                    className="p-2 rounded-lg bg-white border border-gray-300 w-1/2" 
                    type="text" 
                    placeholder="Buscar Professor(a)" 
                />
            </div>

            <section className="p-8 flex-1">
                <h2 className="text-2xl font-semibold mb-4">Novos Professores</h2>
                <div className="flex justify-around mb-8">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img 
                                src="/placeholder.png" 
                                alt="Professor" 
                                className="h-24 w-24 mx-auto"
                            />
                            <p className="text-center mt-2">Nome</p>
                            <p className="text-center text-gray-500">Disciplina</p>
                        </div>
                    ))}
                </div>
                
                <hr className="border-black my-8" />
                
                <h2 className="text-2xl font-semibold mb-4">Todos os Professores</h2>
                <div className="flex justify-end mb-4">
                    <button className="bg-blue-400 text-white p-2 rounded-lg mx-2">
                        Ordenar
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img 
                                src="/placeholder.png" 
                                alt="Professor" 
                                className="h-24 w-24 mx-auto"
                            />
                            <p className="text-center mt-2">Nome</p>
                            <p className="text-center text-gray-500">Disciplina</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
