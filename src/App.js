import React from "react";
import Hero from "./Hero";
import WhatIsIt from "./WhatIsIt";
import WhatWeCanDo from "./WhatWeCanDo";
import Statistics from "./Statistics";
import Footer from "./Footer";
import Contact from "./Contact";
import { makeStyles } from "@material-ui/core";

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
      <Footer />
    </>
  );
}

export default App;
