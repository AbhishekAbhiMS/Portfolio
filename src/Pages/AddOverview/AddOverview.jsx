import { Box, Button, Divider, Grid, MenuItem, TextField } from "@mui/material"
import modi from "../../images/image 20.png"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BackupIcon from '@mui/icons-material/Backup';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";


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

const AddOverview=()=>{
const [imgupload,setimgupload]=useState();
const handleImageChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setimgupload(reader.result);
    };
  }
};

  const handleDelete = () => {
    setimgupload(null);
  };
    return(<>
    <div style={{backgroundColor:'white', padding:'20px',width:'1000px',paddingLeft:'20px',paddingRight:'20px',borderRadius:'12px',}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
<span style={{fontSize:'20px',fontWeight:'600'}}>Add Overview</span> <span><CloseIcon></CloseIcon></span> </div>

<div style={{margin:'30px 0', fontSize:'14px',fontWeight:'400',color:'#828282'}}>Share details about company overview.</div>
<div><div style={{minHeight:'182px',height:'100%',maxHeight:'200px'}}> <img width={'182px'} height={"182px"} style={{objectFit:'cover'}} src={imgupload?imgupload:modi} alt="tawwyuw" /></div>
<div style={{marginTop:'-29px',display:'flex'}}><button style={{width:'90px',height:'29px',margin:'0 2px 0 0',backgroundColor:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'space-around'}}>delete<DeleteForeverIcon style={{color:'white'}}></DeleteForeverIcon></button>
<>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="image-upload-input"
        onChange={handleImageChange}
      />
      <label htmlFor="image-upload-input">
        <Button
          component="span"
          role={undefined}
          variant="contained"
          startIcon={<CloudUploadIcon />}
          style={{ textTransform: 'none', width: '90px', height: '29px', backgroundColor: 'black' }}
        >
          Upload
        </Button>
      </label>
    </></div></div><Grid container xs={12} columnGap={3} rowGap={3} margin={"22px  0 "}>
    <Grid xs={11.9}><TextField fullWidth label="name" id="name" /></Grid>
    <Grid xs={5.8}> <div>
        <TextField
          id="Website"
          select
          label="Website"
          placeholder="www.abc.com"
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        
      </div></Grid>
    <Grid xs={5.8}> <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Phone number"
          placeholder="Phone number"
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        
      </div></Grid>
    <Grid xs={11.9}><TextField fullWidth label="Industry" id="Industry" /></Grid>
    <Grid xs={11.9}><TextField fullWidth label="Company size" id="Company size" /></Grid>
    <Grid xs={11.9}><TextField fullWidth label="Specialties" id="Specialties" /></Grid>
    <Grid xs={11.9}>  <div className="App">
      <TextField
        variant="outlined"
        placeholder="Write awesome things about yourself"
        multiline
        label="Specialties"
        fullWidth
        id="Specialties"
       
      />
    </div></Grid>

    <Grid xs={5.8}>
    <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Company start date"
          defaultValue="EUR"
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
    </Grid>



</Grid>
<Divider></Divider>
<div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',width:'100%',marginTop:'22px'}}><div style={{margin:'0 10px'}}><Button variant="outlined">Cancel <CloseIcon></CloseIcon></Button></div><div><Button variant="contained">Save <SaveIcon style={{color:'white'}}></SaveIcon> </Button></div></div>






    </div>
    </>)
}
export default AddOverview