import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../components/Card";
import { Typography } from "@material-ui/core";

class Home extends Component {
  state = {};
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          <Typography variant="h1">Home</Typography>
          <Card></Card>
        </Grid>
        <Grid item sm={4}></Grid>
      </Grid>
    );
  }
}

export default Home;
