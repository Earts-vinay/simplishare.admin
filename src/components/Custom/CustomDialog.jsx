import React from 'react';
import {
  Dialog,
  Typography,
  Box,
  
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import colors from "../../utils/colors";
import fontFamily from '../../utils/fonts';

const CustomDialog = ({
  open,
  onClose,
  title,
  commonStyles,
  children,
  width
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      sx={{
        height: "700px",
        borderRadius:"10px"
      }}
      PaperProps={{ sx: { width: {width}, borderRadius:"10px" } }}
    >
      <Box 
      sx={{  display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.white,
        paddingY:"15px",
        paddingX:"20px",
       borderRadius:"10px"
        }}>
      <Typography color="#000" sx={{fontFamily}}>
        {title}
      </Typography>
      <CloseIcon
        sx={{color:"#000",  cursor:"pointer"}}
        onClick={() => {
          onClose();
        }}
      />
        </Box>
        {children}
    </Dialog>
  );
};

export default CustomDialog;
