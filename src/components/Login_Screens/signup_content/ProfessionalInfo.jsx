import React from 'react';
import { Box, Button, Grid, MenuItem, Select, TextField, Typography, FormControl, InputLabel } from '@mui/material';

const CompanyForm = () => {
  return (
    <Box
      sx={{
        padding: '30px',
        maxWidth: '900px',
        margin: '80px',
        borderRadius: '12px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
        Tell Us About Your Company
      </Typography>

      <Grid container spacing={3} py={3}>
        {/* Company Name */}
        <Grid item xs={12} md={6}>

          <TextField
            fullWidth
            label="Company Name"
            placeholder="Enter Your First Name"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} pt={2}>
      <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Email Information"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            helperText="*verification purpose only"
          />
        </Grid>

        {/* Industry Select */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Select Your Industry</InputLabel>
            <Select label="Select Your Industry">
              <MenuItem value={10}>Industry 1</MenuItem>
              <MenuItem value={20}>Industry 2</MenuItem>
              <MenuItem value={30}>Industry 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        </Grid>

      {/* Team Members Selection */}
      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="subtitle1" gutterBottom>
          Select The Number Of Team Members?
        </Typography>

        <Grid container spacing={1}>
          {['1-10', '11-50', '51-250', '251-1K', '1K-5K', '5K-10K', '10K-50K', '50K-100K', '100K+'].map((size, index) => (
            <Grid item xs={4} md={1.32} key={index}>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  padding: '10px',
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
