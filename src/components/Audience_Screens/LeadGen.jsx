import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../Custom/CustomButton'
import CustomTextField from '../Custom/CustomTextField'
import fontFamily from '../../utils/fonts'

const LeadGen = () => {
    return (
        <Box sx={{ mt: 1 }}>
            <Typography sx={{fontFamily}}>To Contact</Typography>
            <Typography mt={1} sx={{fontFamily}}>Email</Typography>

            <CustomTextField placeholder="Enter Your email" type="email" onChange={""} />

            <Typography  mt={1} sx={{fontFamily}}>Mobile</Typography>
            <TextField fullWidth variant="outlined" type="number" placeholder="Enter Your number" sx={{ mt: 1 }} />

            <Typography mt={1} sx={{fontFamily}}>Connect to CRM</Typography>
            <CustomTextField placeholder="Enter you CRM link" />
            <Button variant='outlined' sx={{ marginTop: "10px" }}>Connect</Button>

            <Box sx={{ textAlign: "end", py:3 }}>
                <CustomButton > Save</CustomButton>
            </Box>
        </Box>
    )
}

export default LeadGen