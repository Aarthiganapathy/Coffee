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
  Button,
} from '@mui/material';
import RectangleFi from '../../assets/image/coffee-type/Rectangle_Fi.png';
import RectangleS from '../../assets/image/coffee-type/Rectangle_S.png';
import RectangleT from '../../assets/image/coffee-type/Rectangle_T.png';
import RectangleF from '../../assets/image/coffee-type/Rectangle_F.png';
import { motion } from 'framer-motion';

const categoryItems = [
  {
    name: "Cappuccino",
    image: RectangleFi,
    description: "Creamy espresso with steamed milk foam"
  },
  {
    name: "Latte",
    image: RectangleS,
    description: "Espresso with lots of steamed milk"
  },
  {
    name: "Espresso",
    image: RectangleT,
    description: "Strong concentrated coffee shot"
  },
  {
    name: "Americano",
    image: RectangleF,
    description: "Espresso diluted with hot water"
  },
];

const CategoryCard = ({ name, image, description, index }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card sx={{ 
        
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        height: '200%',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.shadows[6],
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)'
          }
        }
      }}>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={name}
          sx={{
            objectFit: 'cover',
            filter: 'brightness(0.9)',
            transition: 'transform 0.5s ease'
          }}
        />
        <CardContent sx={{ 
          backgroundColor: theme.palette.background.paper,
          borderTop: `4px solid ${theme.palette.primary.main}`,
          textAlign: 'center'
        }}>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
            sx={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 2
            }}
          >
            {name}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              fontFamily: 'Playfair Display, serif',
            }}
          >
            {description}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{
              mt: 2,
              borderColor: theme.palette.secondary.main,
              color: theme.palette.secondary.main,
              fontFamily: 'Playfair Display, serif',
              borderRadius: '60px',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'rgb(152, 98, 54)',
                borderColor: '#4B3621',
                fontWeight: 600,
              }
            }}
          >
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Category = () => {
  const theme = useTheme();

  return (
    <Box 
      id="menu-section"
      sx={{ 
        py: 10,
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '300px',
          background: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              fontWeight: 700,
              fontFamily: 'Playfair Display, serif',
              color: theme.palette.text.primary,
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '80px',
                height: '4px',
                backgroundColor: theme.palette.primary.main,
                margin: '16px auto 0',
                borderRadius: '2px'
              }
            }}
          >
            Our Coffee Selection
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}
        sx={{ textAlign: 'center', mt: 6,
              px:7,
              py:1.5,
              height: '100%',
         }}>
          {categoryItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}

            
            >
              <CategoryCard 
                name={item.name} 
                image={item.image} 
                description={item.description}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              fontFamily: 'Playfair Display, serif',
              borderRadius: '60px',
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: '#4B3621',
                transform: 'translateY(-3px)',
                boxShadow: theme.shadows[4]
              },
              transition: 'all 0.3s ease'
            }}
          >
            View Full Menu
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Category;