import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from "./component/Child";


const App: React.FC = () => {
  return (
    <div className="App">
      <Child message={"ss"} >
        <section className="hoge">
          Childだーー
        </section>
      </Child>
    </div>
  );
}

export default App;
