import { alpha, Box, Button, Card, CardContent, Container, MenuItem, Switch, Typography } from '@mui/material';
import React, { useState } from 'react';
import fontFamily from '../utils/fonts';
import colors from '../utils/colors';
import CustomTextField from '../components/Custom/CustomTextField';
import CustomDropdown from '../components/Custom/CustomDropdown';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoAdd } from 'react-icons/io5';
import CustomButton from '../components/Custom/CustomButton';
import { useNavigate } from 'react-router-dom';

const GenPost = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // Track dropdown selection
  const navigate = useNavigate();

  const toggleOffer = () => {
    setIsActive((prev) => !prev);
  };

  const handledraft = () => {
    navigate("/genpost/drafts");
  }

  return (
    <Container sx={{ flexGrow: 1, paddingTop: 10 }}>
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Typography sx={{ fontFamily }}> Gen AI / Generate Post</Typography>
      <CustomButton onClick={handledraft}>Drafts</CustomButton>
      </Box>
      <Box sx={{ mt: 2, padding: '10px', backgroundColor: 'white', borderRadius: '10px' }}>
        <Card
          sx={{
            boxShadow: 'none',
            borderBottom: `1px solid ${colors.lightgray}`,
            padding: '0px',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0px !important',
            }}
          >
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" sx={{ fontFamily }}>
                Auto Generate Post on Holidays
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
              <Typography sx={{ mr: 1, fontFamily }}>
                {isActive ? 'Active' : 'Inactive'}
              </Typography>
              <Switch checked={isActive} onChange={toggleOffer} color="error" />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Main content */}
      <Box sx={{ backgroundColor: 'white', mt: 2, px: 2, py: 1.5, borderRadius: 2 }}>
        <Box sx={{ my: 1 }}>
          <Typography sx={{ fontFamily }}>Title</Typography>
          <CustomTextField placeholder="Enter Title" />
        </Box>
        <CustomDropdown
          label="Select template or Upload Image"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <MenuItem value="template">Select Template</MenuItem>
          <MenuItem value="upload">Upload Image</MenuItem>
        </CustomDropdown>
      </Box>

      {/* Show Template selection if 'Select Template' is chosen */}
      {selectedOption === "template" && (
        <Box sx={{ backgroundColor: 'white', mt: 2, p: 2, borderRadius: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", }}>
            <Typography sx={{ fontFamily }}>Select template style</Typography>
            <Button
              startIcon={<IoIosAddCircleOutline />}
              variant="outlined"
              sx={{
                backgroundColor: "none",
                border: "1px solid gray",
                color: "#000",
                fontFamily,
                width: "140px",
                height: "27px",
                textTransform: "capitalize",
                marginRight: "10px",
                "&:hover": {
                  backgroundColor: alpha(colors.red, 0.05),
                  color: "#000", // Optional: Change text color on hover for better contrast
                },
              }}
            >
              New Style
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Box sx={{ width: 120, height: 120, border: '1px solid #ddd', textAlign: 'center', borderRadius: 2 }}>
              <Typography sx={{ fontFamily }}>Template Name</Typography>
            </Box>
            <Box sx={{ width: 120, height: 120, border: '1px solid #ddd', textAlign: 'center', borderRadius: 2 }}>
              <Typography sx={{ fontFamily }}>Template Name</Typography>
            </Box>
            <Box sx={{ width: 120, height: 120, border: '1px solid #ddd', textAlign: 'center', borderRadius: 2 }}>
              <Typography sx={{ fontFamily }}>Template Name</Typography>
            </Box>
          </Box>
           <Box sx={{textAlign:"end"}}>
            <CustomButton>Generate</CustomButton>
           </Box>
        </Box>
      )}

      {/* Show Upload box if 'Upload Image' is chosen */}
      {selectedOption === "upload" && (
        <Box sx={{ backgroundColor: 'white', mt: 2, p:2, borderRadius: 2 }}>
          <Typography sx={{fontFamily, pb:2}}>Upload Image</Typography>
          <Button
          component="label"
          variant="outlined"
          sx={{
            border: "1px solid gray",
            color: "gray",
            fontFamily,
            textTransform: "capitalize",
            padding: "10px",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "5px", }}>
            <IoAdd fontSize="35px" />
            <Typography sx={{ paddingTop: "15px", fontFamily }}>Upload Image</Typography>
          </Box>
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                console.log("Uploaded File:", file);
                // Add logic to display the uploaded image or handle it
              }
            }}
          />
          </Button>
          <Box sx={{textAlign:"end"}}>
          <CustomButton>Generate</CustomButton>
          </Box>
        
        </Box>
      )}

    </Container>
  );
};

export default GenPost;
