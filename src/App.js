import React, { Component, Fragment } from "react";
import "./App.css";
import { Home, NavBar } from "./components";

class App extends Component {
  state = {
    navShow: false
  };
  toggleState = () => this.setState({ navShow: !this.state.navShow });
  render() {
    return (
      <Fragment>
        <NavBar navShow={this.state.navShow} toggleState={this.toggleState} />
        <div
          onClick={() =>
            this.state.navShow ? this.setState({ navShow: false }) : null
          }
          className="sections-container"
        >
          <Home />
        </div>
      </Fragment>
    );
  }
}

export default App;
