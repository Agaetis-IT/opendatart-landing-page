import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    marginBottom: 50
  },
  title: { marginBottom: 32 }
}));

function WhatIsIt() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography className={classes.title} variant="h3">
        OpenDatart, c'est quoi ?
      </Typography>
      <Typography>
        <b>OpenDatart met en forme des données publiques de manière artistique !</b><br/><br/>
        Dans un monde où l'on récolte et produit de plus en plus de données il est difficile de les appréhender, de se les représenter,
        pour la simple raison qu'il n'existe pas vraiment de moyen de les rendre plus visuelles.<br/><br/>
        C'est un gâchis de potentiel car chaque donnée possède son sens propre, qu'il soit pratique, engagé ou simplement informatif... En effet, les données en général sont souvent utiles pour mieux comprendre le monde qui nous entoure.<br/><br/>
        Cependant grâce à OpenDatart elles peuvent maintenant être agréables à regarder ! Nous convertissons de grands ensembles de données puis nous les représentons sous forme graphique, aidant à leur compréhension. Le principe est de ne pas perdre le sens ou le message originel tout en le rendant attrayant, en l'enrichissant.
      </Typography>
    </Container>
  );
}

export default WhatIsIt;
