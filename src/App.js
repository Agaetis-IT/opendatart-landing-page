import React from "react";
import Hero from "./Hero";
import WhatIsIt from "./WhatIsIt";
import Why from "./Why";
import Statistics from "./Statistics";
import Footer from "./Footer";
import Contact from "./Contact";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  "@global": {
    html: {
      scrollBehavior: "smooth"
    }
  }
}));

function App() {
  useStyles();
  return (
    <>
      <Hero />
      <WhatIsIt />
      <Why />
      <Statistics />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
