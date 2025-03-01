import { Box, Button, Container, Grid, MenuItem, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from '../components/Custom/CustomButton'
import fontFamily from '../utils/fonts'
import CustomTextField from '../components/Custom/CustomTextField'
import CustomDropdown from '../components/Custom/CustomDropdown'
import colors from '../utils/colors'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [selectedTeamSize, setSelectedTeamSize] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const toggleOffer = () => {
    setIsActive((prev) => !prev);
  };

  const handleUpgrade = () => {
    navigate("/profile/Upgrade");
  }
  
  const teamSizes = ['1-10', '11-50', '51-250', '251-1K', '1K-5K', '5K-10K', '10K-50K', '50K-100K', '100K+'];
  return (
    <Container sx={{ flexGrow: 1, paddingTop: 10, }}>
     <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
     <Typography sx={{ fontFamily }}>User Profile /</Typography>
     <CustomButton onClick={handleUpgrade}>Trial Plan</CustomButton>
     </Box>

      {/* Main Content Box */}
      <Box sx={{ backgroundColor: "white", mt: 2, px: 2.5, py: 1.5, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontFamily }}>User Name </Typography>
          <CustomButton>Add Member</CustomButton>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "white", mt: 2, px: 2.5, py: 1.5, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontFamily }}>Personal Information </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontFamily, pt: 2 }}>First Name </Typography>
          <CustomTextField placeholder="Enter your First Name" />
          <Typography sx={{ fontFamily, pt: 1 }}>Last Name </Typography>
          <CustomTextField placeholder="Enter your Last Name" />
          <Typography sx={{ fontFamily, pt: 1 }}>Email Address </Typography>
          <CustomTextField placeholder="Enter your Email" />
          <Typography sx={{ fontFamily, pt: 1 }}>Phone Number </Typography>
          <CustomTextField placeholder="Enter your Phone Number" />
        </Box>
      </Box>

      {/* Company Information */}
      <Box sx={{ backgroundColor: "white", mt: 3, px: 2.5, py: 1.5, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontFamily }}>Company Details </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontFamily, pt: 2 }}>Company Name </Typography>
          <CustomTextField placeholder="Enter your Company Name" />
          <Typography sx={{ fontFamily, pt: 1 }}>Comapny Email Address </Typography>
          <CustomTextField placeholder="Enter your Comapny Email" />
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontFamily }}>Industry</Typography>
            <CustomDropdown label="Select your industry">
              <MenuItem value={10}>Industry 1</MenuItem>
              <MenuItem value={20}>Industry 2</MenuItem>
              <MenuItem value={30}>Industry 3</MenuItem>
            </CustomDropdown>
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
      </Box>

      {/* Insote opterations */}
      <Box sx={{ backgroundColor: "white", mt: 3, px: 2.5, py: 1.5, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontFamily }}>In-store Operatons </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontFamily, pt: 2 }}>Product Scanning Instruction </Typography>
          <CustomTextField placeholder="Enter Instruction Guide text" />

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "10px", border: `1px solid ${colors.semigray}`, py: 1, my: 1, px: 2 }}>
            <Box>
              <Typography sx={{ fontFamily, pt: 1 }}>Self Checkout Availability </Typography>
              <Typography sx={{ fontFamily, color: colors.semigray }}>Product Scanning Instruction </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
              <Typography sx={{ mr: 1, fontFamily }}>
                {isActive ? 'Active' : 'Inactive'}
              </Typography>
              <Switch checked={isActive} onChange={toggleOffer} color="error" />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Notifications & Preference */}
      <Box sx={{ backgroundColor: "white", mt: 3, px: 2.5, py: 1.5, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 1 }}>
          <Typography sx={{ fontFamily, mb: 1.5 }}>Notifications & Prefernece </Typography>
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "10px", border: `1px solid ${colors.semigray}`, py: 1, my: 1, px: 2 }}>
            <Box>
              <Typography sx={{ fontFamily, pt: 1 }}>Email Notifictions</Typography>
              <Typography sx={{ fontFamily, color: colors.semigray }}>Customers receiving notification related to activity or offers</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
              <Typography sx={{ mr: 1, fontFamily }}>
                {isActive ? 'Active' : 'Inactive'}
              </Typography>
              <Switch checked={isActive} onChange={toggleOffer} color="error" />
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "10px", border: `1px solid ${colors.semigray}`, py: 1, my: 1, px: 2 }}>
            <Box>
              <Typography sx={{ fontFamily, pt: 1 }}>Push Notifications</Typography>
              <Typography sx={{ fontFamily, color: colors.semigray }}>Mobile app Push notifications </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
              <Typography sx={{ mr: 1, fontFamily }}>
                {isActive ? 'Active' : 'Inactive'}
              </Typography>
              <Switch checked={isActive} onChange={toggleOffer} color="error" />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Account Settings */}
      <Box sx={{ backgroundColor: "white", mt: 2, px: 2.5, py: 1.5, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontFamily }}>Account Settings </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontFamily, pt: 2 }}>User Name </Typography>
          <CustomTextField placeholder="Enter your User Name" />
          <Typography sx={{ fontFamily, pt: 1 }}>Password </Typography>
          <CustomTextField placeholder="Enter your Password" />
        </Box>
      </Box>

      <Box sx={{textAlign:"end",my:2}}>
        <CustomButton>Save</CustomButton>
      </Box>
    </Container>
  )
}

export default Profile