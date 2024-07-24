import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Divider, Modal } from '@mui/material';
import logo from "../../images/logo.png.png"
import { NavLink, useNavigate } from 'react-router-dom';
import Singup from '../Singup/Singup';
import LoginFind from './LoginFind';


// TODO remove, this demo shouldn't need to reset the theme.

export default function Login({ LoginOpen, setLoginOpen, setSingup, singup ,Findacc,setFindacc}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const navigate = useNavigate()
  return (
    <>
      <Modal sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}} open={LoginOpen} onClose={() => {
        setLoginOpen(false)
      }} >
        <Grid container component="main" justifyContent={'center'} sx={{height:'633px', width: '700px', padding: '60px 135px 60px 135px', bgcolor: 'white', boxShadow: "0px 6px 12px 0px #0000001A", borderRadius: '15px' }}>

          <Box
            sx={{
              my: 6,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '440px'
            }}
          >


            <Box component="form" noValidate onSubmit={handleSubmit} >
              <div><img src={logo} width={'164px'} height={'37px'} alt="logo" style={{ marginRight: '10px' }} /></div>
              <h2>Welcome back!</h2>
              <Typography style={{ fontSize: '14px', fontWeight: '400', margin: '8px 0px' }}>
                Please login to access your account.            </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Id"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Grid item xs>
                <Link href="#" variant="body2"
                 onClick={() =>{ setFindacc(true)
                  setLoginOpen(false)
                 }}>
                  Forgot password?
                </Link>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  navigate("/admin")
                }}
              >
                Sign In
              </Button>
              <Divider style={{ margin: "14px 0px" }}></Divider>
              <Grid container>

                <Grid item>
                  <Link href="#" variant="body2"
                    onClick={() =>{ setSingup(true)
                      setLoginOpen(false)}}
                  >
                    {"Create new account"}
                  </Link>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {"Do you have an login issue call 000 000000?"}
                  </Typography>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Modal>
      <LoginFind Findacc={Findacc} setFindacc={setFindacc}/>
      <Singup
        setSingup={setSingup}
        setLoginOpen={setLoginOpen}
        singup={singup}
      />
    </>
  );
}