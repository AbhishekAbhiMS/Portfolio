
import logo from "../images/logo.png.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import StormIcon from '@mui/icons-material/Storm';
import XIcon from '@mui/icons-material/X';
const Footer =()=>{
    return(<div style={{display:'flex',alignItems:'center',width:'100%',justifyContent:'center',backgroundColor:'black'}}>
    <div style={{width:'100%',height:'55px',display:"flex",alignItems:"center",justifyContent:'space-between',maxWidth:'1440px',margin:'0 45px',backgroundColor:'black'}}>
        <div><img src={logo} width={'164px'} height={'37px'} alt="logo" /></div>
        <div style={{color:'white'}}>© 2023, company name Pvt. Ltd. All Rights Reserved.</div>
        <div><FacebookIcon style={{color:"white",margin:'0px 15px'}}/> <InstagramIcon style={{color:"white",margin:'0px 15px'}}/><StormIcon style={{color:"white",margin:'0px 15px'}}/><XIcon style={{color:"white",margin:'0px 15px'}}/></div>
    </div>
    </div>)
}
export default Footer