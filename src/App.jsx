import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage/SearchPage';

const logo = `${process.env.PUBLIC_URL}/logo.png`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Next Gen Photo Generator
        </p>
        <div className="Search-Bar">
          <SearchPage />
        </div>
      </header>
    </div>

  );
}

export default App;
