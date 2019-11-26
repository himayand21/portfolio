import React, { useState, Fragment } from "react";
import "./App.css";
import "./responsive.css";
import { Home, NavBar } from "./components";

const App = () => {
  const [navShow, setNavShow] = useState(false);
  const toggleState = () => setNavShow(!navShow);
    return (
      <Fragment>
        <NavBar
          navShow={navShow}
          toggleState={toggleState}
        />
        <div
          onClick={() => navShow ? setNavShow(false) : null}
          className="sections-container"
        >
          <Home />
        </div>
      </Fragment>
    );
}

export default App;
