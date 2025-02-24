import React, { useState } from "react";
import { Box, Tabs, Tab, Container, Typography } from "@mui/material";
import DaysOffers from "../components/Offers_Screens/DayOffers";
import OffersByValley from "../components/Offers_Screens/OffersByValley";
import Bogo from "../components/Offers_Screens/Bogo";
import fontFamily from "../utils/fonts";
import CustomButton from "../components/Custom/CustomButton";
import colors from "../utils/colors";
import { useNavigate } from "react-router-dom";

const TabPanel = ({ value, index, children }) => (
  <Box hidden={value !== index} sx={{ width: "100%", mt: 2 }}>
    {value === index && <Box pt={1}>{children}</Box>}
  </Box>
);

const Offers = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handlenav = () => {
    navigate("/offers/addoffers");
  }

  return (
    <Container sx={{ flexGrow: 1, paddingTop: 10, }}>
      <Typography sx={{ fontFamily }}>Offers /</Typography>

      {/* Main Content Box */}
      <Box sx={{ backgroundColor: "white", mt: 2, px: 2.5, pt: 1.5, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontFamily }}>All Offers</Typography>
          <CustomButton onClick={handlenav}>Add Offers</CustomButton>
        </Box>

        {/* Goal Selection */}
        <Box sx={{ paddingTop: "10px" }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            sx={{
              borderBottom: "none",
              minHeight: "40px !important",
              height: "40px",
              ".MuiTabs-flexContainer": {
                backgroundColor: colors.white,
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "5px",
                fontFamily,
              
                fontWeight: "bold",
              },
            }}
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            {["Days Offers", "Offers by Valley", "BOGO"].map((label, index) => (
              <Tab
                key={index}
                label={label}
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: selectedTab === index ? colors.red : "transparent",
                  color: selectedTab === index ? "white !important" : "inherit",
                  width: { xs: "100%", sm: "30%" },
                  minHeight: "40px",
                  height: "40px",
                  borderRadius: "5px",
                  fontFamily,
                }}
              />
            ))}
          </Tabs>

          <Box  sx={{ padding: "0px !important",  height: "calc(100vh - 260px)" }}>
            <TabPanel value={selectedTab} index={0}>
             <DaysOffers />
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              <OffersByValley />
            </TabPanel>
            <TabPanel value={selectedTab} index={2}>
              <Bogo />
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Offers;
