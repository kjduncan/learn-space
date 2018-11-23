import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import Modal from './modal.js'


class Planet extends Component {

  constructor(props) {
      super(props);
      this.state = {planetShowing: false}
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

    showModal = () => {
      this.setState({ show: true });
    };

    hideModal = () => {
      this.setState({ show: false });
    };

  render() {
    return (
      <div className="mother">
      <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>

        <div className={`Planet ${this.state.planetShowing ? 'show' : 'hidden'}`}>
          <div className="row">
            <ul className="planet-info columns medium-8 medium-push-4">
              <li><button type="button" onClick={this.showModal}>Something</button></li>
              <li><button type="button" onClick={this.showModal}>Something</button></li>
              <li><button type="button" onClick={this.showModal}>Something</button></li>
              <li><button type="button" onClick={this.showModal}>Something</button></li>
              <li><button type="button" onClick={this.showModal}>Something</button></li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Planet;
// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<Planet />, container);
