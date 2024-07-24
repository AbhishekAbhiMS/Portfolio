import { Button, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import paysuccess from "../../images/Frame.png"
import "./PaymentSuccess.css"
import paymentfail from "../../images/payfail.png"
import { useState } from "react"
const Payment=()=>{
    const [pay,setpay]=useState(true)

let data=[

    {
        type:'Payment successful',
        trnumber:'Transaction number : 123456789123',
        plan:'Premium plan',
        planvalue:'100.00 INR',
        tax:'VAT/GST/Sales taxes (18%)',
        taxvalue:'18.00 INR',
        promocode:'newpromo',
        total:'100.00 INR',
        btnname:'Download template',
        linkname:'Back to my profile'},
 
{
    type:'Payment failed',
    trnumber:'Tiket number : 1234',
    plan:'Premium plan',
    planvalue:'100.00 INR',
    tax:'VAT/GST/Sales taxes (18%)',
    taxvalue:'18.00 INR',
    promocode:'newpromo',
    total:'100.00 INR',
    btnname:'Try again',
    linkname:'Need help?'}
 ]

    return(<>
    <div style={{width:'100%',height:'85vh' ,margin:'22px 0', display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',backgroundColor:'white'}}>

        <div  className="paymet" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',width:'364px',flexDirection:'column',overflowY:'scroll'}}>
            <div className="topimg" style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',marginBottom:'40px'}}> <img src={pay?paysuccess:paymentfail} alt="" /></div>
        <div className="paycontent">
          <Grid container xs={12} rowGap={3}>
            <Grid xs={12}  style={{fontSize:'22px',fontWeight:'600',color:pay?"#27AE60":"#EB5757"}}>{pay?data[0].type:data[1].type}</Grid>
            <Grid xs={12} style={{fontSize:'14px',fontWeight:'400',color:"#828282"}}>{pay?data[0].trnumber:data[1].trnumber}</Grid>
            <Grid container xs={12}>
            <Grid xs={6} style={{fontSize:'14px',fontWeight:'400'}}>{pay?data[0].plan:data[1].plan}</Grid>
            <Grid xs={6} sx={{textAlign:'end',fontSize:'14px',fontWeight:'400'}}>{pay?data[0].planvalue:data[1].planvalue}</Grid>
            </Grid>

<Grid container xs={12}>
            <Grid xs={6} style={{fontSize:'14px',fontWeight:'400'}}>{pay?data[0].tax:data[1].taxvalue}</Grid>
            <Grid xs={6} sx={{textAlign:'end',fontSize:'14px',fontWeight:'400'}}>{pay?data[0].taxvalue:data[1].taxvalue}</Grid>
            </Grid>
            <Grid container xs={12}>
            <Grid xs={6} style={{fontSize:'14px',fontWeight:'400'}}>Promo code : newpromo</Grid>
            <Grid xs={6} sx={{textAlign:'end',fontSize:'14px',fontWeight:'400'}}>18.00 INR</Grid>
            </Grid>
            <Grid container xs={12}>
            <Grid xs={6} style={{fontSize:'16px',fontWeight:'600'}}>Total</Grid>
            <Grid xs={6} sx={{textAlign:'end',fontSize:'16px',fontWeight:'600'}}>{pay?data[0].total:data[1].total}</Grid>
            </Grid>
                        <Grid xs={12} ><Button fullWidth sx={{textTransform:'none'}} variant="contained" onClick={()=>{
                            setpay(!pay)
                            
                        }} >{pay?data[0].btnname:data[1].btnname}</Button></Grid>
                        <Grid xs={12} sx={{textAlign:'center'}}><a href={"#"}>{pay?data[0].linkname:data[1].linkname}</a></Grid>
          </Grid>
        </div>
        </div>
    </div>
    
    </>)
}
export default Payment