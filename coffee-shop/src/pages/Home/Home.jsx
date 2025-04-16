import React from 'react';
import { Box, Typography, Button, Container, Grid, styled } from '@mui/material';
import { Coffee } from '@mui/icons-material';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1507133750040-4a8f57021571')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: theme.palette.common.white,
  padding: theme.spacing(4),
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  padding: theme.spacing(3),
  height: '100%',
  borderRadius: theme.shape.borderRadius,
}));

const CoffeeImageBox = styled(Box)(({ theme }) => ({
  height: '100%',
  backgroundImage: 'url(https://images.unsplash.com/photo-1497935586351-b67a49e012bf)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '300px',
  borderRadius: theme.shape.borderRadius,
}));

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <HeroSection>
        <Box>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Welcome to Bean Scene
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
            Discover the perfect coffee for your taste
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            startIcon={<Coffee />}
            sx={{ 
              mt: 3,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 3,
              }
            }}
          >
            Explore Our Menu
          </Button>
        </Box>
      </HeroSection>
      
      <Grid container spacing={4} sx={{ my: 5 }}>
        <Grid item xs={12} md={6}>
          <FeatureCard>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Our Specialty Coffees
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              Experience the rich flavors of our handcrafted coffee blends, sourced from the finest beans around the world.
            </Typography>
            <Button 
              variant="outlined" 
              sx={{ 
                mt: 2,
                color: 'primary.main',
                borderColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  borderColor: 'primary.dark',
                }
              }}
            >
              Learn More
            </Button>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <CoffeeImageBox />
        </Grid>
      </Grid>

      {/* Additional Featured Section */}
      <Grid container spacing={4} sx={{ my: 10 }}>
        <Grid item xs={12} md={4}>
          <FeatureCard sx={{ backgroundColor: 'background.paper' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Fresh Beans Daily
            </Typography>
            <Typography variant="body1">
              We roast our beans in-house to ensure maximum freshness and flavor.
            </Typography>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard sx={{ backgroundColor: 'background.paper' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Expert Baristas
            </Typography>
            <Typography variant="body1">
              Our skilled baristas craft each cup with precision and care.
            </Typography>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard sx={{ backgroundColor: 'background.paper' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Cozy Atmosphere
            </Typography>
            <Typography variant="body1">
              Relax in our welcoming space designed for coffee lovers.
            </Typography>
          </FeatureCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;