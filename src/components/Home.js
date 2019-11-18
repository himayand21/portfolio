import React from "react";
import { Intro, NavBar, About } from "./sections";

class Home extends React.Component {
  state = {
    navShow: false
  }
  toggleState = () => this.setState({navShow: !this.state.navShow})
  render() {
  return (
    <React.Fragment>
      <NavBar navShow={this.state.navShow} toggleState={this.toggleState}/>
      <span onClick={() => this.state.navShow ? this.setState({navShow: false}) : null}>
      <Intro />
      <About />
      <div id="projects" class="container-fluid">
        <h1>Section 1</h1>
        <p>
          Try to scroll this section and look at the navigation bar while
          scrolling! Try to scroll this section and look at the navigation bar
          while scrolling!
        </p>
        <p>
          Try to scroll this section and look at the navigation bar while
          scrolling! Try to scroll this section and look at the navigation bar
          while scrolling!
        </p>
      </div>
      <div id="contact" class="container-fluid">
        <h1>Section 3</h1>
        <p>
          Try to scroll this section and look at the navigation bar while
          scrolling! Try to scroll this section and look at the navigation bar
          while scrolling!
        </p>
        <p>
          Try to scroll this section and look at the navigation bar while
          scrolling! Try to scroll this section and look at the navigation bar
          while scrolling!
        </p>
      </div>
      </span>
    </React.Fragment>
  );
  }
};

export default Home;
