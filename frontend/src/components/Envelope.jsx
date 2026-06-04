import React, { useState } from 'react';
import Carta from './Carta';
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import Polaroid from "./Polaroid.jsx";


const Envelope = () => {
    const [state, setState] = useState('fechado');

    // Função para a ABA e CORPO (Fundo)
    const handleEnvelopeClick = () => {
        if (state === 'fechado') {
            setState('abaAberta');
        } else if (state === 'abaAberta') {
            setState('fechado');
        }
    };

    // Função específica para a CARTA
    const handleCartaClick = (e) => {
        // CRITICAL: Impede que o clique chegue no envelope (pai)
        e.stopPropagation();

        if (state === 'abaAberta') {
            setState('cartaFora');
        } else if (state === 'cartaFora') {
            setState('abaAberta'); // Coloca a carta de volta
        }
    };

    return (
        <div className="relative w-full max-w-lg aspect-4/3 flex flex-col items-center justify-center" style={{ perspective: '1200px', perspectiveOrigin: '50% 0%' }}>
            <div
                className={`relative w-full h-full bg-[#eb3434] cursor-pointer overflow-visible transition-all duration-500 rounded-b-3xl  transform-gpu
                ${state !== 'fechado' ? 'translate-y-20' : 'translate-y-0'}`}
                style={{
                    transformStyle: 'preserve-3d',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.20'/%3E%3C/svg%3E")`,
                }}
                onClick={handleEnvelopeClick}
            >

                <Carta
                    isOut={state === 'cartaFora'}
                    onAbrir={handleCartaClick}
                    onGuardar={() => setState('abaAberta')}
                />


                    <div className="absolute inset-0 z-20 pointer-events-none  overflow-hidden">
                        <Polaroid src={foto1} className="absolute top-4 left-4 -rotate-6 shadow-lg" />
                        <Polaroid src={foto2} className="absolute top-10 left-[40%] -translate-x-1/2 rotate-15 shadow-lg" />
                    </div>


                <div
                    className="z-30 absolute h-full w-full transition-all duration-300 origin-top shadow-xl-black"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.20'/%3E%3C/svg%3E"),
                                          linear-gradient(to bottom, #eb3434, #ff8585)`,
                        willChange: 'transform',
                        transformStyle: 'preserve-3d',
                        clipPath: 'polygon(0% 0%, 100% 0, 100% 4%, 50% 60%, 0 4%)',
                        transform: state !== 'fechado' ? 'rotateX(180deg)' : 'rotateX(0deg)',
                        zIndex: state !== 'fechado' ? 0 : 30,
                        transitionDelay: state !== 'fechado' ? '150ms' : '0ms'
                    }}
                >
                </div>

                <div className="absolute inset-0 rounded-b-xl overflow-hidden z-20 pointer-events-none">
                    <div className={"shadow-2xl"}>
                        <div className="absolute w-full h-full" style={{
                            clipPath: 'polygon(0 2%, 0% 100%, 50% 50%)',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.20'/%3E%3C/svg%3E"),
                                          linear-gradient(to bottom right, #ef5555, #ff8585`,}} />
                    </div>
                    <div className="absolute w-full h-full" style={{
                        clipPath: 'polygon(100% 2%, 100% 100%, 50% 50%)',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.20'/%3E%3C/svg%3E"),
                                          linear-gradient(to bottom left, #ef5555, #ff8585`, }} />
                    <div className="absolute w-full h-full bg-red-400 inset-shadow-2xs" style={{
                        clipPath: 'polygon(100% 100%, 0% 100%, 50% 50%)',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.20'/%3E%3C/svg%3E"),
                                          linear-gradient(to top,  #ff6b6b, #ffaaaa`,}} />
                </div>
            </div>
        </div>
    );
};

export default Envelope;