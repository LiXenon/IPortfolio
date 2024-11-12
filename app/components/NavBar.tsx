"use client"
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#000', boxShadow: 'none' }}>
      <Toolbar>
        {/* <Typography  variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          IPortfolio
        </Typography> */}
        <Button
          href="/"
          color="inherit"
          sx={{
            textTransform: 'none',
            padding: 0,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: '#fff'
            }}
          >
            IPortfolio
          </Typography>
        </Button>
        <Box sx={{ display: 'flex', gap: '20px', marginLeft: 'auto' }}>
          <Button color="inherit">PRODUCT</Button>
          <Button href='/Template' color="inherit">TEMPLATE</Button>
          <Button href='/EditPage' color="inherit">IPortfolio Studio</Button>
        </Box>
        <Button href='/Login' color="primary" variant="contained" sx={{ backgroundColor: '#fff',
          color: '#000', marginLeft: '20px', borderRadius: '50px' }}>
          GET START
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;