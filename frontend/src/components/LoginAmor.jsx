import React, { useState, useRef } from 'react';
import { GoHeart } from 'https://esm.sh/react-icons/go';

const LoginAmor = ({ onConfirm }) => {
    const [confirmed, setConfirmed] = useState(false);
    const [naoClicks, setNaoClicks] = useState(0);

    const mensagens = ['Pense bem antes de responder <3', 'VOCÊ ME AMA?', 'Pense novamente...', 'Fui mais esperto que você'];

    const handleNao = () => {
        if (naoClicks < 3) setNaoClicks(prev => prev + 1);
    };

    return (
        <div className="fixed inset-0  bg-red-400 flex items-center justify-center z-50 p-4 h-full">
            <div className="bg-white rounded-2xl border border-pink-100 shadow-xl p-10 md:max-w-sm w-full text-center flex flex-col ustify-center items-center">
                <div className="text-4xl mb-4 text-[#eb3434]"><GoHeart /></div>
                <p className="font-serif text-2xl italic text-gray-700 mb-1">Você me ama?</p>
                <p className="text-sm text-gray-400 mb-8">
                    {mensagens[naoClicks]}
                </p>

                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => { setConfirmed(true); onConfirm?.(); }}
                        className="px-7 py-2 rounded-lg  border-4 border-pink-300 text-pink-600 font-medium  transition hover:scale-110 transition-all ease-in-out hover:cursor-pointer"
                    >
                        Amo 💕
                    </button>

                    <button
                        onClick={handleNao}
                        disabled={naoClicks >= 3}
                        className={`px-7 py-2 rounded-lg border-4 font-medium transition-all duration-300 hover:scale-110 transition-all ease-in-out hover:cursor-pointer
                            ${naoClicks >= 3
                            ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                            : 'border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                    >
                        Não
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginAmor;