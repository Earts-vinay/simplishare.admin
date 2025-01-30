import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../Custom/CustomButton'
import CustomTextField from '../Custom/CustomTextField'
import fontFamily from '../../utils/fonts'

const MoreFollowers = () => {
    return (
        <Box sx={{ mt: 3 }}>
            <Typography  sx={{fontFamily}}>Total Followers</Typography>
            <CustomTextField placeholder="Enter total followers" />

            <Typography sx={{fontFamily}} mt={2}>Target Followers</Typography>
            <CustomTextField placeholder="Enter target followers" />

            <Box sx={{ textAlign: "end", py:3 }}>
                <CustomButton > Save</CustomButton>
            </Box>
        </Box>
    )
}

export default MoreFollowers