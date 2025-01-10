import React from "react";
import { Box, Grid, Paper, Typography, IconButton, InputBase, Container } from "@mui/material";
import colors from "../utils/colors";
import Target from "../components/Home_Screens/Target";
import DailySales from "../components/Home_Screens/DailySales";
import Instagram from "../components/Home_Screens/Instagram";

const Home = () => {
  return (
    
      <Container maxWidth="xl" sx={{ flexGrow: 1, pt: 10 }}>
        {/* Search Box */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
          <Box
            sx={{
              backgroundColor: colors.white,
              borderRadius: "10px",
              width: "300px",
              paddingX: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton color="inherit">
              <img src="/assets/icons/simpleshare_icon.svg" alt="" style={{ width: "15px" }} />
            </IconButton>
            <InputBase
              placeholder="What is there in your mind?"
              inputProps={{ "aria-label": "search" }}
              sx={{ flex: 1 }}
            />
          </Box>
        </Box>

        {/* Grid Layout */}
        <Grid container spacing={0} sx={{ display: "flex", justifyContent: "center" }}>
          {/* Target Stats Card */}
          <Target />

          {/* Daily Sales */}
          <DailySales />

          {/* Instagram Trending */}
          <Instagram />
        </Grid>
      </Container>
    
  );
};

export default Home;
