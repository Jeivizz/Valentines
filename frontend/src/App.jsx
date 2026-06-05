import React, { useState, useEffect, useRef } from 'react';
import Envelope from './components/Envelope';
import LoginAmor from './components/LoginAmor';
import musica from './assets/alinhamento_milenar.mp3';
import Player from './components/Player';
import superCapa from './assets/super.jpg';

function App() {
    const [amor, setAmor] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const corFundo = amor ? '#fdf2f8' : '#ff6467';
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', corFundo);

        document.documentElement.style.backgroundColor = corFundo;
        document.body.style.backgroundColor = corFundo;
    }, [amor]);

    const handleConfirm = () => {
        setAmor(true);
        audioRef.current?.play();
    };

    return (
        <main className="relative h-full w-full flex flex-col items-center justify-center p-4 overflow-hidden font-mono gap-4">

            {!amor ? (
                <LoginAmor onConfirm={handleConfirm} />
            ) : (
                <>
                    <Envelope />
                    <h1 className="text-xs md:text-sm text-red-800/75 animate-fade-in">
                        Eu também te amo! Agora, abra a carta
                    </h1>

                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-45 w-[80%] md:w-auto px-4 md:px-0">
                        <Player
                            cover={superCapa}
                            title={"Alinhamento Milenar"}
                            singer={"Jão"}
                            src={musica}
                            autoPlay={amor}
                            loop={true}
                        />
                    </div>
                </>
            )}

        </main>
    );
}

export default App;