import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CoffeeIcon from '@mui/icons-material/Coffee';
import aboutImage from '../../assets/image/cup_box.png'; 

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      pt: { xs: 8, md: 12 },
      pb: { xs: 8, md: 12 },
      backgroundColor: theme.palette.background.default
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4,
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -12,
                    left: 0,
                    width: '80px',
                    height: '4px',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '2px'
                  }
                }}
              >
                Our Story
              </Typography>
              
              <Typography 
                variant="body1" 
                paragraph
                sx={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: theme.palette.text.primary,
                  mb: 3
                }}
              >
                Founded in 2010, Bean Scene began as a small coffee cart in downtown Seattle. Our passion for exceptional coffee and community quickly grew into what is now one of the most beloved coffee shops in the Pacific Northwest.
              </Typography>
              
              <Typography 
                variant="body1" 
                paragraph
                sx={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: theme.palette.text.primary,
                  mb: 3
                }}
              >
                We travel the world to source the finest beans, then roast them to perfection in small batches to ensure maximum freshness and flavor in every cup.
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                <CoffeeIcon 
                  color="primary" 
                  sx={{ 
                    mr: 2, 
                    fontSize: '2.5rem',
                    transform: 'rotate(-15deg)'
                  }} 
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic',
                    color: theme.palette.primary.main
                  }}
                >
                  "Every bean tells a story - we're just here to help it shine"
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                component="img"
                src={aboutImage}
                alt="About Bean Scene"
                sx={{
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: theme.shadows[10],
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
        
        {/* Our Values Section */}
        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 6,
              textAlign: 'center',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              color: theme.palette.primary.main
            }}
          >
            Our Values
          </Typography>
          
          <Grid container spacing={4}>
            {[
              {
                title: 'Quality',
                description: 'We source only the top 1% of Arabica beans from sustainable farms worldwide.'
              },
              {
                title: 'Community',
                description: 'We believe coffee brings people together and support local artists and musicians.'
              },
              {
                title: 'Sustainability',
                description: 'From compostable cups to carbon-neutral shipping, we care for our planet.'
              },
              {
                title: 'Innovation',
                description: 'Constantly experimenting with new brewing methods and flavor profiles.'
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box sx={{ 
                    p: 3,
                    height: '100%',
                    backgroundColor: theme.palette.mode === 'light' 
                      ? theme.palette.grey[100] 
                      : theme.palette.grey[900],
                    borderRadius: '12px',
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: theme.shadows[4],
                      transform: 'translateY(-5px)'
                    }
                  }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 2,
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 600,
                        color: theme.palette.primary.main
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{
                        fontFamily: 'Playfair Display, serif',
                        lineHeight: 1.7,
                        color: theme.palette.text.secondary
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;