import React, { ReactNode } from "react";
import "./Wrapper.css";

// Defines the types of the Wrapper Properties as "ReactNode"
interface WrapperProps {
  children: ReactNode;
}

// Define Wrapper as an FC (Functional Component) and the types of its props will be <WrapperProps>
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
