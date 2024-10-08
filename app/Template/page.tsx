import '@fortawesome/fontawesome-free/css/all.min.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavBar from '../component/NavBar';
import PageBottom from "../component/PageBottom";

const TemplatePage = () => {
    return (
        <div>
        <NavBar />
  
        {/* page topic*/}
        {/* mian template show */}
        <div style={{ display:'flex',padding: '40px',  justifyContent:'space-between', marginTop: '-30px',   }}>
        <Grid container spacing={15} sx={{ padding: '30px', justifyContent: 'center' }}>
          <Grid item xs={12} md={6}>
            <Box component="img" src="/7.jpg" alt="main template img" sx={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" style={{ fontWeight: 'bold', marginLeft:'20px', marginTop:'30px'  }}>
              UI Design Portfolio
            </Typography>
            <Typography variant="h6" style={{ margin: '20px 0', color: '#ccc', marginLeft:'20px' }}>
              Free
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '20px' , width:'80%', marginLeft:'20px'}}>
            This car design portfolio template organizes sketches, 3D models, and final renders, with space f
            or descriptions and design process insights. It's ideal for showcasing automotive projects professionally 
            and visually appealing.
            </Typography>
            <Button variant="contained" color="primary" style={{ marginLeft:'20px',backgroundColor: '#fff',color:'#000', marginTop:'30px',marginBottom: '10px', width:'490px' }}>Edit</Button>
          </Grid>
        </Grid>
        </div>
        {/* more templates show */}
        <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '30px', marginTop:'60px',fontWeight:'bold' }}>
          More Templates
        </Typography>
        <Grid container spacing={3} justifyContent="center" style={{ padding: '40px 90px' }}>
          {/* template card */}
          {['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'].map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box component="img" src={`/${image}`} alt={`Template ${index + 1}`} 
              sx={{ width: '100%', borderRadius: '8px', height: '300px',objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.109)', 
                          },
               }} />
              <Typography variant="h6" style={{ marginTop: '10px' }}>Template</Typography>
              <Typography variant="body2" style={{ color: '#ccc' }}>Free</Typography>
              <Typography variant="body2" style={{ color: '#ccc' }}>$0.00</Typography>
              
            </Grid>
          ))}
        </Grid>

        <PageBottom />
      </div>
    );
  };
  
  export default TemplatePage;