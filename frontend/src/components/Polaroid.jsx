import React, { useState, useRef } from 'react';

function Polaroid({ src, className = "" }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });

    const handlePointerDown = (e) => {
        // CORREÇÃO: Impede que o clique na foto suba até o Modal e feche a tela
        e.stopPropagation();

        setIsDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);

        dragStart.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y
        };
    };

    const handlePointerMove = (e) => {
        // Também paramos a propagação aqui para garantir estabilidade no mobile
        e.stopPropagation();
        if (!isDragging) return;

        setPosition({
            x: e.clientX - dragStart.current.x,
            y: e.clientY - dragStart.current.y
        });
    };

    const handlePointerUp = (e) => {
        e.stopPropagation();
        setIsDragging(false);
        e.currentTarget.releasePointerCapture(e.pointerId);
    };

    const hasRotateLeft = className.includes('-rotate');
    const hasRotateRight = className.includes('rotate') && !className.includes('-rotate');
    const rotation = hasRotateLeft ? 'rotate(-6deg)' : hasRotateRight ? 'rotate(15deg)' : '';

    return (
        <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className={`aspect-3/4 bg-white w-36 p-2 shadow-red-950/50 shadow-lg cursor-grab active:cursor-grabbing select-none touch-none ${className}`}
            style={{
                transform: `${rotation} translate(${position.x}px, ${position.y}px)`,
                zIndex: isDragging ? 50 : 15,
                willChange: 'transform'
            }}
        >
            <div className="bg-white aspect-square overflow-hidden pointer-events-none">
                <img src={src} className="w-full h-full object-cover pointer-events-none" />
            </div>
        </div>
    );
}

export default Polaroid;