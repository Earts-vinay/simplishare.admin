import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import fontFamily from '../../utils/fonts';
import colors from '../../utils/colors';
import CustomButton from '../Custom/CustomButton';

const options = [
  { title: 'Brand Management', description: 'Creating and maintaining brand elements under one roof.' },
  { title: 'Community Sharing', description: 'Encourages customers to promote products on social media.' },
  { title: 'Analyze & Insights', description: 'Customer sharing patterns and social media insights.' },
  { title: 'Brand Strategy', description: 'Involves analytics to define identity, target market, messaging, and execution.' },
  { title: 'Brand Reputation', description: 'Leveraging social media shares to build positive brand perception.' }
];

const GetStarted = () => {
  return (
    <Box sx={{ p: 2}}>
      {/* Title */}
      <Typography mb={3} sx={{ fontWeight: 'bold', fontFamily, textAlign: 'center', fontSize: '30px' }}>
        Let&apos;s get started
      </Typography>

      {/* Question Section */}
      <Typography sx={{ fontFamily, fontSize: '18px' }}>What are you here for?</Typography>
      <Typography sx={{ fontFamily, color: colors.semigray }}>Select all that you are looking for</Typography>

      {/* Card Selection Section */}
      <Grid container spacing={2} justifyContent="center" sx={{ py: 2 }}>
        {options.map((option, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card
              sx={{
                cursor: 'pointer',
                textAlign: 'center',
                background: 'none',
                boxShadow: 'none',
                border: '1px solid gray',
                height: '100%' // Ensures all cards are of equal height
              }}
            >
              <CardContent sx={{ pt: 5, paddingBottom: '5px !important', minHeight: '120px',display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily }}>
                  {option.title}
                </Typography>
                <Typography color={colors.darkgray} sx={{ fontFamily, fontSize: '12px' }}>
                  {option.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Social Media Account Section */}
      <Box mt={4} textAlign="start">
        <Typography sx={{ fontFamily, fontSize: '25px' }}>Connect to Social Media Account</Typography>
        <Card sx={{ display: 'inline-block',  boxShadow: 'none', }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center',  gap: '50px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <InstagramIcon sx={{ fontSize: 50, color: '#E1306C' }} />
              <Typography variant="body1" sx={{ fontFamily }}>
                Instagram
              </Typography>
            </Box>
            <Box>
              <CustomButton>Connect</CustomButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default GetStarted;
