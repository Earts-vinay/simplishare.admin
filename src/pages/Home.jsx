import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Grid, Paper, Typography,IconButton, InputBase } from '@mui/material'; // Import missing components
import SearchIcon from '@mui/icons-material/Search';


const Home = () => {
  return (
    <div>
     
      <Box className='container' sx={{ flexGrow: 1, p: 3, pt: 10 , }}> {/* Added pt: 10 to account for the fixed navbar */}
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:"center",py:3, }}>
        <IconButton color="inherit">
          <SearchIcon />
          
        </IconButton>
        <InputBase
          placeholder="What is there in you mind"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Box>
        <Grid container spacing={3 } sx={{display:"flex",justifyContent:"center"}}>
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>@target</Typography>
              {/* Add Target stats here */}
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>Instagram - Your Feeds</Typography>
              {/* Add Instagram feed here */}
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>Instagram - Trending</Typography>
              {/* Add Trending feed here */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
