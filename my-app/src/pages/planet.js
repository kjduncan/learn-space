import React, { Component } from 'react';
import Modal from './modal.js'


class Planet extends Component {

  constructor(props) {
      super(props);
      this.state = {
        planetShowing: false,
        meta: ''
      }
    }

    componentDidMount() {
      window.requestAnimationFrame(() => {
        this.setState({
          planetShowing: true
        });
      });
    }

    closePlanet = () => {
      this.setState({
        planetShowing: false
      },
      () => {
        setTimeout(() => {
          this.props.planetClose({});
        }, 200);
      }
      );
    }

    state = { show: false };

    showModal = (data) => {
      console.log(data);
      this.setState({
        show: true,
        meta: data
      });
    };

    hideModal = () => {
      this.setState({ show: false });
    };

  render() {
    console.log(this.props)
    return (
      <div className="mother">
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p className="planetName">{this.props.planet.name}</p>
          <p>
          {this.state.meta}
          </p>
        </Modal>

        <div className={`Planet ${this.state.planetShowing ? 'show' : 'hidden'}`}>
          <div className="row">
            <ul className="planet-info columns medium-8 medium-push-10">
              <li><button type="button" onClick={this.showModal.bind(this, this.props.planet.attributes.size)}>Size</button></li>
              <li><button type="button" onClick={this.showModal.bind(this, this.props.planet.attributes.distance)}>Distance</button></li>
              <li><button type="button" onClick={this.showModal.bind(this, this.props.planet.attributes.atmosphere)}>Atmosphere</button></li>
              <li><button type="button" onClick={this.showModal.bind(this, this.props.planet.attributes.orbit)}>Orbit</button></li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Planet;
