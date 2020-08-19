import React from 'react';
import './App.css';
import Users from "./pages/Users";

const App = () => {
  return (
    <div>
      <Users hoge={"hoge"} num={10} />
    </div>
  );
}

export default App;
