import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimeList from './AnimeList';
import AnimeDetail from './AnimeDetail';
import Menu from './Menu';
import Slider from './Slider'; 
import About from './About'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Slider /> 
                <AnimeList /> 
              </>
            } />
            <Route path="/anime/:title" element={<AnimeDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
