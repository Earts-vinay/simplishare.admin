import React, { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { FaEye } from "react-icons/fa"; 
import { ImUserPlus } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import { HiHashtag } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import colors from '../utils/colors';
import MoreReach from '../components/Audience_Screens/MoreReach';
import MoreFollowers from '../components/Audience_Screens/MoreFollowers';
import WebsiteVisit from '../components/Audience_Screens/WebsiteVisit';
import ProfileTag from '../components/Audience_Screens/ProfileTag';
import LeadGen from '../components/Audience_Screens/LeadGen';
import fontFamily from '../utils/fonts';
const goals = [
  { label: 'MORE REACH', icon:<FaEye fontSize={25}/> },
  { label: 'MORE FOLLOWER', icon: <ImUserPlus fontSize={25}/> },
  { label: 'WEBSITE VISIT', icon: <CgWebsite fontSize={25}/> },
  { label: 'PROFILE TAGS', icon: <HiHashtag fontSize={25}/> },
  { label: 'LEAD GEN', icon: <FaPhoneAlt fontSize={25}/> },
];

const Audience = () => {
  const [activeGoal, setActiveGoal] = useState(goals[0].label);

  // Function to Render Dynamic Content
  const renderContent = () => {
    switch (activeGoal) {
      case 'MORE REACH':
        return (
         <MoreReach/>
        );

      case 'MORE FOLLOWER':
        return (
          <MoreFollowers/>
        );

      case 'WEBSITE VISIT':
        return (
          <WebsiteVisit/>
        );

      case 'PROFILE TAGS':
        return (
        <ProfileTag/>
        );

      case 'LEAD GEN':
        return (
         <LeadGen/>
        );

      default:
        return null;
    }
  };

  return (
    <Container sx={{ flexGrow: 1, paddingTop: 10 }}>
      <Typography sx={{fontFamily}}>Audience /</Typography>

      {/* Main Content Box */}
      <Box sx={{ backgroundColor: 'white', mt: 2, px: 2,pt:1.5,borderRadius: 2,}}>
        <Typography sx={{fontFamily}}>
          Your Goal Set to
        </Typography>

        {/* Goal Selection */}
        <Grid container spacing={2} sx={{mt:1 }}>
          {goals.map((goal) => (
            <Grid item key={goal.label}>
              <Button
                onClick={() => setActiveGoal(goal.label)}
                variant="outlined"
                sx={{
                  color: activeGoal === goal.label ? colors.red : colors.black,
                  padding: '10px 15px',
                  width:"180px",
                  fontFamily,
                  fontWeight:"bold",
                  borderRadius: '10px',
                  boxShadow:"none",
                  borderColor: activeGoal === goal.label ? colors.red :colors.semigray,
                  fontSize: '14px',
                  '&:hover': {
                    backgroundColor: activeGoal === goal.label ? colors.red : '#ddd',
                    color: activeGoal === goal.label ? colors.white : colors.black,
                  },
                }}
              >
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
                {goal.icon} {goal.label}
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Dynamic Content */}
        {renderContent()}
       
      </Box>
    </Container>
  );
};

export default Audience;
