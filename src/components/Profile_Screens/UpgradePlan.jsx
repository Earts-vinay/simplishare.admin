import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import colors from "../../utils/colors";
import fontFamily from "../../utils/fonts";
import CustomButton from "../Custom/CustomButton";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    title: "Free",
    price: "₹0.00",
    details: "( 60 Days ) 30 days left",
    description: "Lorem Ipsum is the simply dummy text",
    buttonLabel: "Upgrade now",
    users: "1 user",
    security: "Basic",
    storage: "2 GB file storage",
    contributors: "No",
    admin: "1 Admin",
  },
  {
    title: "Standard",
    price: "₹39,990",
    details: "( Paid Yearly )",
    description: "Lorem Ipsum is the simply dummy text",
    buttonLabel: "Upgrade now",
    users: "10 users",
    security: "Advanced",
    storage: "100 GB file storage",
    contributors: "Yes",
    admin: "3 Admin",
  },
  {
    title: "Premium",
    price: "₹99,900",
    details: "( Paid Yearly )",
    description: "Lorem Ipsum is the simply dummy text",
    buttonLabel: "Upgrade now",
    users: "25 users",
    security: "Premium",
    storage: "1 TB file storage",
    contributors: "Yes",
    admin: "7 Admin",
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    details: "( Paid Yearly )",
    description: "Lorem Ipsum is the simply dummy text",
    buttonLabel: "Upgrade now",
    users: "25+ users",
    security: "Premium",
    storage: "1 TB file storage",
    contributors: "Yes",
    admin: "10+ Admin",
  },
];



const UpgradePlan = () => {
      const navigate = useNavigate();
      const handleUpgrade = () => {
        navigate("/profile/Upgrade/confirm");
      }
  return (
    <Container sx={{ flexGrow: 1, paddingTop: 10 }}>
      <Typography sx={{ fontFamily }}>User Profile / Upgrade Plan</Typography>

      {/* Main Content Box */}
      <Box sx={{backgroundColor: "white", mt: 2, px: 2.5, pt: 1.5, borderRadius: 2, pb: 3,  }} >
        <Typography sx={{ fontFamily, fontWeight: "bold", fontSize: "24px" }}>
          Subscription Plans
        </Typography>
        <Typography sx={{ fontFamily, color: colors.semigray, mb: 3 }}>
          Select a plan to upgrade
        </Typography>
   
        <Typography variant="h4" sx={{ fontFamily, fontWeight: "bold",my:2 }}>
          Set up your site, pick a plan later
        </Typography>
        <Typography sx={{ fontFamily, color: colors.semigray, mb: 3 }}>
          Choose the plan that's right for your business. <br/>Weather you're just getting started with email marketing
        </Typography>
        {/* Plans Section */}
        <Grid container spacing={3}>
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  textAlign: "center",
                  padding: "16px",
                  boxShadow: "none",
                  backgroundColor: "white",
                }}
              >
                <Typography sx={{ fontFamily, fontWeight: "bold" }}>
                  {plan.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily,
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: colors.primary,
                  }}
                >
                  {plan.price}
                </Typography>
                <Typography sx={{ fontFamily, color: colors.semigray }}>
                  {plan.details}
                </Typography>
                <Typography sx={{ fontFamily, mt: 1 }}>
                  {plan.description}
                </Typography>
              <Box sx={{pt:2}}>
              <CustomButton onClick={handleUpgrade}> {plan.buttonLabel}</CustomButton>
              </Box>
                
                <Box
                  sx={{
                    mt: 3,
                    backgroundColor: "#f7ede4",
                    borderRadius: "8px",
                    padding: "12px",
                    textAlign: "left",
                    fontSize: "14px",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>Core</Typography>
                  <Typography>{plan.users}</Typography>
                  <Typography>{plan.security}</Typography>
                  <Typography>{plan.storage}</Typography>
                  <Typography>{plan.contributors}</Typography>
                  <Typography>{plan.admin}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default UpgradePlan;
