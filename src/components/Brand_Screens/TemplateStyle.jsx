import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { IoAdd } from "react-icons/io5";
import fontFamily from "../../utils/fonts";

const TemplateStyle = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);

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
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "5px" }}>
            <IoAdd fontSize="35px" />
            <Typography sx={{ paddingTop: "10px", fontFamily }}>New Template</Typography>
          </Box>
        </Button>
      </Box>
    </>
  );
};

export default TemplateStyle;
