import { useState } from 'react';
import { Box, Container, MenuItem, Typography, TextField, Button, Slider, } from '@mui/material';
import fontFamily from '../../utils/fonts';
import CustomDropdown from '../Custom/CustomDropdown';
import CustomTextField from '../Custom/CustomTextField';
import colors from '../../utils/colors';
import CustomButton from '../Custom/CustomButton';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const AddOffers = () => {
    const [selectedOfferType, setSelectedOfferType] = useState('');
    const [discount, setDiscount] = useState(10);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
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
                        <Typography sx={{ fontFamily, my: 1 }}>Enter start date and End date of the offer</Typography>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Box sx={{ display: "flex", gap: 2, width: "80%" }}>
                                <DatePicker
                                    label="Start Date"
                                    value={startDate}
                                    onChange={(newValue) => setStartDate(newValue)}
                                    slotProps={{
                                        textField: {
                                            sx: {
                                                height: 50,
                                                "& .MuiInputBase-root": { height: 50 },
                                                "& .MuiInputBase-input": { fontFamily }, // Font for entered text
                                                "& .MuiInputLabel-root": { fontFamily } // Font for label
                                            }
                                        }
                                    }}
                                />

                                <DatePicker
                                    label="End Date"
                                    value={endDate}
                                    onChange={(newValue) => setEndDate(newValue)}
                                    minDate={startDate}
                                    slotProps={{
                                        textField: {
                                            sx: {
                                                height: 50,
                                                "& .MuiInputBase-root": { height: 50 },
                                                "& .MuiInputBase-input": { fontFamily },
                                                "& .MuiInputLabel-root": { fontFamily }
                                            }
                                        }
                                    }}
                                />
                            </Box>
                        </LocalizationProvider>

                        {/* Offer Status */}
                      <Box sx={{my:1}}>
                      <CustomDropdown label="Select Offer Status">
                            <MenuItem value="active">Buy 1 Get 1 Free</MenuItem>
                            <MenuItem value="paused">Buy 2 Get 1 Free</MenuItem>
                            <MenuItem value="expired">Buy 3 Get 1 Free</MenuItem>
                        </CustomDropdown>
                      </Box>
                      <Box sx={{my:1}}>
                      <CustomDropdown label="Applicable Products">
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="paused">Paused</MenuItem>
                            <MenuItem value="expired">Expired</MenuItem>
                        </CustomDropdown>
                      </Box>

                        {/* Minimum Spend Amount & Coupon Code */}
                        <Box sx={{ display: 'flex', gap: 2, my: 2, width: "70%" }}>
                            <Box sx={{ width: "100%" }}>
                                <Typography sx={{ fontFamily }}>Minimum Spend Amount</Typography>
                                <CustomTextField placeholder="Enter Minimum Spend Amount" />
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <Typography sx={{ fontFamily }}>Discount / Value of free item</Typography>
                                <CustomTextField placeholder="Enter Value" />
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <Typography sx={{ fontFamily }}>Coupon Code</Typography>
                                <CustomTextField placeholder="Enter Coupon Code" />
                            </Box>
                        </Box>

                        <Box >
                        <Typography sx={{ fontFamily }}>Upload Banner / Offer Images </Typography>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"10px",border:`1px solid ${colors.semigray}`,p:1,my:2}}>
                           <Typography sx={{fontFamily,fontSize:"14px",color:colors.darkgray}}>Choose Images</Typography>
                          <Box sx={{display:"flex",gap:"50px",alignItems:"center"}}>

                          <img src="/assets/icons/cloud.svg" alt="Cloud Icon" style={{ width: "30px" }} />
                          <Typography sx={{fontFamily}}>OR</Typography>
                          <CustomButton>Upload</CustomButton>
                          </Box>
                        </Box>
                        </Box>

                        {/* Audience Selection */}
                        <Box sx={{ my: 1 }}>
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
                        <Box sx={{ textAlign: 'end', my: 1.5 }}>
                            <CustomButton onClick={handlenav}>Add Offer</CustomButton>
                        </Box>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default AddOffers;
