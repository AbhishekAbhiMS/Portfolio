import { Button, Divider, Grid } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Navbar from "../Pages/Navbar";
function Planview() {
    return (<>
    
        <div className="planview" style={{  maxWidth: "1440px", boxSizing: 'border-box' }}>
            <div style={{ padding: '37px 22px 37px 22px', width: '1107px', boxSizing: 'border-box',background: 'linear-gradient(90deg, rgba(35, 136, 255, 0.95) 0.61%, rgba(143, 87, 214, 0.95) 100%)',borderRadius:'20px' }}>


                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between', marginTop: '30px' }}><span style={{ fontSize: '26px', fontWeight: '600',color:"white" }}>Choose your plan</span> <span><CloseIcon style={{color:'white'}} fontSize="large"/></span></div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-around', marginTop: '30px' }}>
                    <div style={{ width: '306px', borderRadius: '20px', padding: '30px 29px 30px 29px',boxShadow: '0px 4px 4px 0px #00000040',backgroundColor:'white'
 }}>

                        <Grid container xs={12} rowGap={3}>
                            <Grid xs={12} textAlign={'center'} style={{ fontSize: '30px', fontWeight: '600' }}>Silver plan</Grid>
                            <Grid xs={12} textAlign={'center'} style={{ fontSize: '22px', fontWeight: '400' }}> ₹ 100</Grid>
                            <Grid xs={12}><Divider style={{backgroundColor:'#4F4F4F'}}></Divider></Grid>
                            <Grid xs={12} style={{ fontSize: '13px', fontWeight: '400', color: '#4F4F4F',display:'flex',alignItems:'center' }}><CheckCircleIcon style={{marginRight:'10px',color:'#4F4F4F'}}/> Get 2 template</Grid>
                            <Grid xs={12} style={{ fontSize: '13px', fontWeight: '400', color: '#4F4F4F' ,display:'flex',alignItems:'center' }}><CheckCircleIcon style={{marginRight:'10px',color:'#4F4F4F'}}/>Explain your experience in 100 words.</Grid>
                            <Grid xs={12} textAlign={'center'}><Button variant="contained" style={{ textTransform: 'none', background: "#2388FF", borderRadius: '20px', fontSize: '14px', fontWeight: '600' }}>Subscribe now</Button></Grid>
                        </Grid>
                    </div>
                    <div style={{ width: '306px', borderRadius: '20px', padding: '30px 29px 30px 29px', backgroundColor: '#222B45',boxShadow: '0px 4px 4px 0px #00000040'}}>

                        <Grid container xs={12} rowGap={3}>
                            
                        <Grid xs={12} textAlign={'center'} style={{ fontSize: '18px', fontWeight: '400'}}><span style={{backgroundColor:'#6557FF',width:'56px',height:'32px',padding:'5px',borderRadius:'10px',color:'white' }}>-30%</span></Grid>

                            <Grid xs={12} textAlign={'center'} style={{ fontSize: '30px', fontWeight: '600',color:'white' }}>Gold plan</Grid>
                            <Grid xs={12} textAlign={'center'} style={{ fontSize: '22px', fontWeight: '400',color:'white' }}> ₹ 175</Grid>
                            <Grid xs={12}><Divider  style={{backgroundColor:'white'}}></Divider></Grid>
                            <Grid xs={12} style={{ fontSize: '13px', fontWeight: '400',color:'white',display:'flex',alignItems:'center' }}><CheckCircleIcon style={{marginRight:'10px',color:'white'}}/>Get 2 template</Grid>
                            <Grid xs={12} style={{ fontSize: '13px', fontWeight: '400',color:'white',display:'flex',alignItems:'center' }}><CheckCircleIcon style={{marginRight:'10px',color:'white'}}/>Explain your experience in 100 words.</Grid>
                            <Grid xs={12} textAlign={'center'}><Button variant="contained" style={{ textTransform: 'none', background: "#2388FF", borderRadius: '20px', fontSize: '14px', fontWeight: '600' }}>Subscribe now</Button></Grid>
                        </Grid>
                    </div>
                    <div style={{ width: '306px', borderRadius: '20px', padding: '30px 29px 30px 29px',boxShadow: '0px 4px 4px 0px #00000040' ,backgroundColor:'white'}}>

                        <Grid container xs={12} rowGap={3}>
                            <Grid xs={12} textAlign={'center'} style={{ fontSize: '30px', fontWeight: '600' }}>Platinum plan</Grid>
                            <Grid xs={12} textAlign={'center'} style={{ fontSize: '22px', fontWeight: '400' }}> ₹ 300</Grid>
                            <Grid xs={12}><Divider style={{backgroundColor:'#4F4F4F'}}></Divider></Grid>
                            <Grid xs={12} style={{ fontSize: '13px', fontWeight: '400', color: '#4F4F4F' ,display:'flex',alignItems:'center' }}><CheckCircleIcon style={{marginRight:'10px',color:'#4F4F4F'}}/>Get 2 template</Grid>
                            <Grid xs={12} style={{ fontSize: '13px', fontWeight: '400', color: '#4F4F4F' ,display:'flex',alignItems:'center' }}><CheckCircleIcon style={{marginRight:'10px',color:'#4F4F4F'}}/>Explain your experience in 100 words.</Grid>
                            <Grid xs={12} textAlign={'center'}><Button variant="contained" style={{ textTransform: 'none', background: "#2388FF", borderRadius: '20px', fontSize: '14px', fontWeight: '600' }}>Subscribe now</Button></Grid>
                        </Grid>
                    </div>

                </div>
            </div>

        </div></>
    );
}

export default Planview;