import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../Custom/CustomButton'
import fontFamily from '../../utils/fonts'
const ProfileTag = () => {
    return (
        <Box sx={{ mt: 3 }}>
            <Typography sx={{fontFamily}}>Profile Tags</Typography>
            <TextField
                id="outlined-multiline-static"
                label="Add you tags"
                multiline
                fullWidth
                sx={{ marginTop: "10px",fontFamily }}
                rows={5}
                variant="outlined"
            />

            <Box sx={{ textAlign: "end", py:3}}>
                <CustomButton > Save</CustomButton>
            </Box>
        </Box>
    )
}

export default ProfileTag