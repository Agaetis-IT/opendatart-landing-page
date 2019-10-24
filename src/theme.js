import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: "#FFFDF3",
    primary: {
      main: "#fdd446"
    },
    grey: {
      "300": "#BCD0D5",
      "700": "#315768"
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontFamily: "'Indie Flower', cursive",
      fontSize: "4rem",
      textAlign: "right"
    },
    h2: {
      fontFamily: "'Indie Flower', cursive",
      fontSize: "2rem",
      textAlign: "right"
    },
    h3: {
      fontSize: "2.3rem",
      fontWeight: "700"
    },
    body1: {
      textAlign: "justify"
    }
  }
});

export default theme;
