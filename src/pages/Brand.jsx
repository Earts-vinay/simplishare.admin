import React, { useState } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  MenuItem,
  Box,
  alpha,
} from "@mui/material";
import { IoIosAddCircleOutline, IoIosArrowDropdown } from "react-icons/io";
import colors from "../utils/colors";
import fontFamily from "../utils/fonts";
import BrandLogo from "../components/Brand_Screens/BrandLogo";
import ColorPalette from "../components/Brand_Screens/ColorPalette";
import BrandFonts from "../components/Brand_Screens/BrandFonts";
import CustomDropdown from "../components/Custom/CustomDropdown";
import AddVoice from "../components/Brand_Screens/AddVoice";
import TemplateStyle from "../components/Brand_Screens/TemplateStyle";

const CustomAccordion = ({ title, buttonText, buttonWidth, children, defaultExpanded }) => (
  <Accordion elevation={0} sx={{ marginBottom: 2 }} defaultExpanded={defaultExpanded}>
    <AccordionSummary expandIcon={<IoIosArrowDropdown fontSize={22} />}>
      <Box sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
        <Typography sx={{ fontFamily }}>{title}</Typography>
        {buttonText && (
          <Button
            startIcon={<IoIosAddCircleOutline />}
            variant="outlined"
            sx={{
              backgroundColor: "none",
              border: "1px solid gray",
              color: "#000",
              fontFamily,
              width: buttonWidth,
              height: "27px",
              textTransform: "capitalize",
              marginRight: "10px",
              "&:hover": {
                backgroundColor: alpha(colors.red, 0.05),
                color: "#000",
              },
            }}
          >
            {buttonText}
          </Button>
        )}
      </Box>
    </AccordionSummary>
    <AccordionDetails >{children}</AccordionDetails>
  </Accordion>
);

const BrandScreen = () => {
  const [openLogoDialog, setOpenLogoDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpenDialog = () => setOpenLogoDialog(true);
  const handleCloseDialog = () => setOpenLogoDialog(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file)); // Preview image
    }
  };

  return (

    <Container sx={{ flexGrow: 1, paddingTop: 10 }}>
      <Typography variant="p" sx={{fontFamily}}>Brand /</Typography>
      <Typography variant="h5" sx={{ marginY: 1,fontFamily }}>
        Untitled Brand Kit
      </Typography>

      <CustomAccordion title="Brand Logo" buttonText="Upload" buttonWidth="100px" defaultExpanded>
       <BrandLogo/>
      </CustomAccordion>

      <CustomAccordion title="Colour Palette" buttonText="New Palette" buttonWidth="140px">
       <ColorPalette/>
      </CustomAccordion>

      <CustomAccordion title="Fonts" buttonText="New Font" buttonWidth="120px">
      <BrandFonts/>
      </CustomAccordion>

      <CustomAccordion title="Text Style Guide" buttonText="Import" buttonWidth="100px">
        <Box>
          <Typography sx={{ fontFamily }}>Type Style</Typography>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </Box>
      </CustomAccordion>

      <CustomAccordion title="Language">
       <Box sx={{width:"40%"}}>
       <CustomDropdown label="Slect language">
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="UK">English UK</MenuItem>
        </CustomDropdown>
       </Box>
      </CustomAccordion>

      <CustomAccordion title="Content Framework/Voices" buttonText="Add Voice" buttonWidth="130px" >
       <AddVoice/>
      </CustomAccordion>

      <CustomAccordion title="Template Style" buttonText="Add Style" buttonWidth="130px" >
        <TemplateStyle/>
        </CustomAccordion>
    </Container>
  );
};

export default BrandScreen;
