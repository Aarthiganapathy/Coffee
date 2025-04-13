import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box, Typography, Link, Stack, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['Home', 'Menu', 'About Us', 'Contact Us'];

  const drawer = (
    <Box 
      sx={{ 
        width: 250,
        padding: 2,
        backgroundColor: '#f5f5f5',
        height: '100%'
      }}
      onClick={handleDrawerToggle}
    >
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item}
            onClick={() => console.info(`${item} clicked`)}
            sx={{
              '&:hover': {
                color: '#5a8f3d',
                backgroundColor: 'rgba(90, 143, 61, 0.1)',
                borderRadius: '4px'
              }
            }}
          >
            <ListItemText 
              primary={item} 
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
          <Button 
            variant="contained" 
            fullWidth
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
            fullWidth
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
        </ListItem>
      </List>
    </Box>
  );

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

          {/* Desktop Navigation Links - Hidden on mobile */}
          <Stack 
            direction="row" 
            spacing={2}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center'
            }}
          >
            {navItems.map((item) => (
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

          {/* Mobile menu button - Hidden on desktop */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: 'none' },
              color: '#5a8f3d'
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;