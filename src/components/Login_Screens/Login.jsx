import React from "react";
import { Box, Grid, Typography, Link, FormControlLabel, Checkbox, Container } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from "@mui/icons-material/Facebook";
import { FaLinkedinIn } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import colors from "../../utils/colors";
import fontFamily from "../../utils/fonts";
import CustomTextField from "../Custom/CustomTextField";
import CustomButton from "../Custom/CustomButton";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Google Authentication
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google Token Response:", tokenResponse);

      dispatch(loginUser(tokenResponse))
        .unwrap()
        .then(() => navigate("/home"))
        .catch((error) => console.error("Login Failed:", error));
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  const handlesignup = () => navigate("/signup");
  const handlehome = () => navigate("/home");


  return (
    <Container sx={{ pt: 10 }}>
      <Grid container sx={{ backgroundColor: colors.white, borderRadius: "10px", height: 'calc(100vh - 160px)' }}>
        {/* Left Side - Image and Logo */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3 }}>
            <img src="/assets/logos/simpleshare_logo.svg" alt="" width={120} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: 2, height: "75%" }}>
            <img src="/assets/logos/simplisharelogin.jpeg" alt="Illustration" width="75%" height="auto" />
          </Box>
        </Grid>

        {/* Right Side - Login Form */}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", px: 8 }}>
          <Typography mb={2} sx={{ fontFamily, fontWeight: "bold", fontSize: "28px" }}>Login</Typography>

          {/* Social Login Icons */}
          <Box display="flex" gap={2} my={2}>
            <GoogleIcon fontSize="large" 
              sx={{ color: "#bbb", border: `1px solid ${colors.semigray}`, p: 0.5, borderRadius: "10px", cursor: "pointer" }} 
              onClick={loginWithGoogle} 
            />
            <FacebookIcon fontSize="large" sx={{ color: "#bbb", border: `1px solid ${colors.semigray}`, p: 0.5, borderRadius: "10px", cursor: "pointer" }} />
            <InstagramIcon fontSize="large" sx={{ color: "#bbb", border: `1px solid ${colors.semigray}`, p: 0.5, borderRadius: "10px", cursor: "pointer" }} />
            <FaLinkedinIn fontSize={26} style={{ color: "#bbb", border: `1px solid ${colors.semigray}`, padding: "8px", borderRadius: "10px", cursor: "pointer" }} />
          </Box>

          <Typography mb={2} sx={{ fontFamily, color: colors.darkgray }}>or use below</Typography>

          {/* Input Fields */}
          <CustomTextField label="Enter your email Id" required />
          <CustomTextField type="password" label="Enter password" required />

          {/* Forgot Password */}
          <Link href="#" sx={{ alignSelf: "flex-end", mb: 2 }}>
            <Typography sx={{ fontFamily }}> Forgot password?</Typography>
          </Link>

          {/* Terms Checkbox */}
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="p" sx={{ fontFamily, pt: 3 }}>I have read and agree to simpleShare Terms of Service and Privacy Policy.</Typography>}
          />

          {/* Sign Up & Next Button */}
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" pt={9}>
            <Link href="#"><Typography sx={{ fontFamily }} onClick={handlesignup}>Sign up</Typography></Link>
            <CustomButton onClick={handlehome}>Login</CustomButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
