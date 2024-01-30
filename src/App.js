import React from 'react'

// MUI
import { Box } from "@mui/material";

// PAGES
import Navigation from './navigation/Navigation';
import Footer from "./components/Footer/Footer"
import Ourexclusiveservice from './pages/Home/HomeComponents/OurExclusiveService/Ourexclusiveservice';

const App = () => {
  return (
    <Box>
      <Navigation/>
      {/* <Footer/>   */}
    </Box>
  )
}

export default App
