import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography, Avatar } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram'; // You can replace with an Instagram image

const GetSatarted = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: '#f9f9f9' }}>
     

      {/* Title */}
      <Typography variant="h4" align="center" mb={3} sx={{ fontWeight: 'bold' }}>
        Let&apos;s get started
      </Typography>

      {/* Question Section */}
      <Typography variant="h6">
        What are you here for? </Typography>
      <p> Select all that you are looking for</p>

      {/* Card Selection Section */}
      <Grid container spacing={2} justifyContent="center">
        {[
          { title: 'Brand Management', description: 'Creating and maintaining brand elements under one roof.' },
          { title: 'Community Sharing', description: 'Encourages customers to promote products on social media.' },
          { title: 'Analyze & Insights', description: 'Customer sharing patterns and social media insights.' },
          { title: 'Brand Strategy', description: 'Involves analytics to define identity, target market, messaging, and execution.' },
          { title: 'Brand Reputation', description: 'Leveraging social media shares to build positive brand perception.' }
        ].map((option, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index} >
            <Card sx={{ cursor: 'pointer', textAlign: 'center',background:"none" }} pt={3}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {option.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {option.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Social Media Account Section */}
      <Box mt={4} mb={2} textAlign="center">
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Connect to Social Media Account
        </Typography>
        <Card sx={{ display: 'inline-block', mt: 2 }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <Avatar sx={{ mr: 2, backgroundColor: 'transparent' }}>
              <InstagramIcon sx={{ fontSize: 50, color: '#E1306C' }} />
            </Avatar>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                Instagram
              </Typography>
            </Box>
            <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
              Connect
            </Button>
          </CardContent>
        </Card>
      </Box>

     
      {/* Footer Section */}
      <Box textAlign="center">
        <Typography variant="body2" color="textSecondary">
          Enhance your security by setting up two-factor authentication (2FA) using an authenticator app or SMS on your mobile phone.
        </Typography>
      </Box>
    </Box>
  );
};

export default GetSatarted;
