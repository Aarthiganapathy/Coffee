import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import { Navbar, HeroText } from "./components/Header/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { Content } from "./components/content/Content";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import coffeeshop from '/coffee_image.png';
import Contact from "./pages/Contact/Contact"; 
import About from "./pages/About/About";
import  Advance from "./components/different/Advance";
import Fooderimage from './assets/image/bg_image.png';
import SearchBox from "./components/SearchBox"; 

function App() {
  return (
    <Router> 
      <ThemeProvider>
        <Box sx={{ 
          position: 'relative', 
          minHeight: '100vh',
          overflowX: 'hidden',
          backgroundColor: 'background.default',
          color: 'text.primary'
        }}>
          <Navbar />
          <Routes>
            {/* Home Route */}
            <Route path="/" element={
              
              <>
                {/* Hero Section */}
                <Box sx={{
                  position: 'relative',
                  height: { 
                    xs: '70vh', 
                    sm: '80vh',
                    md: '90vh',
                    lg: '100vh' 
                  },
                  minHeight: { xs: '500px', md: '600px' },
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Box sx={{
                    height: { 
                      xs: 'calc(70vh - 64px)', 
                      sm: 'calc(80vh - 64px)',
                      md: 'calc(90vh - 64px)',
                      lg: 'calc(100vh - 64px)' 
                    },
                    minHeight: { xs: '436px', md: '536px' },
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${coffeeshop})`,
                    backgroundColor: '#5D4037', // Fallback color
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: { xs: 'scroll', md: 'fixed' },
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <HeroText />
                  </Box>
                </Box>
               


                
                {/* Main Content */}
                <Box component="main" sx={{ 
                  pt: { xs: 4, md: 6 }, 
                  pb: { xs: 4, md: 6 },
                  maxWidth: '1800px',
                  margin: '0 auto'
                }}>
                  <Content />
                  <Category />
                </Box>
              </>
            } />

            {/* Menu Route - Redirects to home and scrolls to menu */}
            <Route path="/menu" element={
              <Box component="main" sx={{ pt: 8 }}>
               
              </Box>
            } />

            {/* Contact Route */}
            <Route path="/contact" element={
              <Box component="main" sx={{ pt: 8 }}>
                
                <Contact />
              </Box>
            } />
            
            {/* About Route */}
            <Route path="/about" element={
              <Box component="main" sx={{ pt: 8 }}>
                
                <About />
              </Box>
            } />
            
          </Routes>
          <Advance />
          <SearchBox />
          {/* Footer */}
         
   
          <Footer />
          </Box>
          
        
      </ThemeProvider>
    </Router> 
  );
}

export default App;