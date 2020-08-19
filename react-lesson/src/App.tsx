import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from "./component/Child";

const App: React.FC = () => {

  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const handleIncrement = (num: number) => {
    setCount(num);
  }
  const handleDecrement = (num: number) => {
    setCount(num);
  }
  // React.ChangeEvent<HTMLInputElement>
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  }

  return (
    <div className="App">
      {count}
      <button onClick={() => handleIncrement(count + 1)}>+ボタン</button>
      <button onClick={() => handleDecrement(count - 1)}>-ボタン</button>
      <input type="text" value={message} onChange={handleMessage} />
    </div >
  );
}

export default App;
