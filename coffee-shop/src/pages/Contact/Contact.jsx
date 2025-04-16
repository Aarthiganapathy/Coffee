import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import coffee_blast from '../../assets/image/coffee_blast.png';

const Contact = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      minHeight: '80vh',
      py: 8,
      backgroundColor: theme.palette.background.default,
      position: 'relative' // Added for absolute positioning context
    }}>
      {/* Background image */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <img 
          src={coffee_blast} 
          alt="Coffee blast background" 
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.1
          }} 
        />
      </Box>
      
      {/* Content */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ 
          fontFamily: 'Playfair Display, serif',
          color: theme.palette.primary.main,
          mb: 4
        }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We'd love to hear from you! Reach out to us with any questions or feedback.
          Bean Scene
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Coffee, a globally beloved beverage, is brewed from roasted and ground coffee beans. 
          The drink is produced from the seeds of the coffee plant, which is a bush or tree, 
          typically grown in tropical regions. After the coffee beans are harvested and dried, 
          they are roasted and ground before being brewed with hot water, resulting in the 
          familiar dark-colored and flavorful beverage.
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;