import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import colors from '../../utils/colors';
import fontFamily from '../../utils/fonts';

const CustomDropdown = ({ label, value, onChange, sx, children, placeholder, required, width }) => {
  return (
    <TextField
      label={label}
      fullWidth
      margin="dense"
      select
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      SelectProps={{
        IconComponent: KeyboardArrowDownIcon,
        MenuProps: {
          PaperProps: {
            sx: {
              maxHeight: '200px', // Customize this if needed
            },
          },
        },
      }}
      sx={{
        "&:hover .MuiOutlinedInput-root": {
          "& > fieldset": { border: `1px solid ${colors.semigray}` },
        },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { border: `1px solid ${colors.semigray}` },
        },
        "& .MuiInputLabel-root": {
          fontFamily: fontFamily, // Apply font family to label
        },
        width: width, // Ensure width is applied correctly
        ...sx, // Spread any additional sx passed as a prop
      }}
      InputProps={{ sx: { height: '50px', fontFamily } }} // Apply font family to input
    >
      {children}
    </TextField>
  );
};

export default CustomDropdown;
