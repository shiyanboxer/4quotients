'use client'
// https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Quiz', 'Buddhist Sources', 'Questions for Pondering'];
const links = {
  'Home': '/',
  'Quiz': '/quiz',
  'Buddhist Sources': '/sources',
  'Questions for Pondering': '/questions'
}

function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" 
      sx={{ 
        bgcolor: 'rgba(255, 255, 255, 0.0)',
        color: 'black',
        borderRadius: '30px',
        boxShadow: 'none',
      }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={links['Home']} 
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            4Q
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />

            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={links['Home']}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            4Q
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Object.entries(links).map(([label, path]) => (
              label !== 'Home' && (
                <Button
                  key={label}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', margin: '10px'}}
                  href={path}
                >
                  <Typography>{label}</Typography>
                </Button>
              )
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <Button 
                sx={{ my: 2, color: 'black', display: 'block', margin: '10px'}}
                href={links['Quiz']} 
              >
                <Typography>Take the Quiz</Typography>
              </Button>
          </Box>
        </Toolbar>
    </AppBar>
  );
}
export default Navigation;
