import * as React from 'react';
import { Button } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, Card, CardActions, CardContent, CardMedia, Divider, Grid, ListItem, Paper, Typography } from "@mui/material";


export default function NewCard({img,name,subname,btnname="View Profile",namesize,subnamesize,imgheight="65%"}) {
  return (
    <> 

<Card style={{boxShadow:'0px 0px 0px white'}}  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 ,borderRadius:'10px',objectFit:'cover'}}
        image={img}
        title="green iguana"
      />
      <CardContent style={{padding:'0px 0',width:'100%',marginTop:'12px'}}>
       
      <div style={ {width: '100%',fontSize:'14px',fontWeight:'600',
    overflow: 'hidden',
    whiteSpace: 'pre-wrap'}}>
NZ vs PAK 2nd T20I Live Streaming: How to watch New Zealand vs Pakistan 2nd T20I in India and other countries     </div>
      </CardContent>
      <CardActions >
        <Typography sx={{display:'flex',alignItems:'center'}} size="small"><img style={{borderRadius:'100%',marginRight:'10px'}} width={'26px'} height={'26px'} src={img} alt="" /> <span style={{fontSize:'14px',fontWeight:500,color:'gray'}}>{"wings"}</span></Typography>
        <Typography style={{color:'rgb(177 172 172)'}} fontSize={'12px'} fontWeight={'500'}>{"18m"} ago</Typography>
      </CardActions>
      <CardContent style={{padding:'0px 0'}}>
       
        <div style={{fontSize:'12px' , fontWeight:'400',padding:'15px 0 0 0',textOverflow:'ellipsis',color:'rgb(98, 103, 128)',width:'300px',overflow:'hidden',textOverflow:"ellipsis"}} >
         {"kjwncqenwe cqdniw wq wqid xjqw xqncqnwxicieqnceunecqxqecnewwncececnewiueceqioqexoiqemiewnewineqicioeqeqoinieen "}
        </div>
      </CardContent>
      <CardContent style={{padding:'0px 0'}}>
      <div style={{width:'100%',marginTop:'4%'}}><Button variant='contained' style={{textTransform:'none',width:'100%',height:'28px',padding:'5px 0'}}><span style={{marginRight:'10px',fontSize:'12px',fontWeight:'400',color:'#F2F2F2'}}>{btnname}</span><RemoveRedEyeIcon/></Button></div>

      </CardContent>
    </Card>
    </>
  )


}