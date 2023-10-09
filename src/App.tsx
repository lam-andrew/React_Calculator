import React, { useState } from 'react';
import './index.css';

import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues: (string | number)[][] = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

interface CalculatorState {
  sign: string;
  num: string;
  res: string;
}

const toLocaleString = (num: number) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num: number) => num.toString().replace(/\s/g, "");

const App: React.FC = () => { // Define the App component (Represents the entire Calculator App) 

  // Handles number input from the user 
  const numClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevents the default behavior of the browser when the button is clicked 
    const value = (e.target as HTMLButtonElement).innerHTML;  // Extract the content from the button 

    if (removeSpaces(Number(calc.num)).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === "0" && value === "0"
            ? "0"
            : Number(removeSpaces(parseInt(calc.num))) % 1 === 0
            ? toLocaleString(Number(removeSpaces(Number((calc.num + value))).toString()))
            : toLocaleString(Number((calc.num + value).toString())),
        res: !calc.sign ? "0" : calc.res,
      });
    }
  };

  // Handles decimal input from the user 
  const commaClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevents the default behavior of the browser when the button is clicked 
    const value = (e.target as HTMLButtonElement).innerHTML;  // Extract the content from the button 
  
    setCalc({
      ...calc,
      num: !calc.num.includes(".") ? calc.num + value : calc.num,
    });
  };

  // Handles sign input from the user 
  const signClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !Number(calc.res) && calc.num ? calc.num : calc.res,
      num: "0",
    });
  };

  // Handles equal sign input from user and the corresponding calculations 
  const equalsClickHandler = () => {
    if (calc.sign && Number(calc.num)) {
      const math = (a: number, b: number, sign: string) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;
  
      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
              math(
                Number(removeSpaces(Number(calc.res))), 
                Number(removeSpaces(Number(calc.num))), 
                calc.sign
              ),
            ),
        sign: "",
        num: "0",
      });
    }
  };

  // Handles inverting a number (+-)
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(Number(removeSpaces(Number(calc.num) * -1))) : "0",
      res: calc.res ? toLocaleString(Number(removeSpaces(Number(calc.res) * -1))) : "0",
      sign: "",
    });
  };

  // Handles percentage calculations 
  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(Number(calc.num))) : 0;
    let res = calc.res ? parseFloat(removeSpaces(Number(calc.res))) : 0;
  
    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)).toString(),
      res: (res /= Math.pow(100, 1)).toString(),
      sign: "",
    });
  };

  // Handles resetting the screen 
  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: "0",
      res: "0",
    });
  };


  // Initialize state with useState() 
  let [calc, setCalc] = useState<CalculatorState>({
    sign: "",
    num: "0",
    res: "0",
  });

  return (
    <Wrapper>
      <Screen value={Number(calc.num) ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn: string | number, i: number) => (
          <Button
            key={i}
            className={btn === '=' ? "equals" : ""}
            value={btn.toString()}
            onClick={
              btn === "C"
                ? resetClickHandler
                : btn === "+-"
                ? invertClickHandler
                : btn === "%"
                ? percentClickHandler
                : btn === "="
                ? equalsClickHandler
                : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                ? signClickHandler
                : btn === "."
                ? commaClickHandler
                : numClickHandler
            }
          />
        ))}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
