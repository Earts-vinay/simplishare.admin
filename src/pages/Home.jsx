import React from "react";
import { Box, IconButton, InputBase, Container } from "@mui/material";
import colors from "../utils/colors";
import Target from "../components/Home_Screens/Target";
import DailySales from "../components/Home_Screens/DailySales";
import Instagram from "../components/Home_Screens/Instagram";
import fontFamily from "../utils/fonts";
import DateRangePicker from "../components/Home_Screens/DateRangePicker";

const Home = () => {
  return (

    <Container maxWidth="xl" sx={{ flexGrow: 1, pt: 10,width:"1250px"}}>
      {/* Search Box */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
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
            sx={{ flex: 1, fontFamily }}
          />
        </Box>
      </Box>

      <Box sx={{ mb: 1 }}>
        <DateRangePicker />
      </Box>

      <Box sx={{ display: "flex",backgroundColor:colors.white,height:"calc(100vh - 200px)",borderRadius:"10px" }}>
        {/* Target Stats Card */}
        <Target />

        {/* Daily Sales */}
        <DailySales />

        {/* Instagram Trending */}
        <Instagram />
      </Box>
    </Container>

  );
};

export default Home;
