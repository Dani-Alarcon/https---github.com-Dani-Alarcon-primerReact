// Section.jsx

import React from "react";

// Componente funcional simple para las tarjetas (puede ir dentro de la clase o fuera)
const Card = ({ title, buttonText }) => (
    <div className="flex items-center justify-between p-4 bg-[#6c859d] rounded-lg shadow-xl mb-4 transition-transform duration-200 hover:scale-[1.02]">
        {/* Título de la tarjeta (Titular / Joc) */}
        <p className="text-[#c0e0de] font-semibold text-lg">{title}</p>
        
        {/* Botón "Veure més" */}
        <button className="px-3 py-1 bg-[#2c373d] text-teal-400 rounded-lg font-medium hover:bg-teal-400 hover:text-[#2c373d] transition-colors">
            {buttonText}
        </button>
    </div>
);

class Section extends React.Component {

    render() {
        // Datos de ejemplo para las columnas
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
            // Contenedor principal con la imagen de fondo
            <section 
                className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-80 bg-cover bg-center"
                style={{ backgroundImage: "url('/fondoWeb.png')", width:"100vw" }}
            >
                
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center lg:space-x-12 space-y-12 lg:space-y-0">
                    
                    {/* Columna de 'Últimes notícies' */}
                    <div className="w-full lg:w-1/2 p-6 rounded-xl bg-[#4b617b] shadow-2xl">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#9eefe5] mb-6 text-center">
                            Últimes notícies
                        </h2>
                        
                        {/* Renderiza las tarjetas de noticias */}
                        {noticias.map((item, index) => (
                            <Card key={index} title={item.title} buttonText={item.buttonText} />
                        ))}
                    </div>

                    
                    {/* Columna de 'Coneix tot sobre els millor videojocs' */}
                    <div className="w-full lg:w-1/2 p-6 rounded-xl bg-[#4b617b] shadow-2xl">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#9eefe5] mb-6 text-center">
                            Coneix tot sobre els millor videojocs
                        </h2>
                        
                        {/* Renderiza las tarjetas de videojuegos */}
                        {videojuegos.map((item, index) => (
                            <Card key={index} title={item.title} buttonText={item.buttonText} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;