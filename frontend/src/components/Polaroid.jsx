import React, { useEffect, useRef } from 'react';
import { dragElement } from "./draggable";

function Polaroid({ src, className = "" }) {
    const polaroidRef = useRef(null);

    useEffect(() => {
        if (polaroidRef.current) {
            dragElement(polaroidRef.current);
        }
    }, []);

    const hasRotateLeft = className.includes('-rotate');
    const hasRotateRight = className.includes('rotate') && !className.includes('-rotate');
    const rotation = hasRotateLeft ? '-rotate-6' : hasRotateRight ? 'rotate-15' : '';
    const cleanClassName = className.replace(/-rotate-\d+|rotate-\d+|-rotate|rotate/g, '');

    return (
        <div
            ref={polaroidRef}
            className={`absolute bg-white w-36 p-2 pb-6 shadow-red-950/50 shadow-lg select-none touch-none cursor-grab active:cursor-grabbing will-change-transform h-auto ${rotation} ${cleanClassName}`}
            style={{ backfaceVisibility: 'hidden' }}
        >
            <div className="bg-white aspect-square overflow-hidden pointer-events-none">
                <img src={src} className="w-full h-full object-cover pointer-events-none" />
            </div>
        </div>
    );
}

export default Polaroid;