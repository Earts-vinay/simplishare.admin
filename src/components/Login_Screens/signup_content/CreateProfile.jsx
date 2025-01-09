import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

const CreateProfile = () => {
  return (
    <Box
      sx={{
        maxWidth: '900px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        
      }}
    >
      {/* Header */}
      <Typography variant="h4" align="center" gutterBottom>
        Create Your Profile
      </Typography>

      {/* Personal Information */}
      <Typography variant="subtitle1" pb={1} pt={3}>Personal Information</Typography>
      <Grid container spacing={2}>
      
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Enter Your First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Enter Your Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
          />
        </Grid>
      </Grid>

      {/* Email Information */}
      <Box mt={3}>
        <TextField
          fullWidth
          label="Email Information"
          variant="outlined"
        
          helperText="*Verification purpose only"
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>

      {/* Profession Selection */}
      <Box mt={3}>
        <Typography variant="subtitle1">Select Your Profession</Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={3}>
            <Button fullWidth variant="outlined" size='large'>
            Individual
            </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button fullWidth variant="outlined" size='large'>
              Manager/Director
            </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button fullWidth variant="outlined" size='large'>
              Executive
            </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button fullWidth variant="outlined" size='large'>
              Franchise Owner
            </Button>
          </Grid>
        </Grid>
      </Box>

     
    </Box>
  );
};

export default CreateProfile;
