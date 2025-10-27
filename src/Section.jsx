import React from "react";

const Card = ({ title, buttonText }) => (
    <div className="flex items-center justify-between p-4 bg-[#6c859d] rounded-lg shadow-lg mb-4 
                    transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl 
                    hover:ring-2 hover:ring-[#9eefe5] hover:shadow-[#9eefe5]/40"
    >
        <p className="text-white font-semibold text-lg">{title}</p>
        
        <button className="px-4 py-1 bg-[#2c373d] text-teal-400 rounded-lg font-medium 
                           hover:bg-teal-400 hover:text-[#2c373d] transition-colors font-iceberg"> 
            {buttonText}
        </button>
    </div>
);

class Section extends React.Component {

    render() {
        const noticias = [
            { title: "Titular 1", buttonText: "Veure més" },
            { title: "Titular 2", buttonText: "Veure més" },
            { title: "Titular 3", buttonText: "Veure més" },
            { title: "Titular 4", buttonText: "Veure més" }
        ];

        const videojuegos = [
            { title: "Joc 1", buttonText: "Veure més" },
            { title: "Joc 2", buttonText: "Veure més" },
            { title: "Joc 3", buttonText: "Veure més" },
            { title: "Joc 4", buttonText: "Veure més" }
        ];
        
        return (
            <section 
                className="w-full min-h-screen py-20 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/fondoWeb.png')", width:"100vw" }}
            >
                
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-center lg:space-x-12 space-y-12 lg:space-y-0">
                    
                    {/* Columna de 'Últimes notícies' */}
                    <div className="w-full lg:w-1/2 p-6 rounded-xl bg-[#4b617b] shadow-2xl border border-[#9eefe5] shadow-[#9eefe5]/50 transition-all duration-300">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#9eefe5] mb-6 text-center font-iceberg">
                            Últimes notícies
                        </h2>
                        
                        {noticias.map((item, index) => (
                            <Card key={index} title={item.title} buttonText={item.buttonText} />
                        ))}
                    </div>

                    
                    {/* Columna de 'Coneix tot sobre els millor videojocs' */}
                    <div className="w-full lg:w-1/2 p-6 rounded-xl bg-[#4b617b] shadow-2xl border border-[#9eefe5] shadow-[#9eefe5]/50 transition-all duration-300">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#9eefe5] mb-6 text-center font-iceberg">
                            Coneix tot sobre els millor videojocs
                        </h2>
                        
                        {videojuegos.map((item, index) => (
                            <Card key={index} title={item.title} buttonText={item.buttonText} />
                        ))}
                    </div>
                </div>
                {}
                 
            </section>
        );
    }
}

export default Section;