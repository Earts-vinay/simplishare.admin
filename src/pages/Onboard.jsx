import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CreateProfile from "../components/Onboard_Screens/CreateProfile";
import ProfessionalInfo from "../components/Onboard_Screens/ProfessionalInfo";
import SecureAccount from "../components/Onboard_Screens/SecureAccount";
import GetStarted from "../components/Onboard_Screens/GetStarted";
import colors from "../utils/colors";
import CustomButton from "../components/Custom/CustomButton";

// Custom styles
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`& .MuiStepConnector-line`]: {
    borderColor: "#D3D3D3",
    borderTopWidth: 2,
  },
}));

const CustomStepLabel = styled(StepLabel)(({ active }) => ({
  "& .MuiStepLabel-label": {
    fontSize: "14px",
    fontWeight: "normal",
    color: active ? "red !important" : "#B0B0B0",
  },
  "& .MuiStepIcon-root": {
    color: active ? "red !important" : "#B0B0B0",
    border: active ? `1px solid ${colors.red}` : "1px solid #B0B0B0",
    backgroundColor: active ? "red !important" : "#B0B0B0",
    borderRadius: "5px",
    width: "25px",
    height: "25px",
  },
}));

const Onboard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  const steps = [
    "Create Profile",
    "Professional Information",
    "Secure Account",
    "Let’s Get Started",
  ];

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate("/home"); // Redirect to home when "Finish" is clicked
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <CreateProfile />;
      case 1:
        return <ProfessionalInfo />;
      case 2:
        return <SecureAccount />;
      case 3:
        return <GetStarted />;
      default:
        return "Unknown step";
    }
  };

  return (
    <Container>
      <Box sx={{ width: "100%", py: 2 }}>
        <Stepper activeStep={activeStep} alternativeLabel connector={<CustomStepConnector />}>
          {steps.map((label, index) => (
            <Step key={label}>
              <CustomStepLabel active={activeStep === index}>{label}</CustomStepLabel>
            </Step>
          ))}
        </Stepper>

        <Box
          sx={{
            mt: 2,
            backgroundColor: colors.white,
            borderRadius: "10px",
            p: 3,
          }}
        >
          {renderStepContent(activeStep)}

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <CustomButton disabled={activeStep === 0} onClick={handleBack}>
              Back
            </CustomButton>
            <CustomButton onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Onboard;
