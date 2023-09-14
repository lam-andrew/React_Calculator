import React, { ReactNode } from "react";
import "./ButtonBox.css";

// Define datatype for ButtonBox props 
interface ButtonBoxProps {
    children: ReactNode;
}

// Define ButtonBox dataype as React.FC (Functional Component) 
const ButtonBox: React.FC<ButtonBoxProps> = ({children}) => {
    return(
        <div className="buttonBox">{children}</div>
    );
};

export default ButtonBox;