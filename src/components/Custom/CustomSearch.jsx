import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../utils/colors';
import fontFamily from '../../utils/fonts';

const CustomSearch = ({ searchValue, onChange,label,customSx,size,placeholder,height ="40px" }) => {
  return (
    <TextField
      fullWidth
      label={label}
      value={searchValue}
      onChange={onChange}
      size={size}
      placeholder={placeholder}
      variant="outlined"
      margin="dense"
      sx={{

        "&:hover .MuiOutlinedInput-root": {
          backgroundColor: "#fff",
            "& > fieldset": { border: `1px solid ${colors.blue}`},
          
          },
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#fff",
            "& > fieldset": { border: ` 1px solid ${colors.blue}`},
          },  ...customSx,}}
          InputLabelProps={{
            style: { fontFamily },
          
          }}
          inputProps={{autoComplete:"off"}}
      InputProps={{
            style: {  
              fontFamily, // Adjust padding as needed
             height:"40px"
            },
      
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{color:colors.darkgray}}/>
          </InputAdornment>
        ),
        
      }}
    />
  );
};

export default CustomSearch;
