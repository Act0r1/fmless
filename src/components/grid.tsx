import React from "react";
import "../App.css";

const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)); // A–Z

export const OverlayGrid = () => {
    return (
        <div className="overlay">
            {letters.map((letter) => (
                <div key={letter} className="grid-cell">
                    {letter}
                </div>
            ))}
        </div>
    );
};
