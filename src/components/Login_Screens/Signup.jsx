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

const SignUp = () => {
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate("/");
  }
  const handlesignup = () => {
    navigate("/onboard");
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
            Signup
          </Typography>

          {/* Social Login Icons */}
          <Box display="flex" gap={2} mt={1}>
            <GoogleIcon fontSize="large" sx={{ color: "#bbb", border: `1px solid ${colors.semigray}`, p: 0.5, borderRadius: "10px", cursor: "pointer" }} />
            <FacebookIcon fontSize="large" sx={{ color: "#bbb", border: `1px solid ${colors.semigray}`, p: 0.5, borderRadius: "10px", cursor: "pointer" }} />
            <InstagramIcon fontSize="large" sx={{ color: "#bbb", border: `1px solid ${colors.semigray}`, p: 0.5, borderRadius: "10px", cursor: "pointer" }} />
            <FaLinkedinIn fontSize={26} style={{ color: "#bbb", border: `1px solid ${colors.semigray}`, padding: "8px", borderRadius: "10px", cursor: "pointer" }} />
          </Box>

          <Typography mb={1} sx={{ fontFamily, color: colors.darkgray }}>
            or use below
          </Typography>

          {/* Input Fields */}
          <CustomTextField label="User Name" required />
          <CustomTextField label="Enter your email Id" required/>
          <CustomTextField type="password" label="Enter password" required/>
          <CustomTextField type="password" label="Re-Enter password" required/>
      

          {/* Terms Checkbox */}
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="p" sx={{ fontFamily,pt:3 }}>
                I have read and agree to simpleShare Terms of Service and Privacy Policy.
              </Typography>
            }
          />

          {/* Sign Up & Next Button */}
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" pt={5}>
           <Typography sx={{ fontFamily,display:"flex",gap:"10px" }}>Already Registered. <Link href="#"><Typography sx={{ fontFamily }} onClick={handlelogin}> Login</Typography></Link></Typography> 
            <CustomButton onClick={handlesignup}>Signup</CustomButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
