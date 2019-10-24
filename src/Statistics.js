import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Box
} from "@material-ui/core";
import StorageIcon from "@material-ui/icons/Storage";
import RoomIcon from "@material-ui/icons/Room";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    marginBottom: 100
  },
  title: { marginBottom: 32 },
  icon: {
    fontSize: "4rem",
    color: theme.palette.grey[700],
    marginBottom: 16
  },
  value: {
    fontWeight: "700",
    fontSize: "3rem"
  },
  unit: {
    fontWeight: "300"
  },
  label: {
    fontWeight: "500"
  }
}));

function Statistics() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <Typography className={classes.title} variant="h3">
        L'image de New-York c'est
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <RoomIcon className={classes.icon} />
            <Typography className={classes.value}>
              1.4{" "}
              <Typography className={classes.unit} component="span">
                Md
              </Typography>
            </Typography>
            <Typography className={classes.label}>de points</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <StorageIcon className={classes.icon} />
            <Typography className={classes.value}>
              8{" "}
              <Typography className={classes.unit} component="span">
                Mo
              </Typography>
            </Typography>
            <Typography className={classes.label}>de pixels générés</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <QueryBuilderIcon className={classes.icon} />
            <Typography className={classes.value}>
              3.5{" "}
              <Typography className={classes.unit} component="span">
                ans
              </Typography>
            </Typography>
            <Typography className={classes.label}>de données</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Statistics;
