import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useApiGet } from "./hook/useApiHook";
import { Floors } from "./hook/dataInterfaces";

function App() {

  const floors = useApiGet<Floors>('http://localhost:3000/floors');
  if (!floors.loading) console.log(floors);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">
          Hi there :)
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
