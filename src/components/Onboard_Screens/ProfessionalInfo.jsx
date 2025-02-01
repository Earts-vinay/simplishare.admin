import React, { useState } from 'react';
import { Box, Button, Grid, MenuItem, Typography } from '@mui/material';
import fontFamily from '../../utils/fonts';
import CustomTextField from '../Custom/CustomTextField';
import CustomDropdown from '../Custom/CustomDropdown';
import colors from '../../utils/colors';

const CompanyForm = () => {
  const [selectedTeamSize, setSelectedTeamSize] = useState(null);

  const teamSizes = ['1-10', '11-50', '51-250', '251-1K', '1K-5K', '5K-10K', '10K-50K', '50K-100K', '100K+'];

  return (
    <Box sx={{ p: 5 }}>
      <Typography sx={{ fontFamily, fontWeight: 'bold', fontSize: '30px', textAlign: 'center' }}>
        Tell Us About Your Company
      </Typography>

      <Grid container spacing={3} py={2}>
        {/* Company Name */}
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontFamily }}>Company Name</Typography>
          <CustomTextField placeholder="Enter Your Company Name" />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontFamily }}>Email Information</Typography>
          <CustomTextField placeholder="Enter your Email" helperText="*Verification purpose only" />
        </Grid>

        {/* Industry Select */}
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontFamily }}>Industry</Typography>
          <CustomDropdown label="Select your industry">
            <MenuItem value={10}>Industry 1</MenuItem>
            <MenuItem value={20}>Industry 2</MenuItem>
            <MenuItem value={30}>Industry 3</MenuItem>
          </CustomDropdown>
        </Grid>
      </Grid>

      {/* Team Members Selection */}
      <Box>
        <Typography sx={{ fontFamily, py: 2 }}>Select The Number Of Team Members?</Typography>

        <Grid container spacing={1}>
          {teamSizes.map((size, index) => (
            <Grid item xs={4} md={1.32} key={index}>
              <Button
                fullWidth
                variant={selectedTeamSize === size ? 'contained' : 'outlined'}
                onClick={() => setSelectedTeamSize(size)}
                sx={{
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  padding: '10px',
                  backgroundColor: selectedTeamSize === size ? colors.red : 'transparent',
                  color: selectedTeamSize === size ? '#fff' : 'inherit',
                  borderColor: colors.semigray,
                  '&:hover': {
                    backgroundColor: colors.red,
                    color: '#fff'
                  }
                }}
              >
                {size}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CompanyForm;
