import React, { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, IconButton, TextField } from "@mui/material";
import { IoAdd } from "react-icons/io5";
import CustomDialog from "../Custom/CustomDialog";
import fontFamily from "../../utils/fonts";
import CustomButton from "../Custom/CustomButton";

const AddVoice = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  return (
    <>
      {/* Button to open the popup */}
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
            <Typography sx={{ paddingTop: "10px",fontFamily }}>Add Voice</Typography>
          </Box>
        </Button>
      </Box>

      {/* Dialog Popup */}
      <CustomDialog open={open} onClose={handleCloseDialog} title="Voice">
        <DialogContent>
          <Box >
            {/* Tips Section */}
            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            >
              <Typography variant="body1" sx={{fontFamily}}><strong>Some tips to get you started:</strong></Typography>
              <ul style={{fontFamily}}>
                <li>Develop distinct styles for different channels.</li>
                <li>Provide at least 10,000 words to ensure quality output.</li>
                <li>Aim for uniform paragraph structure.</li>
                <li>Submit documents in either PDF or TXT format.</li>
              </ul>
            </Box>

            {/* Text Area */}
            <TextField
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              placeholder="Share your voice"
              sx={{ marginBottom: "10px" }}
            />

            {/* Add Voice Button */}
            <Button
              variant="outlined"
              sx={{ textTransform: "capitalize", border: "1px solid gray", color: "gray" }}
            >
              Add Voice
            </Button>
          </Box>
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

export default AddVoice;
