import React from "react";
import { makeStyles, Container, Typography, Link } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.common.white
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography align="center" gutterBottom>
          Fait avec{" "}
          <span role="img" aria-label="amour">
            ❤️
          </span>{" "}
          par une équipe de passionées de données à{" "}
          <Link href="https://www.agaetis.fr">Agaetis</Link>.
        </Typography>
        <Typography align="center">
          <Link color="inherit" href="https://www.instagram.com/opendatart/">
            <InstagramIcon fontSize="large" />
          </Link>
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
