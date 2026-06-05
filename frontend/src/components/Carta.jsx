import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';
import Mensagem from "./Mensagem.jsx";
import { FaTimes, FaRegEye, FaArrowUp, FaArrowDown } from 'https://esm.sh/react-icons/fa';
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import Polaroid from "./Polaroid.jsx";


const Modal = ({onClose }) => createPortal(
    <div
        className="fixed w-screen h-screen inset-0 bg-black/60 z-40 flex items-center justify-center p-4"
    >
        <Polaroid src={foto1} className="z-20 absolute md:left-150 md:bottom-40 bottom-30 left-5 -rotate-45 shadow-lg md:scale-100 scale-75" />
        <Polaroid src={foto2} className="z-0 absolute md:left-290 top-35 left-63 -translate-x-1/2 rotate-15 shadow-lg md:scale-100 scale-75" />

        <div className={"z-10 bg-yellow-50 rounded p-2 w-full md:w-1/3 text-xs md:text-sm  shadow-2xl"}
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.20'/%3E%3C/svg%3E")`,}}
        >



            <div className="w-full flex flex-col text-center p-4 border-2 border-dashed border-pink-200" onClick={(e) => e.stopPropagation()} style={{ animation: 'popIn 0.25s ease' }}>
                <div className={"flex justify-between items-center mb-2"}>
                    <h3 className={"text-red-400 italic "}>Mossoró-RN, 12 de Junho de 2026</h3>
                    <Button onClick={onClose} className="border-red-400 text-red-400 hover:scale-110 transition-all ease-in-out hover:cursor-pointer">
                        <FaTimes/>
                    </Button>
                </div>


                <Mensagem />
            </div>
        </div>

        <style>{`
            @keyframes popIn {
                from { transform: scale(0.88); opacity: 0; }
                to   { transform: scale(1);    opacity: 1; }
            }
        `}</style>
    </div>, document.body
);

const Carta = ({isOut, onAbrir, onGuardar }) => {
    const [modalAberto, setModalAberto] = useState(false);

    return (
        <>
            {modalAberto && (
                <Modal onClose={() => setModalAberto(false)} />
            )}

            <div
                onClick={onAbrir}
                className={`absolute inset-x-0 mx-auto w-[92%] h-[95%] bg-yellow-50 p-3 transition-all duration-700 ease-in-out z-10 rounded-sm shadow-inner flex items-center justify-center text-xs md:text-sm overflow-hidden
                    ${isOut ? '-translate-y-1/2 scale-105 shadow-2xl' : 'translate-y-0 cursor-pointer'}`}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.20'/%3E%3C/svg%3E")`,
                }}
            >
                <div className="relative bg-transparent border-2 border-dashed border-pink-200 h-full w-full flex flex-col gap-4 p-4 ">

                    <div className={"flex justify-between items-center"}>
                        <h3 className={"text-red-400 italic"}>Mossoró-RN, 12 de Junho de 2026</h3>
                        <div className={"flex gap-4"}>
                            {isOut && (
                                <div className="flex items-center gap-2 pointer-events-auto">
                                    <Button
                                        onClick={(e) => { e.stopPropagation(); setModalAberto(true); }}
                                        className="border-red-400 text-red-400 opacity-75 hover:bg-pink-50"
                                    >
                                        <FaRegEye/>
                                    </Button>
                                    <Button
                                        onClick={onGuardar}
                                        className="border-gray-400 text-gray-400 hover:bg-gray-50"
                                    >
                                        <FaArrowDown />
                                    </Button>
                                </div>
                            )}

                            {!isOut && (
                                <div className="pointer-events-auto">
                                    <Button
                                        onClick={onAbrir}
                                        className="border-red-400 text-red-400 opacity-75"
                                    >
                                        <FaArrowUp />
                                    </Button>
                                </div>
                            )}
                        </div>

                    </div>

                    <Mensagem />

                </div>
            </div>
        </>
    );
};

export default Carta;