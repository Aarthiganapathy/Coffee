import * as React from 'react';
import { Box, TextField, InputAdornment, Typography, useTheme } from "@mui/material";
import Fooderimage from '../assets/image/bg_image.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchBox = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: { xs: '436px', md: '506px' },
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(18, 17, 17, 0.3)), url(${Fooderimage})`,
        backgroundColor: '#5D4037',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { xs: 'scroll', md: 'scroll' },
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        textAlign: 'center'
      }}
    >
      <Box sx={{ 
        maxWidth: '1200px', 
        mx: 'auto',
        mb: 4,
        px: 2 
      }}>
        <Typography 
          variant="h3" 
          component="h2" 
          sx={{ 
            mb: 3,
            fontWeight: 700,
            fontFamily: 'Playfair Display, serif',
            color: theme.palette.common.white,
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          Subscribe to get the Latest News
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1.1rem", md: "1.25rem" },
            color: theme.palette.grey[300],
            maxWidth: '600px',
            lineHeight: 1.8,
            mx: 'auto'
          }}
        >
          Don't miss out on our latest news, updates, tips and special offers
        </Typography>
      </Box>
      
      <TextField
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon sx={{ color: 'grey.700' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          backgroundColor: theme.palette.background.default,
          borderRadius: 2,
          width: { xs: '100%', sm: '80%', md: '60%' },
          maxWidth: '600px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.grey[300],
            },
            '&:hover fieldset': {
              borderColor: theme.palette.primary.main,
            },
          }
        }}
      />
    </Box>
  );
};

export default SearchBox;
