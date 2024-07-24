import { Divider, Textarea } from "@mui/joy"
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import person from "../images/image 29.png"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import "./AddAchivement.css"

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
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const AddAchivement = () => {
    const [arr,setarr]=useState([])
    return (
        <>
               <div style={{background:'white',width:'100%',maxWidth:'1000px' , display:'flex',alignItems:'center',justifyContent:'center',padding:'20px',borderRadius:'12px',height:'85vh'}}> 

               <Grid container xs={12} spacing={3} className="achivementscroll" sx={{height:'100%',overflowX:'scroll'}}
                >
                    <Grid item xs={12} sx={{display:'flex',alignItems:'cneter',justifyContent:'space-between',fontSize:'20px',fontWeight:'600'}} > <span>Add Achievements</span> <span><CloseIcon fontSize="medium"></CloseIcon></span></Grid>
                    
                    <Grid item xs={12} style={{fontSize:'12px',fontWeight:'400',color:"828282"}}>It's also the first item on your profile that recruiters notice.</Grid>



                    <Grid item xs={12}><TextField fullWidth
                        id="outlined-uncontrolled"
                        label="Name"
                     /></Grid>
                                         <Grid item xs={12} style={{fontSize:'20px',fontWeight:'600',color:"828282"}}><span>Achievement timeline</span></Grid>

                     <Grid item xs={6}><TextField
                         fullWidth
                            id="outlined-select-currency"
                            select
                            label="To Date"
                            defaultValue="india"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField></Grid>
                        <Grid item xs={6}><TextField
                         fullWidth
                            id="outlined-select-currency"
                            select
                            label="From Date"
                            defaultValue="india"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField></Grid>
                    
                    <Grid item xs={12}><Textarea placeholder="Achivement details"  minRows={3} size="md" /></Grid>
                    <Grid item xs={12} > <div style={{display:'flex',alignItems:'center',gap:'5px'}}><div style={{position:'relative'}}>
                    <img src={person} alt="" style={{width:'129px'}} /> <div style={{position:'absolute',bottom:'3px',width:'129px',height:'29px',opacity:'0.7'}}><button style={{width:'100%',height:'100%',background:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'center',color:'white',marginRight:'12px',fontSize:'14px',fontWeight:'400'}}><DeleteOutlineIcon fontSize="medium"  />Delete</button></div></div>
                    <div style={{position:'relative'}}>
                    <img src={person} alt="" style={{width:'129px'}} /> <div style={{position:'absolute',bottom:'3px',width:'129px',height:'29px',opacity:'0.7'}}><button style={{width:'100%',height:'100%',background:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'center',color:'white',marginRight:'12px',fontSize:'14px',fontWeight:'400'}}><DeleteOutlineIcon fontSize="medium"  />Delete</button></div></div>
                    <div style={{position:'relative'}}>
                    <img src={person} alt="" style={{width:'129px'}} /> <div style={{position:'absolute',bottom:'3px',width:'129px',height:'29px',opacity:'0.7'}}><button style={{width:'100%',height:'100%',background:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'center',color:'white',marginRight:'12px',fontSize:'14px',fontWeight:'400'}}><DeleteOutlineIcon fontSize="medium"  />Delete</button></div></div></div> </Grid>
                    <Grid item xs={6}><Button
  component="label"
  role={undefined}
  fullWidth
  variant="outlined"
  tabIndex={-1}
  endIcon={<CloudUploadIcon />}
>
  Upload file
  <VisuallyHiddenInput type="file" />
</Button></Grid>
<Grid item xs={6}> </Grid>

{arr.map((e,i)=>{
    return(<Grid xs={12} key={i} item container spacing={3}>
        <Grid item xs={12}> <Divider></Divider></Grid>
        <Grid item xs={12}><TextField fullWidth
            id="outlined-uncontrolled"
            label="Name"
         /></Grid>
                             <Grid item xs={12} style={{fontSize:'20px',fontWeight:'600',color:"828282"}}><span>Achievement timeline</span></Grid>

         <Grid item xs={6}> <TextField
                         fullWidth
                            id="outlined-select-currency"
                            select
                            label="To Date"
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
                            label="From Date"
                            defaultValue="india"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField></Grid>
        
        <Grid item xs={12}><Textarea placeholder="Achivement details"  minRows={3} size="md" /></Grid>
        <Grid item xs={12} > <div style={{display:'flex',alignItems:'center',gap:'5px'}}><div style={{position:'relative'}}>
        <img src={person} alt="" style={{width:'129px'}} /> <div style={{position:'absolute',bottom:'3px',width:'129px',height:'29px',opacity:'0.7'}}><button style={{width:'100%',height:'100%',background:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'center',color:'white',marginRight:'12px',fontSize:'14px',fontWeight:'400'}}><DeleteOutlineIcon fontSize="medium"  />Delete</button></div></div>
        <div style={{position:'relative'}}>
        <img src={person} alt="" style={{width:'129px'}} /> <div style={{position:'absolute',bottom:'3px',width:'129px',height:'29px',opacity:'0.7'}}><button style={{width:'100%',height:'100%',background:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'center',color:'white',marginRight:'12px',fontSize:'14px',fontWeight:'400'}}><DeleteOutlineIcon fontSize="medium"  />Delete</button></div></div>
        <div style={{position:'relative'}}>
        <img src={person} alt="" style={{width:'129px'}} /> <div style={{position:'absolute',bottom:'3px',width:'129px',height:'29px',opacity:'0.7'}}><button style={{width:'100%',height:'100%',background:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'center',color:'white',marginRight:'12px',fontSize:'14px',fontWeight:'400'}}><DeleteOutlineIcon fontSize="medium"  />Delete</button></div></div></div> </Grid>
        <Grid item xs={6}><Button
component="label"
role={undefined}
fullWidth
variant="outlined"
tabIndex={-1}
endIcon={<CloudUploadIcon />}

>
Upload file
<VisuallyHiddenInput type="file" />
</Button></Grid>
<Grid item xs={6}> </Grid>

</Grid>
)
})}



<Grid item xs={6}><Button
  
  style={{borderRadius:'100px',padding:'10px 16px 10px 16px',fontSize:'16px',fontWeight:'400',width:'130px',textTransform:'none'}}
  variant="outlined"
  
  endIcon={<AddIcon />}
  onClick={()=>{
    setarr([...arr,1])
}}
>
  Add more
  <VisuallyHiddenInput type="file" />
</Button></Grid>
<Grid xs={12} item> <Divider></Divider></Grid>

                    <Grid item xs={12} container alignItems={"center"} justifyContent={"flex-end"}><Button variant="outlined" style={{marginRight:'10px'}}  onClick={()=>{
    if (arr.length > 0) {
        const newArr = arr.slice(0, arr.length - 1); 
        setarr(newArr);
      }
}}>Cancel</Button><Button variant="contained">save</Button></Grid>

                </Grid>
               </div>


        </>
    )
}
export default AddAchivement