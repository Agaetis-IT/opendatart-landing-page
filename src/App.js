import React from "react";
import Hero from "./Hero";
import WhatIsIt from "./WhatIsIt";
import WhatWeCanDo from "./WhatWeCanDo";
import Statistics from "./Statistics";
import Footer from "./Footer";
import Contact from "./Contact";
import { makeStyles } from "@material-ui/core";
import Gallery from "./Gallery";

const useStyles = makeStyles(theme => ({
  "@global": {
    html: {
      scrollBehavior: "smooth"
    },
    body: {
      color: 'black'
    }
  }
}));

function App() {
  useStyles();
  return (
    <>
      <Hero />
      <WhatIsIt />
      <WhatWeCanDo />
      <Statistics />
      <Contact />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
