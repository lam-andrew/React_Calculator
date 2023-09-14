import React from 'react';
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

const App: React.FC = () => {
  return (
    <Wrapper>
      <Screen value='0' />
      <ButtonBox>
        {btnValues.flat().map((btn: string | number, i: number) => (
          <Button
            key={i}
            className={btn === '=' ? "equals" : ""}
            value={btn.toString()}
            onClick={() => {
              console.log(`${btn} clicked!`);
            }}
          />
        ))}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
