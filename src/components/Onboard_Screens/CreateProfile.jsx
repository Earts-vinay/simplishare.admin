import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import fontFamily from '../../utils/fonts';
import CustomTextField from '../Custom/CustomTextField';
import colors from '../../utils/colors';

const CreateProfile = () => {
  const [selectedProfession, setSelectedProfession] = useState(null);

  const professions = ["Individual", "Manager/Director", "Executive", "Franchise Owner"];

  return (
    <Box sx={{ p: 6 }}>
      {/* Header */}
      <Typography sx={{ fontFamily, fontWeight: "bold", fontSize: "30px", textAlign: "center" }}>
        Create Your Profile
      </Typography>

      {/* Personal Information */}
      <Typography pb={1} pt={3} sx={{ fontFamily }}>Personal Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomTextField label="Enter Your First Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField label="Enter Your Last Name" />
        </Grid>
      </Grid>

      {/* Email Information */}
      <Box>
        <Typography sx={{ fontFamily, py: 1 }}>Email Information</Typography>
        <CustomTextField
          label="Enter Your Email"
          helperText="*Verification purpose only"
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>

      {/* Profession Selection */}
      <Box mt={2}>
        <Typography sx={{ fontFamily }}>Select Your Profession</Typography>
        <Grid container spacing={2} mt={1}>
          {professions.map((profession, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <Button
                fullWidth
                variant={selectedProfession === profession ? "contained" : "outlined"}
                size="large"
                onClick={() => setSelectedProfession(profession)}
                sx={{
                  textTransform: "capitalize",
                  fontFamily,
                  backgroundColor: selectedProfession === profession ? colors.red : "transparent",
                  color: selectedProfession === profession ? "#fff" : "inherit",
                  borderColor: colors.semigray,
                  "&:hover": {
                    backgroundColor: colors.red,
                    color: "#fff"
                  }
                }}
              >
                {profession}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CreateProfile;
