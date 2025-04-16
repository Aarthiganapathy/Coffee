import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import cup from '../../assets/image/cup.png'; 
import coffee_blast from '../../assets/image/coffee_blast.png';

export const Content = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ position: 'relative' }}>
      
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          flexDirection: { xs: 'column-reverse', md: 'row' },
          minHeight: '80vh',
          px: { xs: 2, md: 8 },
          py: 4,
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Text Content */}
        <Box sx={{
          flex: 1,
          textAlign: { xs: 'center', md: 'left' },
          px: { xs: 2, md: 4 },
        }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 3,
              lineHeight: 1.2,
              fontFamily:''
              
            }}
          >
            Discover the best coffee
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              color: theme.palette.text.secondary,
              maxWidth: '500px',
              lineHeight: 1.8,
              mb: 4,
              mx: { xs: 'auto', md: 0 }
            }}
          >
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              fontFamily: 'Playfair Display, serif',
              borderRadius: '60px',
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Learn More
          </Button>
          <Box sx={{ 
        position: 'absolute',
        top: 20,
        left: 20,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <img 
          src={coffee_blast} 
          alt="Coffee blast background" 
          style={{ 
            width: '90%',
            height: '90%',
            objectFit: 'cover',
            opacity: 0.1 // Make it subtle
          }} 
        />
      </Box>
        </Box>

        {/* Coffee Cup Image */}
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          p: 4,
          maxWidth: { xs: '300px', md: '100%' },
          position: 'relative',
          zIndex: 2
        }}>
          <img 
            src={cup} 
            alt="Coffee cup" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxWidth: '600px', 
              objectFit: 'contain',
              filter: 'drop-shadow(0 10px 20px rgba(193, 58, 58, 0.1))'
            }} 
          />
        </Box>
      </Box>
    </Box>
  );
}