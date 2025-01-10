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

const CustomAccordion = ({ title, buttonText, buttonWidth, children }) => (
  <Accordion elevation={0} sx={{ marginBottom: 3,elevation:0 }}>
    <AccordionSummary elevation={0} expandIcon={<IoIosArrowDropdown fontSize={22} />}>
      <Box sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
        <Typography>{title}</Typography>
        {buttonText && (
          <Button
            startIcon={<IoIosAddCircleOutline />}
            variant="contained"
            sx={{
              backgroundColor: alpha(colors.red, 0.05),
              color: "#000",
              width: buttonWidth,
              height: "27px",
              textTransform: "capitalize",
              marginRight: "10px",
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
    <Typography variant="p">Brand /</Typography>
    <Typography variant="h5" sx={{ marginY: 2 }}>
      Untitled Brand Kit
    </Typography>

    <CustomAccordion title="Brand Logo" buttonText="Upload" buttonWidth="100px">
      <img src="/assets/logos/simpleshare_logo.svg" alt="Brand Logo" />
    </CustomAccordion>

    <CustomAccordion title="Colour Palette" buttonText="New Palette" buttonWidth="140px">
      palette
    </CustomAccordion>

    <CustomAccordion title="Fonts" buttonText="New Font" buttonWidth="120px">
      Fonts
    </CustomAccordion>

    <CustomAccordion title="Text Style Guide" buttonText="Import" buttonWidth="100px" >
      <Box>
        <Typography>Type Style</Typography>
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

    <CustomAccordion
      title="Content Framework/Voices"
      buttonText="Add Voice"
      buttonWidth="130px"
    />

    <CustomAccordion
      title="Template Style"
      buttonText="Add Style"
      buttonWidth="130px"
    />
  </Container>
);

export default BrandScreen;
