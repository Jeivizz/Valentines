import react, {useEffect, useState, useRef} from 'react';
import { FaPlay, FaPause } from 'https://esm.sh/react-icons/fa';


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
        <div className={"w-full flex  p-2 gap-2 italic h-16 rounded md:rounded-lg bg-transparent"} >

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



            <button onClick={togglePlay} className={"flex hover:scale-110 transition-all ease-in-out hover:cursor-pointer text-white text:sm md:text-xl aspect-square justify-end items-center"}>
                {playing ? <FaPause  /> : <FaPlay  />}
            </button>





        </div>
    );
};

export default Player