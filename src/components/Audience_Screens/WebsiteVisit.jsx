import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../Custom/CustomButton'
import CustomTextField from '../Custom/CustomTextField'
import fontFamily from '../../utils/fonts'

const WebsiteVisit = () => {
    return (
        <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontFamily }}>Website URL</Typography>
            <CustomTextField placeholder="Enter website URL" />
            <Box sx={{ textAlign: "end", py:3 }}>
                <CustomButton > Save</CustomButton>
            </Box>
        </Box>
    )
}

export default WebsiteVisit