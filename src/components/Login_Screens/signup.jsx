import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import CreateProfile from './signup_content/CreateProfile';
import ProfessionalInfo from './signup_content/ProfessionalInfo';
import SecureAccount from './signup_content/SecureAccount';
import GetStarted from './signup_content/GetStarted';

const steps = ['Create Profile', 'Professional Information', 'Secure Account', 'Lets Get Started'];

// Custom Step Connector to adjust the line size between steps


const Signup = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <CreateProfile/>;
      case 1:
        return <ProfessionalInfo/>;
      case 2:
        return <SecureAccount/>;
      case 3:
        return <GetStarted/>;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="lg" sx={{backgroundColor:"#5555"}}> {/* Add a container with maxWidth */}
      <Box sx={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
        <Stepper activeStep={activeStep} >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2">{label}</Typography>
                </Box>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 3, mb: 2 }}>
          {activeStep === steps.length ? (
            <Box>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          ) : (
            <Box>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
