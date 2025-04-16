import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box, Typography, Link, Stack, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, AppBar, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Fade from '@mui/material/Fade';
import { MaterialUISwitch } from "../../context/ThemeContext";
import { useTheme as useThemeContext } from "../../context/ThemeContext";
import { useNavigate } from 'react-router-dom';
import CoffeeIcon from '@mui/icons-material/Coffee';

export const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const handleMenuClick = () => {
    if (window.location.pathname === '/') {
      // If already on home page, scroll to menu
      const menuSection = document.getElementById('menu-section');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate home then scroll
      navigate('/');
      setTimeout(() => {
        const menuSection = document.getElementById('menu-section');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' ,isMenu: true },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // Background colors for different modes
  const navbarBgColor = mode === 'dark' 
    ? 'rgba(18, 18, 18, 0.9)' // Dark mode with slight transparency
    : 'rgba(255, 255, 255, 0.9)'; // Light mode with slight transparency

  const drawerBgColor = mode === 'dark'
    ? 'rgba(30, 30, 30, 0.98)' // Slightly lighter than navbar for contrast
    : 'rgba(255, 255, 255, 0.98)';

  const drawer = (
    <Box 
      sx={{ 
        width: 250,
        padding: 2,
        backgroundColor: drawerBgColor,
        height: '100%',
        color: theme.palette.text.primary,
        backdropFilter: 'blur(10px)',
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.name}
            onClick={() => {
              navigate(item.path);
              setMobileOpen(false);
            }}
            sx={{
              '&:hover': {
                color: theme.palette.primary.main,
                backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(75, 54, 33, 0.1)',
                borderRadius: '4px'
              }
            }}
          >
            <ListItemText 
              primary={item.name} 
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', gap: 1, mt: 2 }}>
          <Button 
            variant="contained" 
            fullWidth
            onClick={() => navigate('/signin')}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              fontFamily: 'Playfair Display, serif',
              borderRadius: '60px',
              '&:hover': {
                backgroundColor: '#4B3621',
                transform: 'translateY(-2px)',
                boxShadow: theme.shadows[2]
              },
              transition: 'all 0.3s ease'
            }}
          >
            Sign in
          </Button>
          <Button 
            variant="outlined" 
            fullWidth
            onClick={() => navigate('/signup')}
            sx={{
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              fontFamily: 'Playfair Display, serif',
              borderRadius: '60px',
              '&:hover': {
                backgroundColor: mode === 'dark' ? 'rgba(75, 54, 33, 0.1)' : 'rgba(240, 229, 218, 0.67)',
                borderColor: theme.palette.primary.dark,
              },
              transition: 'all 0.3s ease'
            }}
          >
            Sign up
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
            <MaterialUISwitch checked={mode === 'dark'} onChange={toggleTheme} />
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: navbarBgColor,
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
          zIndex: theme.zIndex.drawer + 1
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo Section */}
            <Box 
              onClick={() => navigate('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                flexGrow: 1
              }}
            >
              <CoffeeIcon 
                fontSize="large" 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }} 
              />
              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Clicker Script", cursive', 
                  color: theme.palette.primary.main,
                  fontStyle: "italic",
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  '&:hover': {
                    transform: 'scale(1.02)'
                  },
                  transition: 'transform 0.3s ease'
                }}
              >
                <b>Bean Scene</b>
              </Typography>
            </Box>

            {/* Desktop Navigation Links */}
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
                  key={item.name}
                  component="button"
                  variant="body1"
                  onClick={() => {
                    if (item.isMenu) {
                      handleMenuClick();
                    } else {
                      navigate(item.path);
                    }
                  }}
                  sx={{
                    textDecoration: 'none',
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    fontFamily: 'Playfair Display, serif',
                    px: 2,
                    py: 1,
                    position: 'relative',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      '&::after': {
                        width: '100%'
                      }
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      backgroundColor: theme.palette.primary.main,
                      transition: 'width 0.3s ease'
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="contained" 
                onClick={() => navigate('/signin')}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  fontFamily: 'Playfair Display, serif',
                  borderRadius: '60px',
                  px: 3,
                  '&:hover': {
                    backgroundColor: '#4B3621',
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[4]
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Sign in
              </Button>
              <Button 
                variant="outlined"
                onClick={() => navigate('/signup')}
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  fontFamily: 'Playfair Display, serif',
                  borderRadius: '60px',
                  px: 3,
                  '&:hover': {
                    backgroundColor: mode === 'dark' ? 'rgba(75, 54, 33, 0.1)' : 'rgba(240, 229, 218, 0.67)',
                    borderColor: theme.palette.primary.dark,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Sign up
              </Button>
              <MaterialUISwitch checked={mode === 'dark'} onChange={toggleTheme} />
            </Stack>

            {/* Mobile menu button */}
            <Box sx={{ display: { md: 'none' }, ml: 2 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: theme.palette.primary.main
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            backgroundColor: drawerBgColor,
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box sx={{ 
        height: { xs: 64, sm: 70, md: 80 }, // Adjust based on your navbar height
      }} />
    </>
  );
};
export const HeroText = () => {
  const theme = useTheme();
  
  return (
    <Fade in={true} timeout={1000}>
    <Box sx={{
      position: 'absolute',
      top: { xs: '50%', sm: '50%', md: '50%' },
      left: { xs: '50%', md: '50%' },
      transform: { xs: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' },
      width: { xs: '90%', sm: '85%', md: '80%', lg: '70%' },
      maxWidth: '800px',
      textAlign: 'center',
      zIndex: 1,
      px: { xs: 2, sm: 3, md: 4 }
    }}>
                <Typography
          variant="h3"
          component="div"
          sx={{
            fontSize: { 
              xs: '1.8rem', 
              sm: '2.5rem', 
              md: '3.2rem', 
              lg: '4rem',
              xl: '4.5rem'
            },
            px: { xs: 1, sm: 2, md: 3 },
            fontWeight: 500,
            color: theme.palette.primary.contrastText,
            mb: { xs: 2, sm: 3, md: 4 },
            lineHeight: { xs: 1.3, sm: 1.2 },
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: 'Playfair Display, serif'
          }}
        >
          {"We've got your morning covered with Coffee"}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem", lg: "1.5rem" },
            color: theme.palette.primary.contrastText,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
            mb: 4,
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            fontFamily: 'Playfair Display, serif'
          }}
        >
          It is best to start your day with a cup of coffee. Discover the best flavors coffee you will ever have. We provide the best for our customers.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
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
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: '#4B3621',
                transform: 'translateY(-3px)',
                boxShadow: theme.shadows[4]
              },
              transition: 'all 0.3s ease'
            }}
          >
            Order Now
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            sx={{
              borderColor: theme.palette.primary.contrastText,
              color: theme.palette.primary.contrastText,
              fontFamily: 'Playfair Display, serif',
              borderRadius: '60px',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: theme.palette.primary.contrastText,
                transform: 'translateY(-3px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Our Menu
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};
export default Navbar;