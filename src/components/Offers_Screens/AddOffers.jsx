import { useState } from 'react';
import { Box, Container, MenuItem, Typography, TextField, Button, Slider, } from '@mui/material';
import fontFamily from '../../utils/fonts';
import CustomDropdown from '../Custom/CustomDropdown';
import CustomTextField from '../Custom/CustomTextField';
import colors from '../../utils/colors';
import CustomButton from '../Custom/CustomButton';
import { useNavigate } from 'react-router-dom';

const AddOffers = () => {
    const [selectedOfferType, setSelectedOfferType] = useState('');
    const [discount, setDiscount] = useState(10);
     const navigate = useNavigate();

    const handlenav = () => {
        navigate("/offers");
      }
    return (
        <Container sx={{ flexGrow: 1, paddingTop: 10 }}>
            <Typography sx={{ fontFamily }}>Offers /</Typography>

            <Box sx={{ backgroundColor: 'white', mt: 2, px: 2.5, py: 1.5, borderRadius: 2 }}>
                <Typography sx={{ fontFamily, fontWeight: 'bold', mb: 2 }}>Add Offer</Typography>

                {/* Location Dropdown */}
                <Box sx={{ my: 1 }}>
                    <CustomDropdown label="Select Location">
                        <MenuItem value="ikeea">Ikeea</MenuItem>
                        <MenuItem value="hi-tech">Hi-Tech</MenuItem>
                        <MenuItem value="gachibowli">Gachibowli</MenuItem>
                        <MenuItem value="tolichoki">Tolichoki</MenuItem>
                    </CustomDropdown>
                </Box>

                {/* Offer Type Dropdown */}
                <CustomDropdown
                    label="Select Offer Type"
                    value={selectedOfferType}
                    onChange={(e) => setSelectedOfferType(e.target.value)}
                >
                    <MenuItem value="day-offers">Day Offers</MenuItem>
                    <MenuItem value="offers-by-valley">Offers by Valley</MenuItem>
                    <MenuItem value="bogo">Bogo</MenuItem>
                </CustomDropdown>

                {/* Render additional fields based on Offer Type */}
                {selectedOfferType && (
                    <Box sx={{ pt: 2 }}>
                        <Typography sx={{ fontFamily }}>Offer Title</Typography>
                        <CustomTextField placeholder="Enter Your Offer Title" />
                        <Typography sx={{ fontFamily, my: 1 }}>Offer Description</Typography>
                        <TextField placeholder="Enter Offer Description" fullWidth multiline rows={3} sx={{ mb: 2 }} InputProps={{ style: { fontFamily, } }} />

                        {/* Discount Slider */}
                        <Typography sx={{ fontFamily }}>Enter Amount or Pick Discount Percentage</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <CustomTextField value={`₹${discount}.00`} sx={{ width: '350px', mr: 2 }} disabled />
                            <Slider value={discount} onChange={(e, newValue) => setDiscount(newValue)} min={0} max={100} sx={{
                                color: colors.red, // Direct color assignment
                                '& .MuiSlider-thumb': { backgroundColor: colors.red }, // Thumb color
                                '& .MuiSlider-track': { backgroundColor: colors.red }, // Track color
                                '& .MuiSlider-rail': { backgroundColor: '#ffcccc' } // Rail color (lighter red)
                            }} />
                            <Typography sx={{ ml: 2 }}>{discount}%</Typography>
                        </Box>

                        {/* Start & End Date */}
                        <Typography sx={{fontFamily, my:1}}>Enter start date and End date of the offer</Typography>
                        <Box sx={{ display: 'flex', gap: 2, width:"60%" }}>
                            <CustomTextField label="Start date" type="date" InputLabelProps={{ shrink: true }}/>
                            <CustomTextField label="End date" type="date" InputLabelProps={{ shrink: true }}/>
                        </Box>

                        {/* Minimum Spend Amount & Coupon Code */}
                        <Box sx={{ display: 'flex', gap: 2, my: 1,width:"60%" }}>
                           <Box sx={{width:"100%" }}>
                           <Typography sx={{fontFamily }}>Minimum Spend Amount</Typography>
                            <CustomTextField placeholder="Enter Minimum Spend Amount"  />
                           </Box>
                            <Box sx={{width:"100%" }}>
                            <Typography sx={{fontFamily}}>Coupon Code</Typography>
                            <CustomTextField placeholder="Enter Coupon Code"  />
                            </Box>
                        </Box>

                        {/* Audience Selection */}
                      <Box sx={{my:1}}>
                      <CustomDropdown label="Select Audience">
                            <MenuItem value="public">Public</MenuItem>
                            <MenuItem value="private">Private</MenuItem>
                        </CustomDropdown>
                      </Box>

                        {/* Offer Status */}
                        <CustomDropdown label="Offer Status">
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="paused">Paused</MenuItem>
                            <MenuItem value="expired">Expired</MenuItem>
                        </CustomDropdown>

                        {/* Submit Button */}
                        <Box sx={{textAlign:'end', my:1.5}}>
                        <CustomButton onClick={handlenav}>Add Offer</CustomButton>
                        </Box>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default AddOffers;
