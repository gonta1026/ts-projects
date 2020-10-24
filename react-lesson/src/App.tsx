import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components';
import Child from "./component/Child";

type TitleProps = {
  blue?: boolean;
  gray?: boolean;
}

const Title = styled.h1<TitleProps>`
    color: red;
    ${({ blue }) => blue ? css`
        color: blue;
    ` : ''}
    ${({ gray }) => gray ? css`
        color: gray;
    ` : ''}
`
const App: React.FC = () => {

  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [blue, setBlue] = useState(true);
  const [gray, setGray] = useState(false);

  const handleIncrement = (num: number) => {
    setCount(num);
  }
  // const handleDecrement = (num: number) => {
  //   setCount(num);
  // }

  const handleColor = (boolean: boolean) => {
    setGray(!boolean);
  }


  // React.ChangeEvent<HTMLInputElement>
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  }

  return (
    <div className="App">
      <Title onClick={handleColor(gray)} gray>ほげっhげお</Title>

      {count}
      <button onClick={() => handleIncrement(count + 1)}>+ボタン</button>
      <button onClick={() => handleDecrement(count - 1)}>-ボタン</button>
      <input type="text" value={message} onChange={handleMessage} />
      {message}
    </div >
  );
}

export default App;
