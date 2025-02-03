import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { IoAdd } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io"; // Info Icon
import CustomDialog from "../Custom/CustomDialog";
import CustomButton from "../Custom/CustomButton";
import fontFamily from "../../utils/fonts";

const BrandFonts = () => {
  const [open, setOpen] = useState(false);
  const [cloudType, setCloudType] = useState("personal"); // Default selection

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Add Button */}
      <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
        <Button
          variant="outlined"
          onClick={handleOpenDialog}
          sx={{
            border: "1px solid gray",
            color: "gray",
            textTransform: "capitalize",
            padding: "10px",
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "5px" }}>
            <IoAdd fontSize="35px" />
            <Typography sx={{ paddingTop: "10px",fontFamily }}>New Fonts</Typography>
          </Box>
        </Button>
      </Box>

      {/* Popup Dialog */}
      <CustomDialog open={open} onClose={handleCloseDialog} title="Select a Cloud">
        
        <DialogContent>
          {/* Info Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          >
            <IoMdInformationCircleOutline size={18} color="gray" />
            <Typography sx={{ fontSize: "13px", color: "gray",fontFamily }}>
              To change connector type later, you'll have to delete and reconnect.
            </Typography>
          </Box>

          {/* Cloud Options */}
          <RadioGroup value={cloudType} onChange={(e) => setCloudType(e.target.value)}>
            <Box
              sx={{
                border: cloudType === "personal" ? "2px solid #4CAF50" : "1px solid #ccc",
                borderRadius: "10px",
                padding: "5px",
                marginBottom: "10px",
              }}
            >
              <FormControlLabel value="personal" control={<Radio color="success" />} label={<Typography sx={{ fontWeight: "bold",fontFamily }}>Personal Cloud</Typography>} />
              <Typography sx={{ fontSize: "13px", color: "gray", marginLeft: "30px",fontFamily }}>Only I can use this Cloud</Typography>
            </Box>

            <Box
              sx={{
                border: cloudType === "corporate" ? "2px solid #4CAF50" : "1px solid #ccc",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <FormControlLabel value="corporate" control={<Radio color="default" />} label={<Typography sx={{ fontWeight: "bold",fontFamily }}>Corporate Cloud</Typography>} />
              <Typography sx={{ fontSize: "13px", color: "gray", marginLeft: "30px",fontFamily }}>Everyone in corporate will be able to use this Cloud.</Typography>
            </Box>
          </RadioGroup>
        </DialogContent>

        {/* Action Buttons */}
        <DialogActions>
         <CustomButton onClick={handleCloseDialog}>Cancel</CustomButton>
         <CustomButton>Next</CustomButton>
        </DialogActions>
      </CustomDialog>
    </>
  );
};

export default BrandFonts;
