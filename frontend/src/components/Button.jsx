import React from 'react';

const Button = ({ children, onClick, className = "", ...props }) => {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation(); // Evita que o clique no botão dispare o clique da carta
                if (onClick) onClick(e);
            }}
            {...props}
            className={`px-1 md:px-3 md:py-1 border-2 rounded md:rounded-md transition-all duration-300 active:scale-95 text-xs md:text-sm font-medium ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;