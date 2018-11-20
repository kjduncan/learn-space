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

                  <div className='row planets'>
                  <div className='columns small-12'>
                    <div className='column medium-3 medium-push-2'>
                      <button className='mercury'><img src={mercury}/>Mercury</button>
                    </div>
                    <div className='column medium-3 medium-push-2'>
                      <button className='earth'><img src={earth}/>Earth</button>
                    </div>
                    <div className='column medium-3 medium-push-2'>
                      <button className='jupiter'><img src={jupiter}/>Jupiter</button>
                    </div>
                    <div className='column medium-3 medium-push-2'>
                      <button className='uranus'><img src={uranus}/>Uranus</button>
                    </div>

                    </div>
                  </div>

                <div className='row planets'>
                  <div className='columns small-12'>
                  <div className='column medium-3 medium-push-2'>
                    <button className='venus'><img src={venus}/>Venus</button>
                  </div>
                  <div className='column medium-3 medium-push-2'>
                    <button className='mars'><img src={mars}/>Mars</button>
                  </div>
                  <div className='column medium-3 medium-push-2'>
                    <button className='saturn'><img src={saturn}/>Saturn</button>
                  </div>
                  <div className='column medium-3 medium-push-2'>
                    <button className='neptune'><img src={neptune}/>Neptune</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3 medium-pull-6">
                  <div className="sun">
                    <img src={sun}/>
                  </div>
                </div>
        </div>
              </div>

      </div>
    );
  }
}

export default App;
