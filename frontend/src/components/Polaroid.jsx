function Polaroid({ src, className = "" }) {
    return (
        <div className={`aspect-3/4 bg-white w-36 p-2 shadow-red-950/50 shadow-lg ${className}`}>
            <div className="bg-white aspect-square overflow-hidden">
                <img src={src} className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

export default Polaroid;