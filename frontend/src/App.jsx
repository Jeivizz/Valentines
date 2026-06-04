import React, { useState, useEffect } from 'react';
import Envelope from './components/Envelope';
import LoginAmor from './components/LoginAmor';

const HeartIcon = ({ size = 24, strokeWidth = 1, color = "currentColor", className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 21.593 C8 18 2 14 2 8.5 C2 5.42 4.42 3 7.5 3 C9.24 3 10.91 3.81 12 6.5 C13.09 3.81 14.76 3 16.5 3 C19.58 3 22 5.42 22 8.5 C22 14 16 18 12 21.593 Z" />
    </svg>
);

function App() {
    const [amor, setAmor] = useState(false);

    useEffect(() => {
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', amor ? '#fdf2f8' : '#eb3434');
    }, [amor]);

    return (
        <main className="relative min-h-[100dvh] w-full bg-pink-50 flex flex-col items-center justify-center p-4 overflow-hidden font-mono gap-4">
            {!amor && <LoginAmor onConfirm={() => setAmor(true)} />}
            <Envelope />
            <h1 className="text-xs md:text-sm">Eu sabia! Obrigado por me fazer tão feliz.</h1>
        </main>
    );
}

export default App;