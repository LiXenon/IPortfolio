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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          IPortfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button color="inherit">PRODUCT</Button>
          <Button color="inherit">TEMPLATE</Button>
          <Button color="inherit">IPortfolio Studio</Button>
        </Box>
        <Button color="primary" variant="contained" sx={{ backgroundColor: '#fff', 
          color:'#000', marginLeft: '20px', borderRadius: '50px' }}>
          GET START
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;