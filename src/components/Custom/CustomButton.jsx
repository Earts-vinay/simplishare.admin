import React from "react";
import Button from "@mui/material/Button";
import colors from "../../utils/colors";
import fontFamily from "../../utils/fonts";

const commonStyles = {
  fontFamily: "montserrat-regular",
};

const CustomButton = ({
  variant = "outlined", 
  color =colors.red, 
  borderColor,
  onClick,
  size = "small", 
  width = "100px",
  type = "button",
  children,
  disabled, 
  position ,
  height, 
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      onClick={onClick}
      size={size}
      disabled={disabled}
      sx={{
        textTransform: "capitalize",
        width: width,
        height: height,
        padding: "6px",
        position: position,
        border: `1px solid ${colors.red}`, 
        borderRadius:"20px",
        color: {color}, 
        fontFamily,
        "&:hover": {
          backgroundColor: colors.red, 
          color: "white", 
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
