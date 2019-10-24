import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    marginBottom: 100
  },
  title: { marginBottom: 32 }
}));

function WhatIsIt() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <Typography className={classes.title} variant="h3">
        OpenDatart, c'est quoi ?
      </Typography>
      <Typography>
        Dans un monde où l'on récolte et produit de plus en plus de données.
        Dolore est tempor laboris tempor irure laboris commodo minim fugiat in.
        Cupidatat consectetur enim magna tempor consectetur consectetur ex nulla
        dolore sit. Excepteur eu commodo eu tempor enim fugiat officia cupidatat
        cillum. Incididunt irure dolor velit aliqua sint anim est cillum
        exercitation deserunt elit. Amet velit incididunt et adipisicing ut
        laboris ullamco adipisicing Lorem fugiat. Deserunt sunt duis magna enim
        deserunt dolor do laboris ipsum occaecat. Labore ut qui occaecat ut.
        Pariatur ut quis sit qui ullamco nostrud.
      </Typography>
    </Container>
  );
}

export default WhatIsIt;
