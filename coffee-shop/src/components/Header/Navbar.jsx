import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box, Typography, Link, Stack, Button } from "@mui/material";
import { Box, Typography, Link, Stack, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
export const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo Section */}
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontFamily: '"Clicker Script", cursive', 
              color: "#5a8f3d",
              fontStyle: "italic",
            }}
          >
            Bean Scene
          </Typography>

          {/* Navigation Links */}
          <Stack 
            direction="row" 
            spacing={2}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center'
            }}
          >
            {['Home', 'Menu', 'About Us', 'Contact Us'].map((item) => (
              <Link
                key={item}
                component="button"
                variant="body1"
                onClick={() => console.info(`${item} clicked`)}
                sx={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: 500,
                  fontFamily: 'Playfair Display, serif',
                  px: 2,
                  py: 1,
                  '&:hover': {
                    color: '#5a8f3d',
                    backgroundColor: 'rgba(90, 143, 61, 0.1)',
                    borderRadius: '4px'
                  }
                }}
              >
                {item}
              </Link>
            ))}
            <Button 
              variant="contained" 
              sx={{
                backgroundColor: '#5a8f3d',
                color: 'white',
                fontFamily: 'Playfair Display, serif',
                borderRadius:'60px',
                '&:hover': {
                  backgroundColor: '#4a7d35'
                }
              }}
            >
              Sign in
            </Button>
            <Button 
              variant="contained" 
              sx={{
                backgroundColor: '#5a8f3d',
                color: 'white',
                fontFamily: 'Playfair Display, serif',
                borderRadius:'60px',
                '&:hover': {
                  backgroundColor: '#4a7d35'
                }
              }}
            >
              Sign up
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;