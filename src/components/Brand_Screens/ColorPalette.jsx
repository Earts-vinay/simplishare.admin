import React, { useState } from "react";
import { Box, Button, Typography, DialogContent } from "@mui/material";
import { IoAdd } from "react-icons/io5";
import CustomDialog from "../Custom/CustomDialog";
import fontFamily from "../../utils/fonts";

const ColorPalette = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSelect = (option) => {
    setSelected(option);
    console.log("Selected:", option);
    handleCloseDialog();
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
        <Button
          variant="outlined"
          onClick={handleOpenDialog}
          sx={{
            border: "1px solid gray",
            color: "gray",
            textTransform: "capitalize",
            padding: "10px",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "5px" }}>
            <IoAdd fontSize="35px" />
            <Typography sx={{ paddingTop: "10px",fontFamily }}>New Colour</Typography>
          </Box>
        </Button>
      </Box>

      {/* Dialog Box */}
      <CustomDialog open={open} onClose={handleCloseDialog} title="Select a Cloud">
        <DialogContent>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" }}>
            {[
              { name: "Google Drive", icon: "/assets/icons/googleDrive.svg" },
              { name: "Dropbox", icon: "/assets/icons/dropbox.svg" },
              { name: "One Drive", icon: "/assets/icons/onedrive.svg" },
            ].map((option, index) => (
                <Box>
              <Button
                key={index}
                onClick={() => handleSelect(option.name)}
                sx={{
                  
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid lightgray",
                  padding: "20px",
                  borderRadius: "10px",
                  width: "120px",
                  backgroundColor: selected === option.name ? "#e0e0e0" : "white",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <img
                  src={option.icon}
                  alt={option.name}
                  style={{ width: "50px", height: "50px", marginBottom: "10px" }}
                />
                
              </Button>
              <Typography sx={{fontFamily,textAlign:"center",py:1}}>{option.name}</Typography>
              </Box>
            ))}
          </Box>
        </DialogContent>
      </CustomDialog>
    </>
  );
};

export default ColorPalette;
