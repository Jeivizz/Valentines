import react, {useEffect, useState, useRef} from 'react';
import { FaPlay, FaPause } from 'https://esm.sh/react-icons/fa';
import { TbMusic, TbMusicOff } from 'https://esm.sh/react-icons/tb';
import Button from "./Button.jsx";

const Player = ({ cover, title, singer, src, autoPlay = false, loop = false}) => {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const togglePlay = () => {
        if(playing) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
    };

    useEffect(() => {
        if (autoPlay) audioRef.current?.play();
    }, [autoPlay]);

    return (
        <div className={"w-full flex shadow-lg  p-2 gap-2 italic  h-16 bg-white rounded md:rounded-lg"} style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.20'/%3E%3C/svg%3E"),
                                          linear-gradient(to top left,  #ff6b6b, #ffaaaa`,}}>

            <audio
                ref = {audioRef}
                loop = {loop}
                onPlay = {() => setPlaying(true)}
                onPause = {() => setPlaying(false)}
            >
                <source src={src} type="audio/mpeg" />
            </audio>

            <div className={"flex gap-2 text-white items-center"}>
                <img src={cover} alt="" className="aspect-square h-full object-cover rounded" />
                <div className={"flex flex-col items-start text-xs md:text-sm"}>
                    <h1 className={"font-bold"}>{title}</h1>
                    <h2 className={""}>{singer}</h2>
                </div>
            </div>



            <button onClick={togglePlay} className={"flex hover:scale-110 transition-all ease-in-out hover:cursor-pointer text-white text:sm md:text-xl aspect-square justify-center items-center"}>
                {playing ? <FaPause  /> : <FaPlay  />}
            </button>





        </div>
    );
};

export default Player