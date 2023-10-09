import React from "react";
import "./Button.css"; 

interface ButtonProps {
    className?: string;
    value: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ className, value, onClick }) => {
    return(
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;