
"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavBar from '../component/NavBar';
import PageBottom from "../component/PageBottom";
import { Key, useState } from 'react';
import router, { useRouter } from 'next/router';
import Modal from '@mui/material/Modal';
import Iframe from 'react-iframe'; 
//import 'IPortfolio/app/globals.css';


const templatesData = [
  {
    id: 1,
    title: 'UI Design Portfolio',
    description: 'This car design portfolio template organizes sketches, 3D models, and final renders.',
    images: ['1.jpg', '2.jpg', '3.jpg','4.jpg', '5.jpg', '6.jpg','1.jpg', '2.jpg', '3.jpg'],
  },
  {
    id: 2,
    title: 'Creative Art Portfolio',
    description: 'An elegant portfolio for showcasing creative artworks and illustrations.',
    images: ['2.jpg', '5.jpg', '6.jpg'],
  },
  {
    id: 3,
    title: 'Photography Showcase',
    description: 'A clean and minimalist portfolio template for photographers to display their work.',
    images: ['3.jpg', '5.jpg', '6.jpg'],
  },

  {
    id: 4,
    title: 'UI Design Portfolio',
    description: 'This car design portfolio template organizes sketches, 3D models, and final renders.',
    images: ['4.jpg', '2.jpg', '3.jpg'],
  },
  {
    id: 5,
    title: 'Creative Art Portfolio',
    description: 'An elegant portfolio for showcasing creative artworks and illustrations.',
    images: ['5.jpg', '5.jpg', '6.jpg'],
  },
  {
    id: 6,
    title: 'Photography Showcase',
    description: 'A clean and minimalist portfolio template for photographers to display their work.',
    images: ['6.jpg', '5.jpg', '6.jpg'],
  },

  // 后续将这部分内容添加到数据库或许？
];

const TemplatePage = () => {


  
    const [open, setOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<{ id: number; title: string; description: string; images: string[] } | null>(null);

    const handleOpen = (template: any) => {
        setSelectedTemplate(template);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


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
          {/* template card
          {['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'].map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box component="img" src={`/${image}`} alt={`Template ${index + 1}`} 
              sx={{ width: '100%', borderRadius: '8px', height: '300px',objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.109)', 
                          },
               }} 
                onClick={() => handleOpen(index)}
               /> */}
               {templatesData.map((template) => (
              <Grid item xs={12} sm={6} md={4} key={template.id}>
              <Box component="img" src={`/${template.images[0]}`} alt={`Template ${template.id}`} 
              sx={{ width: '100%', borderRadius: '8px', height: '300px',objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.109)', 
                          },
               }} 
                onClick={() => handleOpen(template)}
              />
              <Typography variant="h6" style={{ marginTop: '10px' }}>Template</Typography>
              <Typography variant="body2" style={{ color: '#ccc' }}>Free</Typography>
              <Typography variant="body2" style={{ color: '#ccc' }}>$0.00</Typography>
              
              
            </Grid>
          ))}
        </Grid>
        

        <Modal open={open} onClose={handleClose}>
          <Box 
          className="custom-scrollbar"
          sx={{ 
              width: '60%',  
              height: '70%',  
              margin: 'auto', 
              marginTop: '5%', 
              backgroundColor: '#2c2c2c', 
              padding: '40px', 
              borderRadius: '7px', 
              overflowY: 'auto', //vertical scroll
              display: 'flex',  // make sure the content is centered
              flexDirection: 'column',  // vertically centered
              position: 'relative',
              boxShadow: 'none',            
              outline: 'none',    
                        
             
          }}
          >

            <Box 
                  onClick={handleClose} 
                  sx={{ 
                    position: 'absolute', 
                    top: '10px', 
                    right: '10px', 
                    cursor: 'pointer', 
                    fontSize: '24px', 
                    color: '#fff' 
                  }}
                >
                  &times; {/* 这是关闭按钮显示的内容，可以替换为图标 */}
                </Box>

            
              <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '30px' }}>Template Preview</Typography>
              <Grid container spacing={3} sx={{ flexGrow:1  }}>  
                  {/* Example of multiple images inside modal for preview */}
                  {selectedTemplate && selectedTemplate.images.map((previewImage: any, index: number) =>
                   (
                      <Grid item xs={12} md={4} key={index}>
                          <Box component="img" 
                          
                              src={`/${previewImage}`} 
                              alt={`Preview ${index + 1}`} 
                              sx={{ 
                                  width: '100%', 
                                  height: '200px',  // 自适应高度
                                  objectFit: 'cover', 
                                  borderRadius: '8px',
                                  transition: 'transform 0.3s ease-in-out',
                                  
                              }} 
                          />
                      </Grid>
                  ))}
              </Grid>
              <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ 
                      marginTop: '20px', 
                      display: 'block', 
                      marginLeft: 'auto', 
                      marginRight: 'auto',
                      width: 'fit-content',
                      backgroundColor: 'rgba(92, 94, 233, 0.774)',
                      
                  }}
              >
                  <b>Use This Template</b> </Button>
            </Box>
          </Modal>
                  

        <PageBottom />
      </div>
    );
  };

  export default TemplatePage;


  