import * as React from 'react';
import { Box, TextField, InputAdornment, Typography, useTheme, useMediaQuery } from "@mui/material";
import Fooderimage from '../assets/image/bg_image.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import cup from '../assets/image/cup.png'; 
import { motion } from 'framer-motion';

const SearchBox = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        minHeight: { xs: '436px', sm: '506px', md: '600px' },
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(18, 17, 17, 0.3)), url(${Fooderimage})`,
        backgroundColor: '#5D4037',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        textAlign: 'center'
      }}
    >
      {/* Coffee Cup Animation - Different positioning based on screen size */}
      {!isMobile && (
        <Box sx={{
          position: 'absolute',
          right: isTablet ? '50px' : '100px',
          top: isTablet ? '50px' : '100px',
          width: { sm: '150px', md: '100px', lg: '250px' },
          opacity: 0.9,
          zIndex: 1,
        }}>
          <motion.img 
            src={cup} 
            alt="Coffee cup" 
            style={{ 
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 10px 20px rgba(39, 34, 34, 0.2))',
            }}
            animate={{
              z: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </Box>
      )}

      <Box sx={{ 
        maxWidth: '1200px', 
        mx: 'auto',
        mb: 4,
        px: 2,
        position: 'relative',
        zIndex: 2
      }}>
        <Typography 
          variant="h3" 
          component="h2" 
          sx={{ 
            mb: 3,
            fontWeight: 700,
            fontFamily: 'Playfair Display, serif',
            color: theme.palette.common.white,
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Subscribe to get the Latest News
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            color: theme.palette.grey[300],
            maxWidth: '600px',
            lineHeight: 1.8,
            mx: 'auto',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          Don't miss out on our latest news, updates, tips and special offers
        </Typography>
      </Box>
      
      <Box sx={{
        width: '100%',
        maxWidth: '800px',
        px: 2,
        position: 'relative',
        zIndex: 2
      }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon sx={{ 
                  color: theme.palette.grey[700],
                  fontSize: { xs: '1.2rem', sm: '1.5rem' }
                }} />
              </InputAdornment>
            ),
            sx: {
              py: { xs: 0.5, sm: 1 },
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }
          }}
          sx={{
            backgroundColor: theme.palette.background.default,
            borderRadius: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: theme.palette.grey[300],
                borderWidth: isMobile ? '1px' : '2px'
              },
              '&:hover fieldset': {
                borderColor: theme.palette.primary.main,
              },
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main,
                boxShadow: `0 0 0 2px ${theme.palette.primary.light}`
              }
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchBox;