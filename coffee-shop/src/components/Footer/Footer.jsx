import React from 'react';
import { 
  Box,
  
  Container, 
  Grid, 
  Typography, 
  Link as MuiLink,
  Divider,
  styled,
  Button, 
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Email, Phone, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { useTheme } from '@mui/material/styles';

import Fooderimage from '../../assets/image/bg_image.png';
import cupbox from '../../assets/image/cup_box.png'; 

// Enhanced styled components with better light/dark mode handling
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' 
    ? theme.palette.grey[40]  // Lighter background for light mode
    : theme.palette.background.paper,
  padding: theme.spacing(8, 0),
  borderTop: `1px solid ${theme.palette.divider}`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: theme.palette.mode === 'light'
      ? `linear-gradient(to bottom, ${theme.palette.grey[100]}, ${theme.palette.grey[50]})`
      : `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
    zIndex: 0
  }
}));

const FooterLink = styled(MuiLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1.5),
  textDecoration: 'none',
  color: theme.palette.mode === 'light' 
    ? theme.palette.grey[800]  // Darker text for light mode
    : theme.palette.text.primary,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateX(5px)',
    '&::before': {
      width: '8px',
      opacity: 1
    }
  },
  '&::before': {
    content: '""',
    display: 'block',
    width: 0,
    height: '2px',
    background: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    opacity: 0
  }
}));

const SocialIcon = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 44,
  height: 44,
  borderRadius: '50%',
  backgroundColor: theme.palette.mode === 'light' 
    ? theme.palette.grey[200] 
    : theme.palette.grey[700],
  color: theme.palette.mode === 'light'
    ? theme.palette.grey[700]
    : theme.palette.text.primary,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: `0 4px 12px ${theme.palette.primary.main}40`
  },
  transition: 'all 0.3s ease'
}));

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const socialIcons = [
    { icon: <Facebook fontSize="small" />, label: 'Facebook' },
    { icon: <Instagram fontSize="small" />, label: 'Instagram' },
    { icon: <Twitter fontSize="small" />, label: 'Twitter' }
  ];

  const contactItems = [
    { icon: <LocationOn color="primary" />, text: '282 Coffee Street, Velachery, WA 981001' },
    { icon: <Phone color="primary" />, text: '(206) 555-1234' },
    { icon: <Email color="primary" />, text: 'coffee@beanscene.com' }
  ];
  

  return (
   
    
    <FooterContainer component="footer">
      {/* Enhanced background image with better light mode visibility */}
      
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        backgroundImage: `url(${Fooderimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: theme.palette.mode === 'light' 
          ? 'sepia(30%) brightness(110%)' 
          : 'none'
      }} />
      
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? '0px' : '-100px' }}
          transition={{ duration: 0.8 }}
        >
           <Box sx={{
          position: 'absolute',
          right: 100,
          top: '80px',
          width: { xs: '120px', md: '200px' },
          opacity: 0.9,
          zIndex: 0,
          display: { xs: 'none', md: 'block' }
        }}>
                <motion.img 
                  src={cupbox} 
                  alt="Coffee cup" 
                  style={{ 
                    width: '200%', 
                    height: 'auto', 
                    maxWidth: '600px', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 20px rgba(39, 34, 34, 0.1))',
                    display: 'inline-block',
                    justifyContent: 'right', 
                    alignItems: 'left',
                    
                  }} 
                />
              </Box>
             
        
          
        
          <Grid container spacing={4}>
            {/* About Column */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 3,
                  '&:hover': {
                    '& .coffee-icon': {
                      transform: 'rotate(15deg) scale(1.1)'
                    }
                  }
                }}>
                  <CoffeeIcon 
                    className="coffee-icon"
                    color="primary" 
                    sx={{ 
                      mr: 1.5, 
                      fontSize: '2.2rem',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700, 
                      fontFamily: 'Playfair Display, serif',
                      background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Bean Scene
                  </Typography>
                </Box>
              </motion.div>
              
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  fontFamily: 'Playfair Display, serif',
                  lineHeight: 1.7,
                  color: theme.palette.mode === 'light'
                    ? theme.palette.grey[700]
                    : theme.palette.text.secondary
                }}
              >
                Your perfect coffee experience starts here. We source the finest beans and craft each cup with care.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                {socialIcons.map((social, index) => (
                  <SocialIcon
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </SocialIcon>
                ))}
              </Box>
            </Grid>
            
            {/* Quick Links Column */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600, 
                  fontFamily: 'Playfair Display, serif',
                  position: 'relative',
                  display: 'inline-block',
                  color: theme.palette.mode === 'light'
                    ? theme.palette.grey[900]
                    : theme.palette.text.primary,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: theme.palette.primary.main,
                    borderRadius: '3px'
                  }
                }}
              >
                Quick Links
              </Typography>
              <Box component="nav" sx={{ mt: 3 }}>
                {['Home', 'About Us', 'Menu', 'Contact Us'].map((item, index) => (
                  <FooterLink 
                    key={index}
                    component={Link} 
                    to={`/${item.toLowerCase().replace(' ', '')}`} 
                    sx={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item}
                  </FooterLink>
                ))}
              </Box>
            </Grid>
            
            {/* Contact Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600, 
                  fontFamily: 'Playfair Display, serif',
                  position: 'relative',
                  display: 'inline-block',
                  color: theme.palette.mode === 'light'
                    ? theme.palette.grey[900]
                    : theme.palette.text.primary,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: theme.palette.primary.main,
                    borderRadius: '3px'
                  }
                }}
              >
                Contact Us
              </Typography>
              
              <Box sx={{ mt: 3 }}>
                {contactItems.map((item, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      mb: 2.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    <Box sx={{ mr: 1.5, mt: 0.5 }}>{item.icon}</Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontFamily: 'Playfair Display, serif',
                        lineHeight: 1.5,
                        color: theme.palette.mode === 'light'
                          ? theme.palette.grey[700]
                          : theme.palette.text.secondary
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            
            {/* Hours Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600, 
                  fontFamily: 'Playfair Display, serif',
                  position: 'relative',
                  display: 'inline-block',
                  color: theme.palette.mode === 'light'
                    ? theme.palette.grey[900]
                    : theme.palette.text.primary,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: theme.palette.primary.main,
                    borderRadius: '3px'
                  }
                }}
              >
                Opening Hours
              </Typography>
              
              <Box sx={{ mt: 3 }}>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    fontFamily: 'Playfair Display, serif',
                    lineHeight: 1.7,
                    color: theme.palette.mode === 'light'
                      ? theme.palette.grey[700]
                      : theme.palette.text.secondary
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 600 }}>Monday - Friday:</Box> 6:30 AM - 8:00 PM
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    fontFamily: 'Playfair Display, serif',
                    lineHeight: 1.7,
                    color: theme.palette.mode === 'light'
                      ? theme.palette.grey[700]
                      : theme.palette.text.secondary
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 600 }}>Saturday - Sunday:</Box> 7:00 AM - 9:00 PM
                </Typography>
                
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outlined"
                    size="medium"
                    startIcon={<CoffeeIcon />}
                    sx={{
                      mt: 2,
                      borderWidth: '2px',
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      fontFamily: 'Playfair Display, serif',
                      borderRadius: '60px',
                      px: 3,
                      py: 1,
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.light + '20',
                        borderColor: theme.palette.primary.dark,
                        borderWidth: '2px',
                        boxShadow: `0 4px 12px ${theme.palette.primary.main}20`
                      }
                    }}
                  >
                    Reserve a Table
                  </Button>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
        
        <Divider 
          sx={{ 
            my: 6, 
            borderColor: theme.palette.mode === 'light' 
              ? 'rgba(0, 0, 0, 0.08)' 
              : 'rgba(255, 255, 255, 0.08)',
            borderWidth: '1px'
          }} 
        />
        
        <Box 
          sx={{ 
            textAlign: 'center',
            opacity: 0.8,
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 1
            }
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '0.95rem',
              letterSpacing: '0.5px',
              color: theme.palette.mode === 'light'
                ? theme.palette.grey[700]
                : theme.palette.text.secondary
            }}
          >
            © {new Date().getFullYear()} Bean Scene Coffee. All rights reserved.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mt: 1.5, 
              fontFamily: 'Playfair Display, serif',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              color: theme.palette.mode === 'light'
                ? theme.palette.grey[700]
                : theme.palette.text.secondary
            }}
          >
            Designed with <Box component="span" sx={{ color: theme.palette.error.main }}>❤️</Box> and <CoffeeIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
    
  );
};

export default Footer;