import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';

function App() {
  const [value, setValue] = useState(0)

  return (
    <div id="layout">
      <div id="output">
        <Counter value={value} base={10} title="Base 10 - Decimal" />
        <Counter value={value} base={2} title="Base 2 - Binary" />
      </div>
      <hr />
      <div id="controls">
        <button onClick={() => setValue(n => n > 0 ? n - 1 : 0)}>-1</button>
        <button onClick={() => setValue(0)}>=0</button>
        <button onClick={() => setValue(n => n + 1)}>+1</button>
        <button onClick={() => setValue(n => n + 10)}>+10</button>
        <button onClick={() => setValue(n => n + 16)}>+16</button>
      </div>
    </div>
  );
}

export default App;
