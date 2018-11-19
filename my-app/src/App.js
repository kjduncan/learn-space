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
            <div className="columns medium-3 ship medium-pull-1">
              <img src={spaceflame}/>
            </div>

          </div>
          <div className="row">
            <div className="columns medium-3 medium-pull-6">
              <div className="sun">
                <img src={sun}/>
              </div>
            </div>

              <ul className="planets">
                <div className='row'>
                <div className='columns medium-12 medium-push-3'>
                <button><li><img src={mercury}/>Mercury</li></button>
                <button><li><img src={venus}/>Venus</li></button>
                <button><li><img src={earth}/>Earth</li></button>
                <button><li><img src={mars}/>Mars</li></button>
                </div>
                </div>
                <div className='row'>
                <div className='columns medium-12 medium-push-1'>
                <button><li><img src={jupiter}/>Jupiter</li></button>
                <button><li><img src={saturn}/>Saturn</li></button>
                <button><li><img src={uranus}/>Uranus</li></button>
                <button><li><img src={neptune}/>Neptune</li></button>
                </div>
                </div>
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
