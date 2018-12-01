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


/*facts from https://space-facts.com/planets/*/
let planets = [
    {
      name: 'Mercury',
      attributes: {
        size: '4,879 km in diameter',
        distance: '57,909,227 km (0.39 AU) from the Sun',
        atmosphere: 'Mercury has just 38% the gravity of Earth, this is too little to hold on to what atmosphere it has which is blown away by solar winds. However while gases escape into space they are constantly being replenished at the same time by the same solar winds, radioactive decay and dust caused by micrometeorites',
        orbit: '88 days to orbit the Sun',
        imgSrc: mercury
      }
    },
      {
        name: 'Earth',
        attributes: {
          size: '12,742 km in diameter',
          distance: '149,598,262 km (1 AU) from the Sun',
          atmosphere: 'The atmosphere of Earth is the layer of gases, commonly known as air, that surrounds the planet Earth and is retained by Earths gravity.',
          orbit: '365.24 days to orbit the Sun',
          imgSrc: earth
        }
      },
        {
          name: 'Jupiter',
          attributes: {
            size: '139,822 km in diameter',
            distance: '778,340,821 km (5.20 AU) from the Sun',
            atmosphere: 'The upper atmosphere of Jupiter is divided into cloud belts and zones. They are made primarily of ammonia crystals, sulfur, and mixtures of the two compounds.',
            orbit: '11.9 years to orbit the Sun',
            imgSrc: jupiter
          }
        },
        {
          name: 'Uranus',
          attributes: {
            size: '50,724 km in diameter',
            distance: '2,870,658,186 km (19.22 AU) from the Sun',
            atmosphere: 'Like the other gas giants, it has a hydrogen upper layer, which has helium mixed in. Below that is an icy “mantle, which surrounds a rock and ice core. The upper atmosphere is made of water, ammonia and the methane ice crystals that give the planet its pale blue colour.',
            imgSrc: uranus
          }
        },
          {
            name: 'Venus',
            attributes: {
              size: '12,104 km in diameter',
              distance: '108,209,475 km (0.73 AU) from the Sun',
              atmosphere: 'The average surface temperature is 462 °C, and because Venus does not tilt on its axis, there is no seasonal variation. The dense atmosphere of around 96.5 percent carbon dioxide traps heat and causes a greenhouse effect.',
              orbit: '225 days to orbit the Sun',
              imgSrc: venus
            }
          },
            {
              name: 'Mars',
              attributes: {
                size: '6,779 km in diameter',
                distance: '200 mil',
                atmosphere: 'For years Mars has been known to have water in the form of ice. The first signs of trickling water are dark stripes or stains on crater wall and cliffs seen in satellite images. Due to Mars’ atmosphere this water would have to be salty to prevent it from freezing or vaporising.',
                orbit: '1.9 years to orbit the Sun',
                imgSrc: mars
              }
            },
            {
              name: 'Saturn',
              attributes: {
                size: '116,464 km in diameter',
                distance: '1,426,666,422 km (9.58 AU) from the Sun',
                atmosphere: 'Saturn’s atmosphere is composed primarily of hydrogen (96%) and helium (3%) with traces of other substances like methane, ammonia, acetylene, ethane, propane and phosphine. Winds in the upper atmosphere can reach speeds of 500 metres a second, these combined with heat rising from within the planet’s interior cause yellow and gold bands.',
                orbit: '29.5 years to orbit the Sun',
                imgSrc: saturn
              }
            },
            {
              name: 'Neptune',
              attributes: {
                size: '49,244 km in diameter',
                distance: '4,498,396,441 km (30.10 AU) from the Sun',
                atmosphere: 'The atmosphere of Neptune is made of hydrogen and helium, with some methane. The methane absorbs red light, which makes the planet appear a lovely blue. High, thin clouds drift in the upper atmosphere.',
                orbit: '164.8 years to orbit the Sun',
                imgSrc: neptune
              }
            },
            {
              name: 'Sun'
            },
            {
              name: 'Title'
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
            'planet-fly': this.state.selectedPlanet.name!==planetName && this.state.selectedPlanet.name !== undefined && this.state.selectedPlanet.name !== planets[8].name,
            'planet-selected': this.state.selectedPlanet.name===planetName,
            'planet-return': this.state.selectedPlanet.name===planets[8].name
          })
      }
    return (
      <div className="Home">

        <div className="container">
                <div className="stars-bg-xs"></div>
                <div className="stars-bg-md"></div>
                <div className="stars-bg-lg"></div>
                <div className="row">

                  <div className="columns medium-3 medium-pull-1 ship bounce">

                      <img onClick={() => {this.selectedPlanet(planets[8])}} src={spaceflame}/>

                  </div>
                  <div className="columns medium-8 medium-pull-3">
                    <h1 className={planetStyle(planets[9].name)}>Lets Explore Space</h1>
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
                this.state.planetOpen && this.state.selectedPlanet.name !== planets[8].name &&
                  <Planet planet={this.state.selectedPlanet} />
              }
      </div>
    );
  }
}

export default Home;
