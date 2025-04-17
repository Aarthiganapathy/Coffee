import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  useTheme,
  Container,
} from '@mui/material';
import badge from '../../assets/image/advance-coffee/badge.png';
import price from '../../assets/image/advance-coffee/best-price.png';
import beans from '../../assets/image/advance-coffee/coffee-beans.png';
import coffeecup from '../../assets/image/advance-coffee/coffee-cup.svg';
import { motion } from 'framer-motion';
import coffee_blast from '../../assets/image/coffee_blast.png';

const categoryItems = [
  {
    name: "Supreme Beans",
    image: beans,
    description: "Beans that provide exceptional taste"
  },
  {
    name: "High Quality",
    image: badge,
    description: "We provide the highest quality coffee"
  },
  {
    name: "Extraordinary",
    image: coffeecup,
    description: "Coffee like you've never tasted before"
  },
  {
    name: "Affordable Price",
    image: price,
    description: "Premium quality at reasonable prices"
  },
];

const AdvanceCard = ({ name, image, description, index }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card sx={{ 
        borderRadius: '1px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        height: '100%',
       
        boxShadow: theme.shadows[4],
        backgroundColor: theme.palette.background.picker,
        '&:hover': {
          boxShadow: theme.shadows[10],
          transform: 'translateY(-5px)',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)'
          }
        }
      }}>
        <Box sx={{ 
          position: 'relative', 
          height: '220px', 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px:3,
        }}>
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={{
              objectFit: 'contain',
              width: '60%',
              height: '60%',
              transition: 'transform 0.5s ease',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
              px:3,
            }}
          />
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.3) 100%)',
            
          }} />
        </Box>
        <CardContent sx={{ 
          textAlign: 'center',
          padding: theme.spacing(3),
          px:3,
          
        }}>
          <Typography 
            gutterBottom 
            variant="h4" 
            component="div"
            sx={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { xs: '1.3rem', md: '1.5rem' }
            }}
          >
            {name}
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 200,
              lineHeight: 1.5,
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            {description}
          </Typography>
          
        </CardContent>
        
      </Card>
    </motion.div>
  );
};

const Advance = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        py: { xs: 7, md: 19 },
        position: 'relative',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[100]} %)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 0%, transparent 30%)',
          zIndex: 0,
          
          
          
        }
        
      }}
    >
        <Box sx={{ 
                position: 'absolute',
                top: 50,
                left: 20,
                width: '100%',
                height: '90%',
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
                    opacity: 0.9// Make it subtle
                  }} 
                />
              </Box>
         
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1,px:4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            
          <Box sx={{ 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            mb: { xs: 6, md: 10 },
            px: 1.0,
          }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 3,
                fontWeight: 700,
                fontFamily: 'Playfair Display, serif',
                color: theme.palette.text.primary,
                fontSize: { xs: '2.2rem', md: '3rem' },
                position: 'relative',
                px: 1,
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '120px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  margin: '24px auto 0',
                  borderRadius: '4px'
                }
              }}
            >
              Why Choose Our Coffee?
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                color: theme.palette.text.secondary,
                lineHeight: 1.8,
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 300,
                px: { xs: 2, md: 0 }
              }}
            >
              Start your day right with our exceptional coffee. Discover flavors that will elevate your coffee experience. 
              We're committed to providing only the best for our customers.
            </Typography>
          </Box>
        </motion.div>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {categoryItems.map((item, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} 
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <AdvanceCard 
                name={item.name} 
                image={item.image} 
                description={item.description}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Advance;