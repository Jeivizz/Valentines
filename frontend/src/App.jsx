import React, {useState, useEffect, useRef} from 'react';
import Envelope from './components/Envelope';
import LoginAmor from './components/LoginAmor';
import musica from './assets/alinhamento_milenar.mp3';
import Player from './components/Player';
import superCapa from './assets/super.jpg';

document.body.style.backgroundColor = '#eb3434';



function App() {
    const [amor, setAmor] = useState(false);

    useEffect(() => {
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', amor ? '#fdf2f8' : '#eb3434');
        document.body.style.backgroundColor = amor ? '#fdf2f8' : '#eb3434';
    }, [amor]);

    const audioRef = useRef(null);

    const handleConfirm = () => {
        setAmor(true);
        audioRef.current?.play();
    };

    return (
        <main
            className="relative h-[100dvh] w-full bg-pink-50 flex flex-col items-center justify-center p-4 overflow-hidden font-mono gap-4">
            {!amor && <LoginAmor onConfirm={handleConfirm} />}
            <Envelope/>
            <h1 className="text-xs md:text-sm text-red-800">Eu também te amo! Agora, abra a carta </h1>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-45 w-[80%] md:w-auto px-4 md:px-0">
                <Player cover={superCapa} title={"Alinhamento Milenar"} singer={"Jão"} src={musica} autoPlay={amor} loop={true} />
            </div>

        </main>
    );
}

export default App;