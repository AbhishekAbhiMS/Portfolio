import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo from "../../images/logo.png.png"
import { Divider, Modal } from '@mui/material';
import LoginFind from '../LoginTemplates/LoginFind';


// TODO remove, this demo shouldn't need to reset the theme.

export default function Singup({ setSingup, singup ,setLoginOpen}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("number"),
      number: data.get("number"),
      email: data.get('email'),
      password: data.get('password'),

    });
  };

  return (
  <>
    <Modal sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}} open={singup} onClose={() => {
      setSingup(false)
    }} >
      <Grid container component="main" justifyContent={'center'} sx={{ width: '700px', padding: '60px 135px 60px 135px', bgcolor: 'white', boxShadow: "0px 6px 12px 0px #0000001A", borderRadius: '15px' }}>

        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '440px'
          }}
        >


          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <div><img src={logo} alt="logo" width={'164px'} height={'37px'} style={{ marginRight: '10px' }} /></div>
            <h2>Welcome back!</h2>
            <Typography style={{ fontSize: '14px', fontWeight: '400', margin: '8px 0px' }}>
              Please login to access your account.            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="User full name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="number"
              label="Phone numer"
              name="number"
              autoComplete="number"
              autoFocus
            />
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
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Divider style={{ margin: "14px 0px" }}></Divider>
            <Grid container>

              <Grid item>
                <Link href="#" variant="body2"
                onClick={()=>{
                  setSingup(false)
                  setLoginOpen(true)

                }}>
                  {"Have an account"}
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
    </>
  );
}