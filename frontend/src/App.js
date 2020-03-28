/**import React from 'react';
import {useState} from 'react';
import Header from './Header';
// JSX (JAVASCRIPT xml)

function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div>
      <Header>Contador: {count}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
*/
import React from 'react';

import './global.css';
import Routes from './routes';

function App() {

  return (
      <Routes/>
  );
}

export default App;
