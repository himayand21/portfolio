import React, { useState, Fragment, useEffect } from "react";
import "./App.css";
import "./responsive.css";
import { Home, NavBar } from "./components";

const App = () => {
  const [navShow, setNavShow] = useState(false);
  const toggleState = () => setNavShow(!navShow);
  useEffect(() => {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });
        if (lazyloadImages.length === 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }, []);

  return (
    <Fragment>
      <NavBar navShow={navShow} toggleState={toggleState} />
      <div
        onClick={() => (navShow ? setNavShow(false) : null)}
        className="sections-container"
      >
        <Home />
      </div>
    </Fragment>
  );
};

export default App;
