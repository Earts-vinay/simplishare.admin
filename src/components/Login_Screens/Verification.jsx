import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Checkbox,
  Typography,
  Link,
  FormControlLabel,
  Container,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from "@mui/icons-material/Facebook";
import { FaLinkedinIn } from "react-icons/fa6";
import colors from "../../utils/colors";
import fontFamily from "../../utils/fonts";
import CustomTextField from "../Custom/CustomTextField";
import CustomButton from "../Custom/CustomButton";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate("/");
  }
  const handlehome = () => {
    navigate("/home");
  }
  return (
    <Container sx={{ pt: 10 }}>
      <Grid container sx={{ backgroundColor: colors.white, borderRadius: "10px", height: 'calc(100vh - 160px)',  }}>
        {/* Left Side - Image and Logo */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3 }}>
            <img src="/assets/logos/simpleshare_logo.svg" alt="" width={120} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: 2,height:"75%" }}><img src="/assets/logos/simplisharelogin.jpeg" alt="Illustration" width="75%" height="auto" /></Box>
        </Grid>

        {/* Right Side - Login Form */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 8,
          }}
        >
          <Typography mb={2} sx={{ fontFamily, fontWeight: "bold", fontSize: "28px" }}>
            Email Verification
          </Typography>

          {/* Social Login Icons */}
          <Box display="flex" gap={2} my={2}>
            <Typography varient="p" sx={{fontFamily}}>Please enter 8 - digit verification code that was sent to 
            abc@xyz.com. The code is valid for 5mins.</Typography>
          </Box>

          {/* Input Fields */}
          <Box sx={{display:"flex",justifyContent:"start",flexDirection:"column",width:"100%",fontFamily}}>
          <Typography sx={{display:"flex",justifyContent:"",fontFamily}}>Enter Verification Code</Typography>
          <CustomTextField placeholder="Enter your email" required/>
          </Box>
          
         

          {/* Forgot Password */}
          <Link href="#" sx={{ alignSelf: "flex-end", mb: 2 }}>
            <Typography sx={{ fontFamily }}> Didn't receive the code?</Typography>
          </Link>

          {/* Terms Checkbox */}
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="p" sx={{ fontFamily,pt:2 }}>
                I have read and agree to simpleShare Terms of Service and Privacy Policy.
              </Typography>
            }
          />

          {/* Sign Up & Next Button */}
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" pt={9}>
             <Typography sx={{ fontFamily,display:"flex",gap:"10px" }}>Already Registered. <Link href="#"><Typography sx={{ fontFamily }} onClick={handlelogin}> Login</Typography></Link></Typography> 
            <CustomButton onClick={handlehome}>Submit</CustomButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Verification;
