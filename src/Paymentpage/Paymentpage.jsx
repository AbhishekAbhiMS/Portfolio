
import { Button, Divider, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import razpay from "../images/image 34.png"
import pal from "../images/image 35.png"
import "./Payment.css"
import Textarea from '@mui/joy/Textarea';
import LockIcon from '@mui/icons-material/Lock';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Navbar from '../Pages/Navbar';
const currencies = [
    {
        value: 'USD',

    },
    {
        value: 'EUR',
    },
    {
        value: 'BTC',
    },
    {
        value: 'JPY',
    },
];
function Paymentpage() {
    const [razoroay, setrazoroay] = useState(false)
    const [paypal, setpaypal] = useState(false)
    const [companycheck, setcompanycheck] = useState(false)

    return (<> <Navbar nav={"/preview"}></Navbar>
        <div className="main" style={{  display: 'flex', alignItems: 'flex-Start', justifyContent: 'center', padding: '43px 62px 43px 62px',minHeight:'84.5vh',width:'100%' }}>
            <div className="inner" style={{backgroundColor:'white', borderRadius:'12px',boxSizing: 'border-box', boxShadow: ' 0px 6px 12px 0px #0000001A',padding:'25px', width: '100%', display: 'flex', alignItems: 'flex-start',maxWidth: '1440px', }}><div className="left" style={{ width: "362px" }}>
                <Grid container xs={12} rowGap={3}>
                    <Grid xs={12} style={{ fontSize: '16px', fontWeight: '600' }}>Billing information</Grid>
                    <Grid xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-select-currency"
                            select
                            label="Country"
                            defaultValue="india"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid xs={12}><TextField fullWidth
                        id="outlined-select-currency"
                        select
                        label="State/Region"
                        defaultValue="Karnataka"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField></Grid>
                    <Grid xs={12}><TextField fullWidth id="outlined-basic" label="Name" placeholder='Name text' variant="outlined" />
                    </Grid>
                    <Grid xs={12}>  <FormControlLabel control={<Checkbox defaultChecked checked={companycheck} onClick={() => {
                        console.log("he");
                        setcompanycheck(!companycheck)
                    }} />} label="Are you a company?" />
                    </Grid>
                    {
                        companycheck && <>
                            <Grid xs={12}><TextField fullWidth id="outlined-basic" label="Company name" placeholder='Name text' variant="outlined" />
                            </Grid>
                            <Grid xs={12}><TextField fullWidth id="outlined-basic" label="GSTINinfo" placeholder='Name text' variant="outlined" />
                            </Grid>
                            <Grid xs={12}>
                                <Textarea minRows={2} id="outlined-basic" label="Billing address" placeholder='Billing address' variant="outlined" />                    </Grid>
                            <Grid xs={12}><TextField fullWidth id="outlined-basic" label="Zip code" placeholder='Name text' variant="outlined" />
                            </Grid>
                            <Grid xs={12}><TextField fullWidth id="outlined-basic" label="Billing email" placeholder='Name text' type='email' variant="outlined" />
                            </Grid>


                        </>
                    }
                </Grid>
            </div>
                <Divider style={{ margin: '0 57px', height: companycheck ? "725px" : '360px', border: ' 1px solid #E0E0E0' }} ></Divider>
                <div className="right" style={{ width: "362px" }}>
                    <Grid container xs={12} rowGap={3}>
                        <Grid sx={12}> Order details</Grid>
                        <Grid xs={12}> <Button fullWidth variant='outlined' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} onClick={() => {
                            setrazoroay(!razoroay)
                            setpaypal(false)
                            console.log(razoroay);
                        }} ><FormControlLabel control={<Checkbox defaultChecked checked={razoroay} />} /> <img src={razpay} alt="" /> </Button></Grid>
                        <Grid xs={12}> <Button fullWidth variant='outlined' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} onClick={() => {
                            setpaypal(!paypal)
                            setrazoroay(false)

                        }} ><FormControlLabel control={<Checkbox defaultChecked checked={paypal} />} /> <img src={pal} alt="" /></Button></Grid>

                        <Grid xs={12}><div style={{ fontSize: '10px', fontWeight: '400', color: '#828282', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}><LockIcon fontSize='small' style={{ marginRight: '10px', width: '15px' }}></LockIcon> Secure payment with SSL Encryptioninfo</div>
                            <div style={{ fontSize: '10px', fontWeight: '400', color: '#828282' }}>Having trouble with your payment?<a style={{ fontSize: '10px', fontWeight: '400', color: '#828282' }} href="#"> Please check</a></div></Grid>
                    </Grid>
                </div>

                <Divider style={{ margin: '0 57px', height: ' 360px', border: ' 1px solid #E0E0E0' }} ></Divider>

                <div className="middle" style={{ width: "362px" }}>
                    <Grid container xs={12} rowGap={3}>
                        <Grid sx={12} style={{ fontSize: '16px', fontWeight: '600', }}> Payment method</Grid>
                        <Grid xs={12} display={"flex"} justifyContent={"space-between"}><span>Premium plan</span> <span>100.00 INR</span></Grid>

                        <Grid xs={12} display={"flex"} justifyContent={"space-between"}><span>VAT/GST/Sales taxes (18%)</span> <span>18.00 INR</span></Grid>
                        <Grid xs={12} display={"flex"} justifyContent={"space-between"}><span>VAT/GST/Sales taxes (18%)</span> <span>18.00 INR</span></Grid>
                        <Grid xs={12}> <Divider></Divider></Grid>

                        <Grid xs={12} display={"flex"} justifyContent={"space-between"}><span style={{ fontSize: '16px', fontWeight: '600', }}>Total</span> <span style={{ fontSize: '16px', fontWeight: '600' }}>118.00 INR</span></Grid>

                        <Grid xs={12}>   <Accordion sx={{ border: '0 solid white', boxshadow: '0 0 0 whhite' }}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownRoundedIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>Do you have a promo code?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container sx={12} columnGap={3}>
                                    <Grid xs={7}>
                                        <div ><TextField fullWidth id="outlined-basic" placeholder='Name text' variant="outlined" />
                                        </div> </Grid>
                                    <Grid xs={4}><Button sx={{ height: '56px' }} variant='contained' style={{ textTransform: 'none' }}>Apply</Button></Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion></Grid>
                        <Grid xs={12}> <Button fullWidth variant='contained' style={{ fontSize: '14px', fontWeight: '600' }}>Confirm and pay</Button></Grid>
                        <Grid xs={12}><div style={{ fontSize: '10px', fontWeight: '400', color: '#828282', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}><LockIcon fontSize='small' style={{ marginRight: '10px', width: '15px' }}></LockIcon> Secure payment with SSL Encryptioninfo</div>
                            <div style={{ fontSize: '10px', fontWeight: '400', color: '#828282' }}>Having trouble with your payment?<a style={{ fontSize: '10px', fontWeight: '400', color: '#828282' }} href="#"> Please check</a></div></Grid>
                    </Grid>
                </div>

            </div>
        </div></>
    );
}

export default Paymentpage;
