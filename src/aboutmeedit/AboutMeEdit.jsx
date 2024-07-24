import { Textarea } from "@mui/joy"
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import "./AboutEdit.css"

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
const AboutMEEdit = () => {
    return (
        <>
               <div style={{width:'100%',maxWidth:'1000px' , display:'flex',alignItems:'center',justifyContent:'center',padding:'20px',borderRadius:'12px',background:'white'}}> 

               <Grid container xs={12} spacing={3}
                >
                    <Grid item xs={12} sx={{display:'flex',alignItems:'cneter',justifyContent:'space-between',fontSize:'20px',fontWeight:'600'}} > <span>About me</span> <span><CloseIcon fontSize="medium"></CloseIcon></span></Grid>
                    <Grid item xs={12} style={{fontSize:'12px',fontWeight:'400',color:"828282"}}>It's also the first item on your profile that recruiters notice. Quickly describe your qualifications and why you are the best candidate for the position you are seeking.</Grid>
                    <Grid item xs={12}><TextField fullWidth
                        id="outlined-uncontrolled"
                        label="Name"
                    /></Grid>
                     <Grid item xs={6}>
                     <TextField
                         fullWidth
                            id="outlined-select-currency"
                            select
                            label="Add a title"
                            defaultValue="india"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField></Grid>
                        <Grid item xs={6}> <TextField
                         fullWidth
                            id="outlined-select-currency"
                            select
                            label="Phone number"
                            defaultValue="india"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField></Grid>
                     <Grid item xs={6}> <TextField
                         fullWidth
                            id="outlined-select-currency"
                            select
                            label="Email"
                            defaultValue="india"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField></Grid>
                        <Grid item xs={6}> <TextField
                         fullWidth
                            id="outlined-select-currency"
                            select
                            label="place"
                            defaultValue="india"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField></Grid> 
                        
                        <Grid item xs={6}> <TextField
                         fullWidth
                            id="outlined-select-currency"
                            select
                            label="Date of Birth"
                            defaultValue="india"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField></Grid>
                    <Grid item xs={12}><Textarea placeholder="About me.."  minRows={6} size="md" /></Grid>
                    <Grid item xs={12} container alignItems={"center"} justifyContent={"flex-end"}><Button variant="outlined" style={{marginRight:'10px'}}>Cancel</Button><Button variant="contained">save</Button></Grid>

                </Grid>
               </div>


        </>
    )
}
export default AboutMEEdit