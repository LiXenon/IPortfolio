import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '@fortawesome/fontawesome-free/css/all.min.css';

const PageBottom = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px', backgroundColor: '#000', color: '#fff'}}>
        
    {/* social media icon */}
    <Box sx={{ display: 'flex', justifyContent: 'left', gap: '20px' }}>
      <Button href="#" color="inherit" sx={{ fontSize: '24px' }}><i className="fab fa-facebook"></i></Button>
      <Button href="#" color="inherit" sx={{ fontSize: '24px' }}><i className="fab fa-linkedin"></i></Button>
      <Button href="#" color="inherit" sx={{ fontSize: '24px' }}><i className="fab fa-instagram"></i></Button>
      <Button href="#" color="inherit" sx={{ fontSize: '24px' }}><i className="fab fa-youtube"></i></Button>
    </Box>
    <Typography variant='body2' component='p' sx={{ marginBottom: '10px', marginTop:'100px' }}>
       2024 IPortfolio
    </Typography>
  </div>
  );
}


export default PageBottom;