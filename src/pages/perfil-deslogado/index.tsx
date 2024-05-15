export default function PerfilDeslogado() {
    return (
        <div className="bg-gray-300 flex flex-col min-h-screen">
            <div className="bg-green-200 h-16 w-full">
              <img src="unb.png" alt="Logo UNB" className="flex h-10 mt-2 ml-2 " />
                <section className="relative w-96 h-72 left-1/2 transform -translate-x-1/2 flexmt-6"> 
                    <div className="inset-x-0 top-0 bg-green-400 h-40 rounded-xl mt-6 z-0"></div>
                    <img src="itadori.jpg" alt="Foto do perfil" className="absolute flex border-2 border-green-500 rounded-full overflow-hidden object-cover h-auto w-24 -mt-12 z-10"/>
                    <div className="inset-x-0 top-0 bg-white h-1/2 rounded-xl z-0">
                    <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold text-gray-800">Billian</h2>
                    <p className="text-center text-black font-arial">Brasília/DF</p>
                    <p className="text-center text-black font-arial"> Curso de Lic. em Computação</p>
                    </div>

                </section>
            </div>
        </div>
    );
}