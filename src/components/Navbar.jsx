import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box, Avatar, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import colors from '../utils/colors';

// Reusable Navbar Item component with routing
const NavbarItem = ({ icon, label, to, showLabel }) => (
  <NavLink to={to} style={{ textDecoration: 'none', color: colors.lightgray }}>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xl: 'row', lg: 'row', md: 'column', sm: 'column' },
      }}
    >
      <IconButton color="inherit">
        {typeof icon === 'string' ? (
          <img src={icon} alt={`${label} icon`} style={{ width: '20px', height: '20px' }} />
        ) : (
          React.createElement(icon) // Use React.createElement for Material-UI icons
        )}
      </IconButton>
      {showLabel && <Typography variant="body2">{label}</Typography>}
    </Box>
  </NavLink>
);

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Breakpoint for mobile screens

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: colors.white,
          zIndex: theme.zIndex.drawer + 1, // Ensure it stays above other elements
        }}
        elevation={0}
        position="fixed"
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/assets/logos/simpleshare_logo.svg" alt="SimpleShare Logo" style={{ width: '110px' }} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f0f0f0', // Gray background color
              borderRadius: '8px', // Optional rounded corners
              padding: '4px 8px', // Optional padding for better spacing
            }}
          >
            <TextField
              placeholder="Search…"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: '#000' }} />
                  </InputAdornment>
                ),
                style: {
                  backgroundColor: '#f0f0f0',
                  color: '#000',
                  borderColor: '#f0f0f0',
                },
              }}
              sx={{
                border: 'none',
                flex: 1,
                input: { color: '#000', border: 'none' },
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: isMobile ? 1 : 3 }}>
            <NavbarItem icon="/assets/icons/home_icon.svg" label="HOME" to="/" showLabel={!isMobile} />
            <NavbarItem icon="/assets/icons/brand_icon.svg" label="BRAND" to="/brand" showLabel={!isMobile} />
            <NavbarItem icon="/assets/icons/audience_icon.svg" label="AUDIENCE" to="/audience" showLabel={!isMobile} />
            <NavbarItem icon='/assets/icons/offers_icon.svg' label="OFFERS" to="/offers" showLabel={!isMobile} />
            <NavbarItem icon='/assets/icons/gen_icon.svg' label="AUTO GEN " to="/genpost" showLabel={!isMobile} />
            <NavbarItem icon='/assets/icons/analytics_icon.svg' label="ANALYSTS" to="/analysts" showLabel={!isMobile} />
          </Box>

          <Box sx={{display:"flex",gap:"10px",alignItems:"center"}}><Avatar sx={{ bgcolor: colors.red, color: colors.white, borderRadius: '10px' }}>UN</Avatar> <Typography sx={{color:colors.black}}>User Name</Typography></Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
