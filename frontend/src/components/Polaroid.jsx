import React, { useEffect, useRef } from 'react';
import { dragElement } from "./draggable";

function Polaroid({ src, className = "" }) {
    const polaroidRef = useRef(null);

    useEffect(() => {
        if (polaroidRef.current) {
            dragElement(polaroidRef.current);
        }
    }, []);

    return (
        <div
            ref={polaroidRef}
            className={`absolute aspect-3/4 bg-white w-36 p-2 shadow-red-950/50 shadow-lg select-none touch-none cursor-grab active:cursor-grabbing ${className}`}
        >
            <div className="bg-white aspect-square overflow-hidden pointer-events-none">
                <img src={src} className="w-full h-full object-cover pointer-events-none" />
            </div>
        </div>
    );
}

export default Polaroid;