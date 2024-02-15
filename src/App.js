import React from 'react'

// MUI
import { Box } from "@mui/material";

// PAGES
import Navigation from './navigation/Navigation';
import Footer from "./components/Footer/Footer"
import Ourexclusiveservice from './pages/Home/HomeComponents/OurExclusiveService/Ourexclusiveservice';
import Test from './pages/Test';

const App = () => {
  return (
    <Box>
      <Navigation/>
      {/* <Footer/>   */}
      {/* <Test/> */}
    </Box>
  )
}

export default App
