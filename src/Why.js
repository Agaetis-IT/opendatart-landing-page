import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: theme.palette.grey[300]
  },
  title: { marginBottom: 32 }
}));

function Why() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography className={classes.title} variant="h3">
          Changer le regard sur la donnée
        </Typography>
        <Typography>
          Dans un monde où l'on récolte et produit de plus en plus de données.
          Dolore est tempor laboris tempor irure laboris commodo minim fugiat
          in. Cupidatat consectetur enim magna tempor consectetur consectetur ex
          nulla dolore sit. Excepteur eu commodo eu tempor enim fugiat officia
          cupidatat cillum. Incididunt irure dolor velit aliqua sint anim est
          cillum exercitation deserunt elit. Amet velit incididunt et
          adipisicing ut laboris ullamco adipisicing Lorem fugiat. Deserunt sunt
          duis magna enim deserunt dolor do laboris ipsum occaecat. Labore ut
          qui occaecat ut. Pariatur ut quis sit qui ullamco nostrud.
        </Typography>
      </Container>
    </div>
  );
}

export default Why;
