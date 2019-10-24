import React from "react";
import { makeStyles, Typography, IconButton } from "@material-ui/core";
import heroImg from "./images/hero.jpg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${heroImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  arrowContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    bottom: 0,
    left: 0,
    right: 0
  },
  arrowButton: { animation: "750ms ease-in infinite reverse $bounce" },
  arrow: {
    fontSize: "6rem",
    color: theme.palette.common.white
  },
  "@keyframes bounce": {
    from: { transform: "translateY(0)" },
    "50%": { transform: "translateY(-20px)" },
    to: { transform: "translateY(0)" }
  }
}));

function Hero() {
  const classes = useStyles();

  function onArrowClicked() {
    window.window.scrollTo({ top: window.innerHeight });
  }

  return (
    <div className={classes.root}>
      <Typography variant="h1">OpenDatart</Typography>
      <Typography variant="h2">Extraire l'art des données</Typography>
      <div className={classes.arrowContainer}>
        <IconButton
          onClick={onArrowClicked}
          size="small"
          className={classes.arrowButton}
        >
          <KeyboardArrowDownIcon className={classes.arrow} />
        </IconButton>
      </div>
    </div>
  );
}

export default Hero;
