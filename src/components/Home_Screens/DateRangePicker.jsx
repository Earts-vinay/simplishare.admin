import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Theme CSS file
import { Box, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { format } from "date-fns";
import fontFamily from "../../utils/fonts";
import colors from "../../utils/colors";

const DateRangePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(2025, 1, 10), // June 20, 2024
      endDate: new Date(2025, 1, 16), // June 23, 2024
      key: "selection",
    },
  ]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1,  position: "relative" }}>
      {/* Date Display Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
       
        }}
        onClick={() => setShowCalendar(!showCalendar)}
      >
        {/* Start Date */}
        <Box
          sx={{
            bgcolor: "#F76C6C",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius:"10px",
            px: 2,
            py: 1,
            color: "#fff",
           
            fontFamily,
            fontSize: "11px",
          }}
        >
          Start Date 
          <Box sx={{ fontFamily,
            fontSize: "13px",pt:0.5,fontWeight:"bold"}}>
          {format(range[0].startDate, "MMMM d, yyyy")}
          </Box>
        </Box>

        {/* End Date */}
        <Box
          sx={{
            bgcolor: colors.white,
           borderTopRightRadius:"10px",
           borderBottomRightRadius:"10px",
            px: 2,
            py: 1,
            color: colors.black,
            fontFamily,
            fontSize: "11px",
          }}
        >
          End Date 
          <Box sx={{ fontFamily,
            fontSize: "13px",pt:0.5,fontWeight:"bold"}}>
          {format(range[0].endDate, "MMMM d, yyyy")}
          </Box>
          
        </Box>
      </Box>

      {/* More Options Button */}
      <IconButton sx={{ bgcolor: colors.white, borderRadius: "50%", p: 1 }}>
        <MoreVertIcon />
      </IconButton>

      {/* Calendar Popup */}
      {showCalendar && (
        <Box sx={{ position: "absolute", top: "100%", left: 0, zIndex: 10 }}>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
          />
        </Box>
      )}
    </Box>
  );
};

export default DateRangePicker;
