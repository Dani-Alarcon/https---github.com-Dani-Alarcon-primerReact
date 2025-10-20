import React from 'react';

const Carousel = () => {
    
    const images = [
        { id: 1, src: 'https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/qgbzgtxe8lhbibrlcjgp', alt: 'Joc 1' }, // Usando tu nueva imagen
        { id: 2, src: 'https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/zv7j0uqcy3sgmqujzsrd', alt: 'Joc 2' },
        { id: 3, src: 'https://image.api.playstation.com/vulcan/ap/rnd/202507/1617/2e757ffb0a6bb4b91af84db64e0183d725e56e5354f45eba.png', alt: 'Joc 3' },
        { id: 4, src: 'https://sm.ign.com/ign_latam/game/t/the-legend/the-legend-of-zelda-breath-of-the-wild_z2sc.jpg', alt: 'Joc 4' },
        { id: 5, src: 'https://i.pinimg.com/736x/ec/f4/04/ecf404c4cded91e164f3133c64d74e77.jpg', alt: 'Joc 5' },
        { id: 6, src: 'https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2024/10/DRAGON-BALL-Sparking-ZERO-key-art-4k-Review-resena-pc.jpg?fit=2560%2C1600&amp;ssl=1', alt: 'Joc 6' },
    ];
    
    const carouselItems = [...images, ...images];

    return (
        <div className="w-full py-12 mt-20"> 
            <div className="max-w-4xl mx-auto px-4 overflow-hidden">
                
                <div 
                    className="whitespace-nowrap carousel-track" 
                    style={{ 
                
                        width: `${carouselItems.length * 200}px`, 
                    }}
                >
                    {carouselItems.map((image, index) => (
                        <div 
                            key={`${image.id}-${index}`} 
                           
                            className={`relative inline-block w-72 h-64 bg-[#4b617b] rounded-xl overflow-hidden 
                                        shadow-lg border border-[#9eefe5] shadow-[#9eefe5]/40 
                                        transform transition-transform duration-300 ease-out 
                                        hover:scale-105 hover:shadow-xl hover:shadow-[#9eefe5]/60
                                        ${
                                            index % 2 === 0 ? 'rotate-[-3deg]' : 'rotate-[3deg]'
                                        } 
                                        mr-8 last:mr-0 flex-shrink-0`}
                           
                            style={{ minWidth: '200px', marginLeft: index > 0 ? '2rem' : '0', minHeight:'400px' }} 
                        >
                            
                            {}
                            {image.src && image.src.includes('public/placeholder') ? (
                              
                                <div className="w-full h-full flex items-center justify-center text-white text-lg font-bold"
                                    style={{ backgroundColor: '#4b617b', color: 'white' }}>
                                    {image.alt}
                                </div>
                            ) : (
                                <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                    className="w-full h-full object-cover" 
                                />
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;