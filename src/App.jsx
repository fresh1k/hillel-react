import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {

  const [count, setCount] = useState(0)

  const handleIncreaseNumber = () => setCount(count + 1)
  const handleDecreaseNumber = () => setCount(count - 1)

  return (
    <div className="App">
      <Button handleIncreaseNumber={handleIncreaseNumber} handleDecreaseNumber={handleDecreaseNumber} count={count} />
    </div>
  );
}

export default App;
