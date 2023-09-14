import React from "react";
import "./Screen.css";

// Define the data type for Screen component's properties 
interface ScreenProps {
    value: string;
}

// Define Screen as datatype "React.FC" (Functional Component)
const Screen: React.FC<ScreenProps> = ({ value }) => {
    return(
        <p className="screen">
            {value}
        </p>
    );
};

export default Screen; 