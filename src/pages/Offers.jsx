import React, { useState } from "react";
import { Box, Tabs, Tab, Container, Typography, Grid } from "@mui/material";
import DaysOffers from "../components/Offers_Screens/DayOffers";
import OffersByValley from "../components/Offers_Screens/OffersByValley";
import Bogo from "../components/Offers_Screens/Bogo";
import fontFamily from "../utils/fonts";
import CustomButton from "../components/Custom/CustomButton";
import colors from "../utils/colors";

const Offers = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container sx={{ flexGrow: 1, paddingTop: 10 }}>
      <Typography sx={{ fontFamily }}>Offers /</Typography>

      {/* Main Content Box */}
      <Box sx={{ backgroundColor: 'white', mt: 2, px: 2, pt: 1.5, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontFamily }}>All Offers</Typography>
          <CustomButton>Add Offers</CustomButton>
        </Box>

        {/* Goal Selection */}
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Box sx={{ padding: 3 }}>
            <Tabs
              value={tabValue}
              onChange={(_, newValue) => setTabValue(newValue)}
              textColor="primary"
              centered
              sx={{
                '.MuiTabs-flexContainer': {
                  backgroundColor: '#fff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderRadius: '5px',
                  boxShadow: '0 0 5px 0 rgba(36, 101, 233, 0.5)',
                  fontWeight: 'bold',
                  border: `1px solid ${colors.red}`,
                },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 'bold',
                },
                '& .Mui-selected': {
                  backgroundColor: colors.red,
                  color: 'white !important',
                  borderRadius: '5px',
                },
              }}
            >
              <Tab label="Days Offers" />
              <Tab label="Offers by Valley" />
              <Tab label="BOGO" />
            </Tabs>

            {tabValue === 0 && <DaysOffers />}
            {tabValue === 1 && <OffersByValley />}
            {tabValue === 2 && <Bogo />}
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default Offers;
