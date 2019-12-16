import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: theme.palette.grey[300]
  },
  title: { marginBottom: 32 }
}));

function WhatWeCanDo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3">
          Qu'est-ce que nous proposons concrètement ?
        </Typography>
        <Typography>
          Actuellement OpenDatart est un projet, nous cherchons à savoir si le concept est intéressant pour le grand public.
          {' '}<b>Nous proposons de mettre en forme ces données sur des posters, t-shirts ou tableaux encadrés, pour un prix allant de 10 à 25€ environ.</b> Il est aussi envisageable de le faire sur des supports plus originaux comme des mugs ou des casquettes. Si vous êtes intéressé vous pouvez entrer votre addresse e-mail un peu plus bas sur cette page.<br/><br/>
          Pour l'instant nous disposons des trajets de Taxis à New York et Porto : un dégradé indique où il y a plus d'activité qu'ailleurs, dessinant les rues de la ville tout en couleurs ! 
          Vous pouvez voir le rendu dans la galerie ci-dessous. 
          <br/><br/>
          Pour la suite nous comptons créer une panoplie d'autres posters, comme des cartes d'impacts de foudre, l'activité volcanique sur terre ou les émissions de CO2 dans une ville par exemple, le tout avec une couleur configurable et personnalisée selon vos souhaits ; ou encore de représenter certaines données en 3D avec des colonnes de hauteur différente, créant de faux gratte-ciels en centre-ville !
        </Typography>
      </Container>
    </div>
  );
}

export default WhatWeCanDo;
