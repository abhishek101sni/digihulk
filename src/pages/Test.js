import React from 'react'
// MUI
import { Typography, Box, Grid } from "@mui/material";
import { RotateRight } from '@mui/icons-material';

const Test = () => {
  return (
    <Box sx={{marginTop:"50px" , marginLeft:"100px"}}>
      <Box sx={{
        position:"relative",
        width:"250px",
        height:"320px",
        backgroundColor:"green"
      }}>
      <Box sx={{

        position:"absolute",
        width:"90%",
        height:"90%",
        transformStyle:"preserve-3d",
        transition:"all 0.5s ease",
        backgroundColor:"yellow"
      }}>
        <Box sx={{
            position:"absolute",
            width:"100%",
            height:"100%",
            backfaceVisibility:"hidden",
            backgroundColor:"#ffc728",
            color:"#333",
            transform:RotateRight("180deg")
        }}> </Box>
        <Box sx={{}}> </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Test
