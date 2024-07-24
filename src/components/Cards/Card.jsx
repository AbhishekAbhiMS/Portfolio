import * as React from 'react';
import { Button } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function Cardcomponent({img,name,subname,btnname="View Profile",namesize,subnamesize,imgheight="65%"}) {
  return (
    <> 

    <div style={{width:'100%',padding:'4% 4% 4% 4%' ,  boxShadow: "0px 6px 12px 0px #0000001A", borderRadius: '12px'
}}>
  <div style={{width:'100%',height:imgheight,marginBottom:'3%'}}><img  style={{ borderRadius:'12px',objectFit:'cover'}}
  width={'100%'} height={"100%"} src={img} alt="image" /> </div>
  <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-evenly',flexDirection:'column',height:'calc(100% -imgheight )'}}><div style={{fontSize:namesize,fontWeight:'600'}}>{name}</div>
    <span style={{fontSize:subnamesize,fontWeight:'400',color:'#626780'}}>{subname}</span>
   </div>
  
  <div style={{width:'100%',marginTop:'4%'}}><Button variant='contained' style={{textTransform:'none',width:'100%',height:'28px',padding:'5px 0'}}><span style={{marginRight:'10px',fontSize:'12px',fontWeight:'400',color:'#F2F2F2'}}>{btnname}</span><RemoveRedEyeIcon/></Button></div>


    </div>
    </>
  )


}