import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

const logo = `${process.env.PUBLIC_URL}/logo.png`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Next Gen Photo Generator
        </p>
      </header>
      <div className="Search-Bar">
        <SearchBar />
      </div>

    </div>

  );
}

export default App;
