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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UploadIcon from "@mui/icons-material/Upload";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddIcon from "@mui/icons-material/Add";
import { IoIosArrowDropdown } from "react-icons/io";
import colors from "../utils/colors";

const BrandScreen = () => {
  return (
    <Container sx={{ flexGrow: 1, paddingTop: 10 }}>
      <Typography variant="p" >
         Brand /
      </Typography>
      <Typography variant="h5" sx={{ marginY: 2 }}>
        Untitled Brand Kit
      </Typography>

      {/* Brand Logo Accordion */}
      <Accordion sx={{ marginBottom: 3 }}>
  <AccordionSummary 
    expandIcon={<IoIosArrowDropdown fontSize={22}/>} 
   
  >
    <Box sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
      <Typography>Brand Logo</Typography>
      <Button
        startIcon={<IoIosAddCircleOutline />}
        variant="contained"
        sx={{
          backgroundColor: alpha(colors.red, 0.05), // Use 5% opacity for red color
          color: "#000",
          width: "100px",
          height: "27px",
          textTransform:"capitalize",
          marginRight:"10px"
        }}
      >
        Upload
      </Button>
    </Box>
  </AccordionSummary>
  <AccordionDetails>
    <img src="/assets/logos/simpleshare_logo.svg" alt="" />
  </AccordionDetails>
</Accordion>


      {/* Colour Palette Accordion */}
      <Accordion sx={{marginBottom:3}}>
        <AccordionSummary expandIcon={<IoIosArrowDropdown fontSize={22}/>}>
          <Typography>Colour Palette</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            sx={{ backgroundColor: "#f4f4f4", color: "#000" }}
          >
            New Palette
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Fonts Accordion */}
      <Accordion sx={{marginBottom:3}}>
        <AccordionSummary expandIcon={<IoIosArrowDropdown fontSize={22}/>}>
          <Typography>Fonts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            sx={{ backgroundColor: "#f4f4f4", color: "#000" }}
          >
            New Font
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Text Style Guide Accordion */}
      <Accordion sx={{marginBottom:3}}>
        <AccordionSummary expandIcon={<IoIosArrowDropdown fontSize={22}/>}>
          <Typography>Text Style Guide</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            startIcon={<UploadIcon />}
            variant="contained"
            sx={{ backgroundColor: "#f4f4f4", color: "#000" }}
          >
            Import
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Language Accordion */}
      <Accordion sx={{marginBottom:3}}>
        <AccordionSummary expandIcon={<IoIosArrowDropdown fontSize={22}/>}>
          <Typography>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Select defaultValue="India" sx={{ width: 200 }}>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="UK">English UK</MenuItem>
          </Select>
        </AccordionDetails>
      </Accordion>

      {/* Content Framework/Voices Accordion */}
      <Accordion sx={{marginBottom:3}}>
        <AccordionSummary expandIcon={<IoIosArrowDropdown fontSize={22}/>}>
          <Typography>Content Framework/Voices</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            sx={{ backgroundColor: "#f4f4f4", color: "#000" }}
          >
            Add Voice
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Template Style Accordion */}
      <Accordion sx={{marginBottom:3}}>
        <AccordionSummary expandIcon={<IoIosArrowDropdown fontSize={22}/>}>
          <Typography>Template Style</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            sx={{ backgroundColor: "#f4f4f4", color: "#000" }}
          >
            New Style
          </Button>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default BrandScreen;
