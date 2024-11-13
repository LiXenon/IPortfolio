
import PageBottom from '@/app/component/PageBottom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavBar from '../component/NavBar';
const MainPage = () => {
  
  return (
    <div>
      <NavBar/>

      

      {/* main content area */}
      <div style={{ display:'flex',padding: '40px',  justifyContent:'space-between', marginTop: '20px', marginLeft: '50px'   }}>
        <div style={{ maxWidth: '50%'}}>
        {/* main heading */}
        <Typography variant = "h3" component = "h1" style={{ fontWeight: 'bold', marginBottom:'110px', maxWidth:'850px', padding:'10px'
        ,marginTop:'50px'
         }}>
          Create your portfolio website with IPortfolio
        </Typography>
        {/* discription */}
        <Typography variant='h5' sx = {{ marginBottom: '85px', maxWidth:'600px', }}>
        Use IPortfolio's advanced design capabilities and professional tools 
        to design a unique portfolio and stand out online. 
        Get attention for your work, increase your visibility on the web and start making money.
        </Typography>
        {/* Movement button */}
        <Button  color="primary" variant="contained" sx={{ backgroundColor: '#fff',color:'#000',
             padding: '10px 20px',borderRadius: '50px', fontWeight: 'bold', fontSize: '16px', '&:hover': {
            backgroundColor: '#2979ff', 
            } }}>
            START NOW
        </Button>
        </div>
        
        {/* image */}
      
        <Grid container spacing={2} sx = {{width:'45%'}}> 
          {/*first two image */}
          <Grid item xs = {6}>
            { <Box component="img" src = "/3.jpg" alt="image3" sx={{  width:'300px', height:'400px',borderRadius: '8px' }}></Box> }
          </Grid>
          <Grid item xs = {6}>
            <Box component="img" src = "/2.jpg" alt="image2" sx={{ width: '250px', height:'350px',borderRadius: '8px' }}></Box>
          </Grid>
          {/*second two image */}
          <Grid item xs = {12}>
            <Box component="img" src = "/1.jpg" alt="image3" sx={{ width: '100%',borderRadius: '8px' }}></Box>
          </Grid>
        </Grid>



      </div>


      {/* template selection part */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '120px 60px' }}>
        {/* left side image */}
        <Box component="img" src="/4.jpg" alt="示例图片" sx={{ width: '600px', height: '400px', borderRadius: '8px' }} />

        {/* right side text */}
        <div style={{ textAlign: 'left', maxWidth: '50%', color: '#fff', padding: '43px' }}>
          <Typography variant='h4' component='h2' sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            We offer thousands of templates for portfolios.
          </Typography>
          <Typography variant='h6' component='p' sx={{ marginBottom: '40px' }}>
            Find your own one from now
          </Typography>
          <Button  href='/Template' color="primary" variant="contained" sx={{ backgroundColor: '#fff',color:'#000',
             padding: '10px 20px',borderRadius: '50px', fontWeight: 'bold', fontSize: '16px', '&:hover': {
            backgroundColor: '#2979ff', 
            } }}>
            TRY NOW   
        </Button>
        </div>
      </div>


      <PageBottom />

    </div>
  );
};

export default MainPage;


