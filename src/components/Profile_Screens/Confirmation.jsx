import { Box, Button, Container, Typography, TextField } from '@mui/material';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import fontFamily from '../../utils/fonts';
import colors from '../../utils/colors';
import CustomButton from '../Custom/CustomButton';
import CustomTextField from '../Custom/CustomTextField';

const Confirmation = () => {
  return (
    <Container sx={{ flexGrow: 1, paddingTop: 10 }}>
     <Typography sx={{ fontFamily }}>User Profile / Upgrade Plan</Typography>

      {/* Main Content Box */}
      <Box sx={{ backgroundColor: "white", mt: 2, px: 2.5, pt: 1.5, borderRadius: 2, pb: 3 }}>
      <Typography sx={{ fontFamily, fontWeight: "bold", fontSize:"18px"}}>
          Subscription Confirmation
        </Typography>
        <Typography sx={{ fontFamily, color: colors.semigray, mb: 2 }}>
          Select a plan to upgrade
        </Typography>
      
        <Box sx={{ backgroundColor: colors.maroon, color: "white", p: 2, borderRadius: 2, display: "flex", justifyContent: "space-between", alignItems: "center", }}>
          <Typography sx={{ fontFamily, fontWeight: "bold" }}>Standard Plan</Typography>
          <Typography sx={{ fontFamily, fontSize: "14px" }}>Valid for 365 days</Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CheckCircleIcon sx={{ color: "green" }} />
            <Typography sx={{ fontFamily, color: colors.semigray, fontSize: "14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <CheckCircleIcon sx={{ color: "green" }} />
            <Typography sx={{ fontFamily, color: colors.semigray, fontSize: "14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography sx={{ fontFamily, fontWeight: "bold",mt:1 }}>Merchant Name</Typography>
           <CustomTextField placeholder="Enter Your Name"/>
          <Typography sx={{ fontFamily, fontWeight: "bold",mt:1 }}>Contact email address</Typography>
          <CustomTextField placeholder="dummy@gmail.com"/>

          <Typography sx={{ fontFamily, fontWeight: "bold",mt:1 }}>Plan</Typography>
          <CustomTextField placeholder="Standard - Upto 10 Users"/>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3 }}>
          <Box sx={{display:"flex",gap:"20px"}}>
          <Typography sx={{ fontFamily, fontWeight: "bold", fontSize: "18px" }}>Plan Amount</Typography>
          <Typography sx={{ fontFamily, fontWeight: "bold", fontSize: "20px", color: colors.darkred }}>
            ₹39,990
          </Typography>
          </Box>
         
        <CustomButton width='200px'> Select payment method</CustomButton>
        </Box>

      </Box>
    </Container>
  );
};

export default Confirmation;
