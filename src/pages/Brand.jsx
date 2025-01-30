import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Select,
  MenuItem,
  Box,
  alpha,
} from "@mui/material";
import { IoIosAddCircleOutline, IoIosArrowDropdown } from "react-icons/io";
import colors from "../utils/colors";
import { IoAdd } from "react-icons/io5";
import fontFamily from "../utils/fonts";

const CustomAccordion = ({ title, buttonText, buttonWidth, children, defaultExpanded }) => (
  <Accordion elevation={0} sx={{ marginBottom: 3 }} defaultExpanded={defaultExpanded}>
    <AccordionSummary expandIcon={<IoIosArrowDropdown fontSize={22} />}>
      <Box sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
        <Typography sx={{fontFamily}}>{title}</Typography>
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
                color: "#000", // Optional: Change text color on hover for better contrast
              },
            }}
          >
            {buttonText}
          </Button>

        )}
      </Box>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

const BrandScreen = () => (
  <Container sx={{ flexGrow: 1, paddingTop: 10 }}>
    <Typography variant="p" sx={{fontFamily}}>Brand /</Typography>
    <Typography variant="h5" sx={{ marginY: 2,fontFamily }}>
      Untitled Brand Kit
    </Typography>

    <CustomAccordion title="Brand Logo" buttonText="Upload" buttonWidth="100px" defaultExpanded>
  <Box sx={{ display: "flex", flexDirection: "row",gap:"20px", alignItems: "center" }}>
    
    <Button
      component="label"
      variant="outlined"
      sx={{
        border: "1px solid gray",
        color: "gray",
        fontFamily,
        textTransform: "capitalize",
        padding:"10px",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
     <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"5px",}}>
     <IoAdd fontSize="35px"/>
     <Typography sx={{paddingTop:"10px",fontFamily}}>New Logo</Typography>
     </Box>
      <input
        type="file"
        hidden
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            console.log("Uploaded File:", file);
            // Add logic to display the uploaded image or handle it
          }
        }}
      />
    </Button>

    <img
      src="/assets/logos/simpleshare_logo.svg"
      alt="Brand Logo"
      style={{ width: "100px", height: "100px", marginBottom: "10px" }}
    />
  </Box>
</CustomAccordion>


    <CustomAccordion title="Colour Palette" buttonText="New Palette" buttonWidth="140px">
      palette
    </CustomAccordion>

    <CustomAccordion title="Fonts" buttonText="New Font" buttonWidth="120px">
      Fonts
    </CustomAccordion>

    <CustomAccordion title="Text Style Guide" buttonText="Import" buttonWidth="100px">
      <Box>
        <Typography sx={{fontFamily}}>Type Style</Typography>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </Box>
    </CustomAccordion>

    <CustomAccordion title="Language">
      <Select defaultValue="India" sx={{ width: 200 }}>
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="UK">English UK</MenuItem>
      </Select>
    </CustomAccordion>

    <CustomAccordion title="Content Framework/Voices" buttonText="Add Voice" buttonWidth="130px" />

    <CustomAccordion title="Template Style" buttonText="Add Style" buttonWidth="130px" />
  </Container>
);

export default BrandScreen;
