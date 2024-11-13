
"use client";
import PageBottom from '@/app/component/PageBottom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavBar from '../component/NavBar';
import React from 'react';
import { TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
const LoginPage = () => {
    // define state variables
  const [registerMessage, setRegisterMessage] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', confirmEmail: '', confirmPassword: '' });


  // email regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   // Validation function for email and password
   const validateEmail = () => {
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
    }
  };
  // password validation
  const validatePassword = () => {
    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters long and contain upper and lower case letters',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '',
      }));
    }
  };


  // Confirm email and password validation
  const validateConfirmEmail = () => {
    if (confirmEmail !== email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmEmail: 'Emails do not match',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmEmail: '',
      }));
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: '',
      }));
    }
  };

   // Reset error message when input is focused
   const resetError = (field: any) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '', // Clear error for the specific field
    }));
  };

  // login request function
//   const loginUser = async () => {
//     try {
//         // send a POST request to the server
//         const response = await axios.post('http://localhost:8083/auth/login', {
//             username: email,  // use email as username
//             password: password
//         });

//         // 检查响应结果
//         if (response.status === 200) {
//             const token = response.data.token;  // 获取返回的 JWT token
//             console.log("登录成功", token);

//             // 在这里，你可以保存 token 到 localStorage 或 cookie 中
//             localStorage.setItem("jwtToken", token);
//             alert("登录成功！");
//             // 可以在此跳转到其他页面，比如主页
//         }
//     } catch (error) {
//         console.error("登录失败", error);
//         setLoginError("登录失败，请检查用户名和密码。");
//     }
// };
  

// register request function

  const registerUser = async () => {
    try {
        // send a POST request to the server
        const response = await axios.post('http://localhost:8083/auth/register', {
            username: email,  // use email as username //后面可能还会修改
            password: password
        });

        // check the response result
        if (response.status === 201) {
            setRegisterMessage("register successfully");
            console.log("register successfully", response.data);
        }else {
          setRegisterMessage("Unexpected response from server.");
          console.log("Unexpected response", response);
      }
    } catch (error : any) {
      if (error.response) {
        // The request was made and the server responded with a status code outside of the 2xx range
        if (error.response.status === 400 && error.response.data === "Username already exists") {
            setRegisterMessage("Username already exists, please choose another one.");
        } else {
            setRegisterMessage("Register failed, please check the username and password.");
        }
    } else {
        // Other errors (e.g., network errors)
        setRegisterMessage("An error occurred. Please try again later.");
    }
    console.error("register failed", error);
    }
  };

  
  // Submit function
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setRegisterMessage('');  // reset register message
    if (!errors.email && !errors.password && email === confirmEmail && password === confirmPassword) {
      registerUser();  // 调用 registerUser 函数发送注册请求
  }
};
  


  





    return (
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          {/* <Box
            sx={{
              padding: '40px',
              boxShadow: 3,
              borderRadius: '12px',
              backgroundColor: '#fafafa',
            }}
          > */}

          <Box sx={{
              display: 'flex',
              flexDirection: 'column', // vertical alignment
              alignItems: 'center', // horizontal alignment
              padding: '40px',
              
              
            }}
          >

            <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                    position: 'absolute',  
                    top: '20px',  
                    left: '20px',  
                    fontWeight: 'bold',  
                    color: '#000',
                    fontSize: '40px'
                    }}
                >
            IPortfolio
            </Typography>
            {/* Title */}
            <Typography variant="h3" component="h1" textAlign="center" fontWeight="bold" marginBottom="40px" color="#666565">
              Sign Up
            </Typography>
  
            {/* Email Input */}
            <TextField 
              label="Email" 
              variant="standard" 
              //fullWidth 
              required 
              margin="normal"
              sx={{ width: '500px', '& .MuiInputLabel-root': { 
                fontSize: '15px', marginLeft:'10px', marginBottom:'px', marginTop:'-10px'  // set the label individually
                }, }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email} // show error status when there is an error message
              helperText={errors.email} // show error prompt information
              onBlur={validateEmail} // Trigger validation on blu
              onFocus={() => resetError('email')} // Reset error when focused
              
            />
  
            {/* Confirm Email Input */}
            <TextField 
              label="Confirm Email" 
              variant="standard" 
              //fullWidth 
              required 
              margin="normal" 
              sx={{ width: '500px', '& .MuiInputLabel-root': { 
                fontSize: '15px', marginLeft:'10px', marginTop:'-10px'  // set the label individually
                }, }}
            
             value={confirmEmail}
             onChange={(e) => setConfirmEmail(e.target.value)}
             onBlur={validateConfirmEmail} // Trigger validation on blur
             onFocus={() => resetError('confirmEmail')} // Reset error when focused
             error={!!errors.confirmEmail} // Show error state
             helperText={errors.confirmEmail} // Show error message
            
            />
  
            {/* Password Input */}
            <TextField 
              label="Set Password" 
              
              type="password" 
              variant="standard" 
              //fullWidth 
              required 
              margin="normal" 
            
              sx={{ width: '500px','& .MuiInputLabel-root': { 
                    fontSize: '15px', marginLeft:'10px', marginTop:'-10px'// set the label individually
                    }, }}

              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword} // Trigger validation on blur
              error={!!errors.password} 
              helperText={errors.password}
              onFocus={() => resetError('password')} // Reset error when focused
              
            />
            
  
            {/* Confirm Password Input */}
            <TextField 
              label="Confirm Password" 
              
              type="password" 
              variant="standard" 
              required 
              margin="normal" 
              sx={{ width: '500px', '& .MuiInputLabel-root': { 
                fontSize: '15px', marginLeft:'10px', marginTop:'-10px'  // set the label individually
                }, }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validateConfirmPassword} // Trigger validation on blur
              onFocus={() => resetError('confirmPassword')} // Reset error when focused
              error={!!errors.confirmPassword} // Show error state
              helperText={errors.confirmPassword} // Show error message
              
            />
            
            

            {/* Register Message */}
            {registerMessage && (
                  <Typography variant="body2" color="textSecondary" textAlign="center" marginTop="20px">
                      {registerMessage}
                  </Typography>
              )}
            
  
            {/* Register Button */}
            {/* <Button 
              variant="contained" 
              fullWidth 
              sx={{ marginTop: '20px', padding: '10px 0', backgroundColor: '#000', color: '#fff' }}>
              Sign Up
            </Button> */}
            <Button 
                variant="outlined" 
                
                sx={{
                    marginTop: '20px', 
                    width: '500px',
                    padding: '10px 0', 
                    color: '#007BFF',  
                    borderColor: '#007BFF', 
                    '&:hover': {
                    backgroundColor: 'rgba(0, 123, 255, 0.1)', 
                    borderColor: '#007BFF' 
                    },
                    borderRadius: '50px',
                    fontFamily: 'Arial, serif !important'

                }}
                 onClick={handleSubmit} // call the submit function when the button is clicked
                >
                        Sign Up
            </Button>

  
            {/* Already have an account */}
            <Typography variant="body2" color="textSecondary" textAlign="center" marginTop="20px">
            Already have an account?  <a href="/login" style={{ color: '#00C4EC', textDecoration: 'none' }}>Login In</a>
            </Typography>
          {/* </Box> */}
          </Box>

          
        </Grid>
      </Grid>
      
    );
  };
  export default LoginPage;




