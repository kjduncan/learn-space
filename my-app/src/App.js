import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sun from './images/sun.svg';
import mercury from './images/Mercury.svg';
import venus from './images/Venus.svg';
import earth from './images/Earth.svg';
import mars from './images/mars.svg';
import jupiter from './images/jupiter.svg';
import saturn from './images/saturn.svg';
import uranus from './images/Uranus.svg';
import neptune from './images/neptune.svg';
import spaceflame from './images/spaceshipFlame.svg';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="row">
            <div className="columns medium-3 ship">
              <img src={spaceflame}/>
            </div>

          </div>
          <div className="row">
            <div className="columns medium-3">
              <div className="sun">
                <img src={sun}/>
              </div>
            </div>
            <div className="column medium-9">
              <ul className="planets">
                <button><li><img src={mercury}/>Mercury</li></button>
                <button><li><img src={venus}/>Venus</li></button>
                <button><li><img src={earth}/>Earth</li></button>
                <button><li><img src={mars}/>Mars</li></button>
                <button><li><img src={jupiter}/>Jupiter</li></button>
                <button><li><img src={saturn}/>Saturn</li></button>
                <button><li><img src={uranus}/>Uranus</li></button>
                <button><li><img src={neptune}/>Neptune</li></button>
              </ul>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
