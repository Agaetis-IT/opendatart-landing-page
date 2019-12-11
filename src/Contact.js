import React, { useState, useRef } from "react";
import {
  makeStyles,
  Container,
  TextField,
  Button,
  Typography,
  Box
} from "@material-ui/core";
import { confetti } from "dom-confetti";
import cuteImg from "./images/cute.png";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: theme.palette.grey[300]
  },
  input: {
    width: 300
  },
  cutePopup: {
    position: "fixed",
    height: 300,
    bottom: -300,
    right: 0,
    transform: "translateY(-0)",
    transition: "transform 1s ease-out"
  },
  cutePopupActive: {
    transform: "translateY(-230px)"
  }
}));

function Contact() {
  const classes = useStyles();
  const buttonRef = useRef();
  const [email, setEmail] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [isCutePopupActive, setCutePopupActive] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  function handleSubmit(e) {
    confetti(buttonRef.current);
    setFormSent(true);
    setCutePopupActive(true);
    setTimeout(() => {
      setCutePopupActive(false);
    }, 2000);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", email: email })
    })

    e.preventDefault();
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Container maxWidth="md">
        <Typography variant="h3">Vous êtes intéressé ?</Typography>
        <br/>
        <Typography>
          Donnez nous votre email et nous vous préviendrons quand les premiers éléments seront disponibles et à prix réduit !
        </Typography>
        <Box mt={4} display="flex" flexDirection="row" alignItems="center">
          <TextField
            className={classes.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
            label="Email"
            margin="dense"
            disabled={formSent}
            required
          />
          <Box ml={1}>
            <Button
              ref={buttonRef}
              type="submit"
              variant="contained"
              color="primary"
              disabled={formSent}
            >
              Envoyer
            </Button>
          </Box>
        </Box>
      </Container>
      <img
        className={clsx(classes.cutePopup, {
          [classes.cutePopupActive]: isCutePopupActive
        })}
        src={cuteImg}
        alt="cute animal"
      />
    </form>
  );
}

export default Contact;
