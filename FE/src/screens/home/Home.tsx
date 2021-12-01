import React from "react";
import ShowAtms from "../../components/actions/showAtm/ShowAtms";
import { Helmet } from "react-helmet";
import { Container, Grid, Typography, Box } from "@mui/material";
import CreateAtmBtn from "../../components/actions/createElement/createAtm/CreateAtm";
import AddQueueBtn from "../../components/actions/createElement/addQueue/AddQueue";
import Logout from "../../components/actions/users/Logout";
import "./home.scss";
import ListQueue from "../../components/actions/ShowQueue/ListQueue";

const Home: React.FC = () => {
  return (
    <Container fixed className="home_page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Grid container spacing={2} className="main_func">
        <Grid item xs className="add_func">
          <div className="btn_add">
            <CreateAtmBtn />
          </div>
          <AddQueueBtn />
        </Grid>
        <Grid item xs className="logout_func">
          <Logout/>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h5" gutterBottom component="div">
            List ATM
          </Typography>
          <Box sx={{ overflow: "auto", maxHeight: "80vh" }}>
            <ShowAtms/>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" gutterBottom component="div">
            Queue
          </Typography>
          <Box sx={{ overflow: "auto", maxHeight: "80vh" }}>
            <ListQueue/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
