import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button count={count} setCount={setCount}></Button>
      <span>{ count }</span>
    </div>
  );
}

export default App;
