import React from 'react';
import logo from './logo.svg';
// import './App.css';

import Labs from "./Labs";
import Labs2 from "./Labs/labs";

import Kanbas from './Kanbas';
import HelloWorld from './Labs/a3/hi';

function App() {
  return (
    <div>
      <h1>hello world!</h1>
      <Labs />
      <Kanbas />
      <HelloWorld />
    </div>    
  );

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  
}

export default App;
