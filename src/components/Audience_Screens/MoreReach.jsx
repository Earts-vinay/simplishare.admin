import { Box, Button, FormControl, MenuItem, Select, Slider, Typography } from '@mui/material';
import { useState } from 'react';
import CustomButton from '../Custom/CustomButton';
import CustomTextField from '../Custom/CustomTextField';
import fontFamily from '../../utils/fonts';


const MoreReach = () => {
      const [ageRange, setAgeRange] = useState([25, 45]);
      const [selectedGender, setSelectedGender] = useState("Male");
      const [spendingBehavior, setSpendingBehavior] = useState("");

      const handleAgeChange = (event, newValue) => {
        setAgeRange(newValue);
      };
  return (
    <Box sx={{ mt: 1.5 }}>  
      <Typography sx={{ mt: 1, mb: 1,fontFamily }}>
        Select age range ({ageRange[0]}-{ageRange[1]})
      </Typography>
      <Slider
        value={ageRange}
        onChange={handleAgeChange}
        valueLabelDisplay="auto"
        min={13}
        max={65}
        step={1}
        sx={{
          color: "red",
          fontFamily,
          "& .MuiSlider-thumb": { backgroundColor: "white", border: "2px solid red" },
          "& .MuiSlider-rail": { color: "lightgray" },
        }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{fontFamily}}>13</Typography>
        <Typography sx={{fontFamily}}>{ageRange[0]}</Typography>
        <Typography sx={{fontFamily}}>{ageRange[1]}</Typography>
        <Typography sx={{fontFamily}}>65+</Typography>
      </Box>

      <Typography sx={{ mt: 1, mb: 1,fontFamily }}>
        Select Gender
      </Typography>
      <Box display="flex" gap={2} mb={2}>
        {["Male", "Female", "Not to Prefer"].map((gender) => (
          <Button
            key={gender}
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              fontFamily,
              color: selectedGender === gender ? "red" : "black",
              borderColor: selectedGender === gender ? "red" : "gray",
              "&:hover": { borderColor: "red" },
            }}
            onClick={() => setSelectedGender(gender)}
          >
            {gender}
          </Button>
          
        ))}
      </Box>

      <Typography sx={{ mt: 1, mb: 1,fontFamily }}>
        Interests or preferences
      </Typography>
      <CustomTextField placeholder="Enter audience name"/>

      <Typography sx={{ mt: 1, mb: 1,fontFamily }}>
        Spending behavior
      </Typography>
      <FormControl fullWidth>
        <Select
          value={spendingBehavior}
          onChange={(e) => setSpendingBehavior(e.target.value)}
          displayEmpty
        >
          <MenuItem value="gen-z">
            Gen Z (18-24) - Tech, fashion, experiences, budget-conscious
          </MenuItem>
          <MenuItem value="millennials">
            Millennials (25-40) - Quality, sustainability, experiences, brand loyalty
          </MenuItem>
          <MenuItem value="gen-x">
            Generation X (41-56) - Family, home improvement, health, brand loyalty
          </MenuItem>
          <MenuItem value="baby-boomers">
            Baby Boomers (57-75) - Traditional spending habits
          </MenuItem>
        </Select>
      </FormControl>
      <Box sx={{textAlign:"end",py:2}}>
      <CustomButton > Save</CustomButton> 
      </Box>
    </Box>
  )
}

export default MoreReach