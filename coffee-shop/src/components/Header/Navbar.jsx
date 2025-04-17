import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { 
  Box, Typography, Link, Stack, Button, IconButton, 
  Drawer, List, ListItem, ListItemText, useTheme, 
  AppBar, Toolbar, Divider 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Fade from '@mui/material/Fade';
import { MaterialUISwitch } from "../../context/ThemeContext";
import { useTheme as useThemeContext } from "../../context/ThemeContext";
import { useNavigate, useLocation } from 'react-router-dom';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();

  //  menu click - scroll 
  const handleMenuClick = () => {
    if (location.pathname === '/') {
      const menuSection = document.getElementById('menu-section');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'menu' } });
    }
    setMobileOpen(false);
  };

  // Handle home click with smooth scroll to top
  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navigation items with proper click handlers
  const navItems = [
    { 
      name: 'Home', 
      path: '/',
      onClick: handleHomeClick
    },
    // { 
    //   name: 'Menu', 
    //   path: '/menu',
    //   onClick: handleMenuClick
    // },
    { 
      name: 'About Us', 
      path: '/about',
      onClick: () => {
        navigate('/about');
        setMobileOpen(false);
      }
    },
    { 
      name: 'Contact Us', 
      path: '/contact',
      onClick: () => {
        navigate('/contact');
        setMobileOpen(false);
      }
    }
  ];

  // Background colors with better contrast
  const navbarBgColor = mode === 'dark' 
    ? 'rgba(18, 18, 18, 0.95)'
    : 'rgba(255, 255, 255, 0.95)';

  const drawerBgColor = mode === 'dark'
    ? 'rgba(30, 30, 30, 0.98)'
    : 'rgba(255, 255, 255, 0.98)';

  // Active link styling
  const isActive = (path) => location.pathname === path;

  // Drawer content component
  const drawer = (
    <Box 
      sx={{ 
        width: 280,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: drawerBgColor,
        color: theme.palette.text.primary,
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        p: 2 
      }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Divider />
      
      <List sx={{ flexGrow: 1, p: 2 }}>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.name}
            onClick={item.onClick}
            sx={{
              borderRadius: '8px',
              mb: 1,
              backgroundColor: isActive(item.path) 
                ? mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(75, 54, 33, 0.1)'
                : 'transparent',
              '&:hover': {
                backgroundColor: mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.15)' 
                  : 'rgba(75, 54, 33, 0.15)',
              }
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: isActive(item.path) ? 600 : 500,
                color: isActive(item.path) 
                  ? theme.palette.primary.main 
                  : theme.palette.text.primary,
              }}
            />
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ p: 3 }}>
        <Button 
          variant="contained" 
          fullWidth
          onClick={() => {
            navigate('/signin');
            setMobileOpen(false);
          }}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            fontFamily: 'Playfair Display, serif',
            borderRadius: '60px',
            py: 1.5,
            mb: 2,
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
          fullWidth
          onClick={() => {
            navigate('/signup');
            setMobileOpen(false);
          }}
          sx={{
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            fontFamily: 'Playfair Display, serif',
            borderRadius: '60px',
            py: 1.5,
            '&:hover': {
              backgroundColor: mode === 'dark' 
                ? 'rgba(75, 54, 33, 0.1)' 
                : 'rgba(240, 229, 218, 0.67)',
              borderColor: theme.palette.primary.dark,
            },
            transition: 'all 0.3s ease'
          }}
        >
          Sign up
        </Button>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 3,
          alignItems: 'center',
          gap: 1
        }}>
          <Typography variant="body2" sx={{ fontFamily: 'Playfair Display, serif' }}>
            {mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </Typography>
          <MaterialUISwitch checked={mode === 'dark'} onChange={toggleTheme} />
        </Box>
      </Box>
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
          boxShadow: mode === 'dark' 
            ? '0 2px 8px rgba(0, 0, 0, 0.5)' 
            : '0 2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: theme.zIndex.drawer + 1,
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ 
            py: 1,
            minHeight: { xs: 64, sm: 70, md: 80 }
          }}>
            {/* Logo Section */}
            <Box 
              onClick={handleHomeClick}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                flexGrow: 1,
                '&:hover': {
                  '& .logo-text': {
                    transform: 'scale(1.03)'
                  }
                }
              }}
            >
              <CoffeeIcon 
                fontSize="large" 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(15deg)'
                  }
                }} 
              />
              <Typography
                variant="h1"
                className="logo-text"
                sx={{
                  fontFamily: '"Clicker Script", cursive', 
                  color: theme.palette.primary.main,
                  fontStyle: "italic",
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  transition: 'transform 0.3s ease'
                }}
              >
                Bean Scene
              </Typography>
            </Box>

            {/* Desktop Navigation Links */}
            <Stack 
              direction="row" 
              spacing={2}
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                mr: 2
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  component="button"
                  onClick={item.onClick}
                  sx={{
                    textDecoration: 'none',
                    color: isActive(item.path) 
                      ? theme.palette.primary.main 
                      : theme.palette.text.primary,
                    fontWeight: isActive(item.path) ? 600 : 500,
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
                      width: isActive(item.path) ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: theme.palette.primary.main,
                      transition: 'width 0.3s ease'
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>

            {/* Auth Buttons and Theme Toggle */}
            <Stack 
              direction="row" 
              spacing={2}
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center'
              }}
            >
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
                    backgroundColor: mode === 'dark' 
                      ? 'rgba(75, 54, 33, 0.1)' 
                      : 'rgba(240, 229, 218, 0.67)',
                    borderColor: theme.palette.primary.dark,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Sign up
              </Button>
              <MaterialUISwitch 
                checked={mode === 'dark'} 
                onChange={toggleTheme} 
                sx={{ ml: 1 }}
              />
            </Stack>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                color: theme.palette.text.primary,
                display: { md: 'none' },
                ml: 2
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            borderLeft: `1px solid ${mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.12)' 
              : 'rgba(0, 0, 0, 0.12)'}`,
          },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Spacer for fixed AppBar */}
      <Box sx={{ 
        height: { xs: 64, sm: 70, md: 80 },
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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
        <Box sx={{ 
          display: 'flex', 
          gap: 3, 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
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
            onClick={() => {
              const menuSection = document.getElementById('menu-section');
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
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