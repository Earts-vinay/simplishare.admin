import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Avatar, LinearProgress, Menu, MenuItem } from '@mui/material';
import { IoIosArrowDown } from "react-icons/io";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import colors from '../utils/colors';
import CustomSearch from "./Custom/CustomSearch"
import fontFamily from '../utils/fonts';

const daysLeft = 5;
const totalDays = 30;
const progress = (daysLeft / totalDays) * 100;

// Reusable Navbar Item component with routing
const NavbarItem = ({ icon, label, to, showLabel }) => (
  <NavLink
    to={to}
    style={({ isActive }) => ({
      textDecoration: 'none',
      fontFamily,
      color: isActive ? colors.red : colors.semigray,
    })}
  >
    {({ isActive }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: "5px",
          flexDirection: { xl: 'row', lg: 'row', md: 'column', sm: 'column' },
        }}
      >
        <Box>
          {typeof icon === 'string' ? (
            <img
              src={icon}
              alt={`${label} icon`}
              style={{
                width: '20px', height: '20px',
                filter: isActive
                  ? 'invert(18%) sepia(100%) saturate(7483%) hue-rotate(357deg) brightness(92%) contrast(104%)'
                  : 'invert(0%)',
              }}
            />
          ) : (
            React.createElement(icon, {
              style: { color: isActive ? colors.red : colors.semigray },
            })
          )}
        </Box>
        <Box>
          {showLabel && <Typography sx={{ fontFamily }}>{label}</Typography>}
        </Box>
      </Box>
    )}
  </NavLink>
);

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
   const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfile = (event) => {
    navigate("/profile")
  };
  const handleSettings = (event) => {
    navigate("/settings")
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: colors.white,
          zIndex: theme.zIndex.drawer + 1,
        }}
        elevation={0}
        position="fixed"
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/assets/logos/simpleshare_logo.svg" alt="SimpleShare Logo" style={{ width: '110px' }} />
          </Box>

          <Box sx={{ width: "15%", display: "flex", alignItems: "center", }}>
            <CustomSearch label="Search" size="small" />
          </Box>

          <Box sx={{ display: 'flex', gap: isMobile ? 1 : 3 }}>
            <NavbarItem icon="/assets/icons/home_icon.svg" label="HOME" to="/home" showLabel={!isMobile} />
            <NavbarItem icon="/assets/icons/brand_icon.svg" label="BRAND" to="/brand" showLabel={!isMobile} />
            <NavbarItem icon="/assets/icons/audience_icon.svg" label="AUDIENCE" to="/audience" showLabel={!isMobile} />
            <NavbarItem icon='/assets/icons/offers_icon.svg' label="OFFERS" to="/offers" showLabel={!isMobile} />
            <NavbarItem icon='/assets/icons/gen_icon.svg' label="GEN AI " to="/genpost" showLabel={!isMobile} />
            <NavbarItem icon='/assets/icons/analytics_icon.svg' label="ANALYSTS" to="/analysts" showLabel={!isMobile} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center", cursor: "pointer" }} onClick={handleClick}>
              <Avatar
                sx={{
                  bgcolor: "red",
                  color: "white",
                  borderRadius: "10px",
                  fontSize: "16px",
                  height: "35px",
                  width: "40px",
                }}
              >
                UN
              </Avatar>
              <Typography sx={{ color: "black", fontFamily }}>User Name</Typography>
              <IoIosArrowDown color="#000" />
            </Box>

            {/* Dropdown Menu */}
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} sx={{ mt: 3, width: "350px" }}>
              <MenuItem onClick={handleProfile} sx={{ px: 6, fontFamily }}>Profile</MenuItem>
              <MenuItem onClick={handleSettings} sx={{ px: 6, fontFamily }}>Settings</MenuItem>
              <MenuItem onClick={handleClose} sx={{ px: 6, fontFamily }}>Logout</MenuItem>
            </Menu>

            <Box sx={{ width: "100%", position: "relative" }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 2,
                  borderRadius: 2,
                  backgroundColor: "#f0f0f0",
                  "& .MuiLinearProgress-bar": { backgroundColor: "red" },
                }}
              />
              <Typography
                sx={{
                  pt: 0.3,
                  fontSize: "9px",
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {daysLeft} Days <span style={{ color: "black" }}>Trial Period Left</span>
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
