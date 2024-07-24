import res from "../images/image 12.png"
import prime from "../images/Frame 54.png"
import { Button, Grid } from "@mui/material";
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import "./Preview.css"
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { useState } from "react";
import King from "../images/Groupking.png"
import Navbar from "../Pages/Navbar";
import Planview from "../Planview/Planview";
// import Payment from "../Pages/PaymemtSuccess/PaymentSuccess";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { NavLink } from "react-router-dom";
function Preview() {
    const [show, setshow] = useState(false)
    const [planview, setplanview] = useState(false)

    return (<>
        <Navbar btnname="My Pro-file" nav={"/admin"}></Navbar>
        {planview ? <div id="cardouter" style={{ backgroundColor: '#0606063b', zIndex: 2, height: '100vh', width: '100%', position: 'fixed', top: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => {
            if (e.target.id == 'cardouter') {
                setplanview(!planview)
            }
        }} ><Planview></Planview></div> : ''
        }
        <section style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <section className="main" style={{ width: '100%', maxWidth: '1440px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '43px 62px 43px 62px', boxSizing: 'border-box', boxShadow: ' 0px 6px 12px 0px #0000001A', }}>
                <div className="inner" style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>

                    <div className="left" style={{ width: "293px", height: '414px' }}>
                        <img src={res} alt="" /> </div>

                    <Grid container rowGap={2} className="right" style={{ width: "360px", height: '304px' }}>
                        <Grid xs={12}><img src={prime} alt="" /></Grid>
                        <Grid xs={12} sx={{ fontSize: '20px', fontWeight: '600' }}>Brown Modern simply clean</Grid>
                        <Grid xs={12} sx={{ fontSize: '20px', fontWeight: '600' }}>CV resume</Grid>
                        <Grid xs={12} sx={{ fontSize: '12px', fontWeight: '400', color: '#828282' }}>Size - Resume  21 x 29.7 cm</Grid>
                        <Grid xs={12} style={{ width: '100%' }}><Grid container xs={12} columnGap={2}>
                            <Grid xs={8}><NavLink to={'/payment'} style={{textTransform:'none'}}><Button onClick={() => {
                                setplanview(!planview)
                            }} variant="contained" fullWidth sx={{ fontSize: '14px', fontWeight: '600', textTransform: 'none', display: 'flex', alignItems: 'center', background: '#2388FF' }}  > <img src={King} alt="" style={{ marginRight: '10px' }} /> Use this template</Button></NavLink></Grid>
                            <Grid xs={1}><Button variant="outlined" style={{ minWidth: '35px !importent' }}><StarOutlineRoundedIcon /></Button> </Grid>
                            <Grid xs={1}><Button variant="outlined" style={{ minWidth: '35px' }}><MoreHorizRoundedIcon /></Button></Grid></Grid></Grid>
                        <Grid xs={12} sx={{ fontSize: '14px', fontWeight: '400', color: '#828282' }}>100% fully cusomizable</Grid>
                        <Grid xs={12} sx={{ fontSize: '14px', fontWeight: '400', color: '#828282' }}>Edit and download on the go</Grid>
                        <Grid xs={12} sx={{ fontSize: '14px', fontWeight: '400', color: '#828282' }}>Share and publish anywhere</Grid>
                    </Grid>



                </div>
            </section>
            <section className="main" style={{ width: '100%', maxWidth: '1440px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '26px 20px 26px 20px', boxSizing: 'border-box', boxShadow: ' 0px 6px 12px 0px #0000001A', flexDirection: 'column' }}>
                <div style={{ margin: '12px', width: '90%', textAlign: 'start', marginLeft: '22px' }}>Text</div>



                <Grid container spacing={{ xs: 2, md: 3 }} justifyContent={'center'} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((e) => (
                        <Grid item xs={6} md={3} lg={2} key={e}>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={res}
                                    alt=""
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        border: show === e ? '2px solid #2388FF' : '',
                                        borderRadius: '6px',
                                    }}
                                    onMouseLeave={() => {
                                        if (e % 2 === 0 || e < 10) {
                                            setshow(null);
                                        }
                                    }}
                                    onMouseEnter={() => {
                                        if (e % 2 === 0 || e < 10) {
                                            setshow(e);
                                        }
                                    }}
                                />
                                {show == e && <div className="primeshow" style={{ width: '100%', height: '128px', padding: '13px 12px 13px 12px', boxGizing: ' border-box', position: 'absolute', bottom: '3px', borderBottomRightRadius: '6px', borderBottomLeftRadius: '6px' }} onMouseEnter={() => {
                                    if (e % 2 == 0 || e < 10) {
                                        setshow(e)
                                    }
                                }}
                                    onMouseLeave={() => {
                                        if (e % 2 == 0 || e < 10) {
                                            setshow(null)
                                        }
                                    }}>
                                    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', width: '100%' }}><span style={{ borderRadius: '100px', width: '46px', height: '20px', fontSize: '10px', fontWeight: '600', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 1 of 2</span> <img src={prime} alt="" /></div>
                                    <div style={{ fontSize: '14px', fontWeight: '600', color: 'white', margin: '8px 0', width: '230px' }}>Brown Modern simply clean CV resume</div>
                                    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', width: '100%' }}><span style={{ fontSize: '15px', fontWeight: '600', color: 'white' }}>₹ 100</span><NavLink to={'/payment'} style={{textTransform:'none'}}><Button onClick={() => {
                                        setplanview(!planview)
                                    }} varient='contained' style={{ background: 'white' }}> Buy now</Button></NavLink></div></div>
                                }
                            </div>

                        </Grid>
                    ))}
                </Grid>

            </section>
        </section></>
    );
}

export default Preview;