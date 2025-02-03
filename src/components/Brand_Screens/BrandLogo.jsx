import React, { useState } from "react";
import { Box, Button, Typography, DialogContent, DialogActions } from "@mui/material";
import { IoAdd } from "react-icons/io5";
import CustomDialog from "../Custom/CustomDialog";
import CustomButton from "../Custom/CustomButton";
import fontFamily from "../../utils/fonts";


const BrandLogo = () => {
  const [openLogoDialog, setOpenLogoDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpenDialog = () => setOpenLogoDialog(true);
  const handleCloseDialog = () => setOpenLogoDialog(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file)); // Preview selected image
    }
  };

  return (
    <>
      {/* Button to Open Dialog */}
      <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
        <Button
          variant="outlined"
          onClick={handleOpenDialog}
          sx={{
            border: "1px solid lightgray",
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
            <Typography sx={{ paddingTop: "10px",fontFamily }}>New Logo</Typography>
          </Box>
        </Button>

        {/* Display Default Brand Logo */}
        <img src="/assets/logos/simpleshare_logo.svg" alt="Brand Logo" style={{ width: "100px", height: "100px", marginBottom: "10px" }} />
      </Box>

      {/* Upload Image Dialog */}
      <CustomDialog open={openLogoDialog} onClose={handleCloseDialog} title="Upload Brand Logo" width="500px">
        <DialogContent>
          <Box sx={{ display: "flex", gap: "35px", justifyContent: "center", alignItems: "center" }}>
            {/* Upload from Device */}
            <Box component="label" sx={{ cursor: "pointer", display: "inline-block" }}>
              <Box sx={{ border: "1px solid lightgray", py: 2.5, borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src="/assets/icons/upload.svg" alt="Upload Icon" style={{ width: "70px" }} />
              </Box>
              <input type="file" hidden accept="image/*" onChange={handleFileChange} />
              <Typography sx={{ py: 1, textAlign: "center",fontFamily }}>Upload from Device</Typography>
            </Box>

            {/* Import from Cloud */}
            <Box component="label" sx={{ cursor: "pointer", display: "inline-block" }}>
              <Box sx={{ border: "1px solid lightgray", py: 3, px: 2, borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src="/assets/icons/cloud.svg" alt="Cloud Icon" style={{ width: "70px" }} />
              </Box>
              <input type="file" hidden accept="image/*" onChange={handleFileChange} />
              <Typography sx={{ py: 1, textAlign: "center",fontFamily }}>Import via Cloud</Typography>
            </Box>
          </Box>

          {/* Preview Selected Image */}
          {selectedFile ? (
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <img src={selectedFile} alt="Selected" style={{ width: "100%", maxHeight: "200px", height: "auto", objectFit: "contain", borderRadius: "10px" }} />
            </Box>
          ) : (
            <Typography sx={{ color: "gray", textAlign: "center", pt: 2,fontFamily }}>No image selected</Typography>
          )}
        </DialogContent>

        <DialogActions>
          <CustomButton onClick={handleCloseDialog}>Done</CustomButton>
        </DialogActions>
      </CustomDialog>
    </>
  );
};

export default BrandLogo;
