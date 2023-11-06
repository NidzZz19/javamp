import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Grid container spacing={2} className="px-5 lg:px-36 justify-between">
        <Grid item xs={3} lg={2.5}>
          <Navigation />
        </Grid>

        <Grid item xs={6} lg={6}>
          <p className="text-center">middle part</p>
        </Grid>

        <Grid item xs={3} lg={3}>
          <p className="text-center">right part</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
