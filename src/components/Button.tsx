import React from "react";
import "./Button.css"; 

interface ButtonProps {
    className?: string;
    value: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ className, value, onClick }) => {
    return(
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;