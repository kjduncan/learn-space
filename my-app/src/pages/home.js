import React, { Component } from 'react';
import sun from '../images/sun.svg';
import mercury from '../images/Mercury.svg';
import venus from '../images/Venus.svg';
import earth from '../images/Earth.svg';
import mars from '../images/mars.svg';
import jupiter from '../images/jupiter.svg';
import saturn from '../images/saturn.svg';
import uranus from '../images/Uranus.svg';
import neptune from '../images/neptune.svg';
import spaceflame from '../images/spaceshipFlame.svg';
import Planet from './planet.js';
import classNames from 'classnames'

let planets = [
    {
      name: 'Mercury',
      attributes: {
        size: 5,
        distance: '200 mil',
        atmosphese: 'rocky AF',
        imgSrc: mercury
      }
    },
      {
        name: 'Earth',
        attributes: {
          size: 5,
          distance: '200 mil',
          atmosphese: 'rocky AF',
          imgSrc: earth
        }
      },
        {
          name: 'Jupiter',
          attributes: {
            size: 5,
            distance: '200 mil',
            atmosphese: 'rocky AF',
            imgSrc: jupiter
          }
        },
        {
          name: 'Uranus',
          attributes: {
            size: 5,
            distance: '200 mil',
            atmosphese: 'rocky AF',
            imgSrc: uranus
          }
        },
          {
            name: 'Venus',
            attributes: {
              size: 5,
              distance: '200 mil',
              atmosphese: 'rocky AF',
              imgSrc: venus
            }
          },
            {
              name: 'Mars',
              attributes: {
                size: 5,
                distance: '200 mil',
                atmosphese: 'rocky AF',
                imgSrc: mars
              }
            },
            {
              name: 'Saturn',
              attributes: {
                size: 5,
                distance: '200 mil',
                atmosphese: 'rocky AF',
                imgSrc: saturn
              }
            },
            {
              name: 'Neptune',
              attributes: {
                size: 5,
                distance: '200 mil',
                atmosphese: 'rocky AF',
                imgSrc: neptune
              }
            },
            {
              name: 'Sun'
            }
];




class Home extends Component {
      constructor(props) {
      super(props);
      this.state = {
        selectedPlanet:{},
        planetOpen: false
      };
      }

      selectedPlanet = (planet) => {
        this.setState({
          selectedPlanet: planet,
        },
        () => {
          setTimeout(() => {
            this.setState({
              planetOpen: true
            })
          }, 1000)
        }
      );
      }
  render() {
    console.warn(this.state.selectedPlanet);
    console.warn(this.state.planetOpen);
    var planetStyle = (planetName) => {
        return classNames(
          planetName.toLowerCase(),
          {
            'planet-fly': this.state.selectedPlanet.name!==planetName && this.state.selectedPlanet.name !== undefined,
            'planet-selected': this.state.selectedPlanet.name===planetName
          })
      }
    return (
      <div className="Home">

        <div className="container">
                <div className="row">

                  <div className="columns medium-3 ship medium-pull-1 bounce">
                    <img src={spaceflame}/>
                  </div>
                </div>

                  <div className='row planets'>
                  <div className='columns small-12'>
                    <div className='column medium-3 medium-push-2'>
                      <button onClick={() => {this.selectedPlanet(planets[0])}} className={planetStyle(planets[0].name)}><img src={mercury}/>Mercury</button>
                    </div>
                    <div className='column medium-3 medium-push-2'>
                      <button onClick={() => {this.selectedPlanet(planets[1])}} className={planetStyle(planets[1].name)}><img src={earth}/>Earth</button>
                    </div>
                    <div className='column medium-3 medium-push-2'>
                      <button onClick={() => {this.selectedPlanet(planets[2])}} className={planetStyle(planets[2].name)}><img src={jupiter}/>Jupiter</button>
                    </div>
                    <div className='column medium-3 medium-push-2'>
                      <button onClick={() => {this.selectedPlanet(planets[3])}} className={planetStyle(planets[3].name)}><img src={uranus}/>Uranus</button>
                    </div>

                    </div>
                  </div>

                <div className='row planets'>
                  <div className='columns small-12'>
                  <div className='column medium-3 medium-push-2'>
                    <button onClick={() => {this.selectedPlanet(planets[4])}} className={planetStyle(planets[4].name)}><img src={venus}/>Venus</button>
                  </div>
                  <div className='column medium-3 medium-push-2'>
                    <button onClick={() => {this.selectedPlanet(planets[5])}} className={planetStyle(planets[5].name)}><img src={mars}/>Mars</button>
                  </div>
                  <div className='column medium-3 medium-push-2'>
                    <button onClick={() => {this.selectedPlanet(planets[6])}} className={planetStyle(planets[6].name)}><img src={saturn}/>Saturn</button>
                  </div>
                  <div className='column medium-3 medium-push-2'>
                    <button onClick={() => {this.selectedPlanet(planets[7])}} className={planetStyle(planets[7].name)}><img src={neptune}/>Neptune</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3 medium-pull-6">
                  <div className={planetStyle(planets[8].name)}>
                    <img src={sun}/>
                  </div>
                </div>
        </div>
              </div>
              {
                this.state.planetOpen &&
                  <Planet />
              }
      </div>
    );
  }
}

export default Home;
