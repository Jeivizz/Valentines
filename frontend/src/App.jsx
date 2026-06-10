import React, {useState, useEffect, useRef} from 'react';
import Envelope from './components/Envelope';
import LoginAmor from './components/LoginAmor';
import musica from './assets/alinhamento_milenar.mp3';
import Player from './components/Player';
import superCapa from './assets/super.jpg';

document.body.style.backgroundColor = '#ff6467';



function App() {
    const [amor, setAmor] = useState(false);

    useEffect(() => {
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', amor ? '#fdf2f8' : '#ff6467');
        document.body.style.backgroundColor = amor ? '#fdf2f8' : '#ff6467';
    }, [amor]);

    const audioRef = useRef(null);

    const handleConfirm = () => {
        setAmor(true);
        audioRef.current?.play();
    };

    return (
        <main
            className="relative h-dvh w-full bg-pink-50 flex flex-col items-center justify-center p-4 overflow-hidden font-mono gap-2">
            {!amor && <LoginAmor onConfirm={handleConfirm} />}
            <section className={"w-full h-2/3 md:h-1/2 -mx-4 -mt-4 absolute z-0 top-0"}>
                <div className={"w-full h-full bg-linear-to-b from-red-400 to-[#ffa9a9]"}></div>
                <div className={"shapedividers_com-1943 w-full h-full"}></div>
            </section>
            <Envelope/>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-45 w-[80%] md:w-auto px-4 md:px-0">
                <Player cover={superCapa} title={"Alinhamento Milenar"} singer={"Jão"} src={musica} autoPlay={amor} loop={true} />
            </div>

        </main>
    );
}

export default App;