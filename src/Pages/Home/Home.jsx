
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import modi from "../../images/image 20.png"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, ImageList, ImageListItem, Paper, Stack, Typography } from "@mui/material"
import logo from "../../images/logo.png.png"
import { Input } from '@mui/joy';
import Cardcomponent from '../../components/Cards/Card';
import "./Hoe.css"
import NewCard from '../../components/Cards/NewsCard';
import Login from '../LoginTemplates/Login';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
];

const Home = () => {
    const [LoginOpen, setLoginOpen] = useState(false)
    const [singup, setSingup] = useState(false)
    const [Findacc, setFindacc] = useState(false)

    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);

    const [expanded3, setExpanded3] = useState(false);


    const handelLogin = () => {
        setLoginOpen(true)
        // setSingup(false)
        // console.log(LoginOpen,'aa');

    }
    // const handelSingup = () => {
    //     setLoginOpen(false)
    //     // setSingup(true)
    //     // console.log(LoginOpen,'aa');

    // }

    const handleExpansion1 = (e) => {
        setExpanded1((prevExpanded) => !prevExpanded);
    };
    const handleExpansion2 = (e) => {
        setExpanded2((prevExpanded) => !prevExpanded);
    };
    const handleExpansion3 = (e) => {
        setExpanded3((prevExpanded) => !prevExpanded);
    };
    return (<>
        {/* {LoginOpen ? <div id="cardouter" style={{ backgroundColor: '#0606063b', zIndex: 2, height: '100vh', width: '100%', position: 'fixed', top: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => {
            if (e.target.id == 'cardouter') {
                setLoginOpen(!LoginOpen)
                setSingup(false)
            }
        }} ><Login /></div> : ''
        }



        {Singup ? <div id="cardouter" style={{ backgroundColor: '#0606063b', zIndex: 2, height: '100vh', width: '100%', position: 'fixed', top: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => {
            if (e.target.id == 'cardouter') {
                setSingup(!singup)
                setLoginOpen(false)
            }
        }} ><Singup /></div> : ''
        } */}

        {/* {   LoginOpen? <div id="cardouter" style={{ backgroundColor: '#0606063b',zIndex:2, height: '100vh', width: '100%', position: 'fixed', top: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => {
          if (e.target.id == 'cardouter') {
            setLoginOpen(!LoginOpen)
          }
        }} ><Login/></div>:''
} */}
        {/* homenavbar */}
        {/* <CancelBid></CancelBid> */}
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', backgroundColor: '#E7F5FE' }}>
            <div style={{ width: '100%', height: '55px', display: "flex", alignItems: "center", justifyContent: 'space-between', maxWidth: '1440px', margin: '0 45px', backgroundColor: '#E7F5FE' }}>
                <div><img src={logo} width={'164px'} height={'37px'} alt="logo" /></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '260px' }}><div color='black' style={{ fontSize: '16px' }}>service</div>
                    <div>< NotificationsNoneIcon fontSize='large' /></div>
                    <div><Button variant='contained' sx={{ display: 'flex', alignItems: 'center', textTransform: 'none' }} onClick={handelLogin}>Login / Sign Up</Button></div></div>
            </div>
        </div>

        {/* homemain */}
        <Grid sx={{ flexGrow: 1, padding: '16px 62px 29px 62px', marginBottom: '200px' }} className='homebackgroung' flexDirection={"column"} container spacing={2}  >
            <Grid container justifyContent={"center"} paddingTop={"15px"}  >
                <div className="searchbar" style={{ margin: '100px 0px', display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: "space-evenly" }} >
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: "30px", fontWeight: '600' }}>One place, millions of ways to tell your story</div>
                    <div className="searchicon" style={{ marginTop: '50px', maxWidth: '832px', width: '100%' }}><Input placeholder='  Enter names / companies'
                        endDecorator={<Button sx={{ width: '150px' }} variant='contained'>Search</Button>}
                        sx={{
                            "--Input-radius": "7px",
                            "--Input-gap": "12px",
                            "--Input-placeholderOpacity": 0.6,
                            "--Input-focusedThickness": "2px",
                            "--Input-minHeight": "55px",
                            "--Input-paddingInline": "10px",
                            "--Input-decoratorChildHeight": "33px",
                        }}
                    /></div>
                </div>
                <Grid container xs={12} gap={3} style={{
                    maxWidth: '1440px', width: '100%',
                    display: 'flex', alignItems: 'center'
                }} >
                    <Grid xs={5.3} sx={{
                        boxShadow: "0px 6px 12px 0px #0000001A", backgroundColor: '#FFFFFF', borderRadius: '20px', display: 'flex', justifyContent: 'space-evenly', boxShadow: "0px 6px 12px 0px #0000001A", height: '665px',
                    }}>
                        <Cardcomponent img={modi} name={"Narendra modi"} subname={'Indian prime minister'} btnname={'View Profie'} namesize={"30px"} subnamesize={"12px"} imgheight={"78%"}></Cardcomponent>

                    </Grid>
                    <Grid xs={6.4} sx={{
                        padding: '26px 20px 26px 30px', boxShadow: "0px 6px 12px 0px #0000001A", backgroundColor: '#FFFFFF', borderRadius: '20px', display: 'flex', boxShadow: "0px 6px 12px 0px #0000001A", height: '665px', flexDirection: 'column'
                    }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '12px' }}>
                            <div ><div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '6px' }}>Recently joined members</div>
                                <span style={{ fontSize: '14px', fontWeight: '400', color: '#626780' }} >Lorem Ipsum is simply dummy text of the printing.</span></div>
                            <div><Button variant='outlined' style={{ textTransform: 'none', color: '#2F80ED', borderRadius: '50px' }}>View all members</Button></div>
                        </div>
                        <Divider ></Divider>
                        <Grid className='paymet' container xs={12} columnGap={2} marginTop={"12px"} sx={{ overflowX: 'scroll' }}>
                            {[1, 2, 3, 4, 5, 6].map((e, i) => {
                                return (<>
                                    <Grid xs={3.8} sx={{
                                        boxShadow: "0px 6px 12px 0px #0000001A", backgroundColor: '#FFFFFF', borderRadius: '12px', display: 'flex', justifyContent: 'space-evenly', boxShadow: "0px 6px 12px 0px #0000001A", height: '250px',
                                    }}><Cardcomponent img={modi} name={"Narendra modi"} subname={'Indian prime minister'} btnname={'View Profie'} namesize={"12px"} subnamesize={"10px"}></Cardcomponent>

                                    </Grid>
                                </>)
                            })}
                        </Grid>
                    </Grid>
                </Grid>




                <Grid container xs={12} style={{
                    maxWidth: '1440px', width: '100%',
                    display: 'flex', alignItems: 'center', marginTop: '22px'
                }} >
                    <Grid xs={12} sx={{
                        padding: '26px 20px 26px 30px', boxShadow: "0px 6px 12px 0px #0000001A", backgroundColor: '#FFFFFF', borderRadius: '20px', display: 'flex', boxShadow: "0px 6px 12px 0px #0000001A", flexDirection: 'column'
                    }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '12px' }}>
                            <div ><div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '6px' }}>Recently joined members</div>
                                <span style={{ fontSize: '14px', fontWeight: '400', color: '#626780' }} >Lorem Ipsum is simply dummy text of the printing.</span></div>
                            <div><Button variant='outlined' style={{ textTransform: 'none', color: '#2F80ED', borderRadius: '50px' }}>View all news</Button></div>
                        </div>
                        <Divider ></Divider>
                        <div className="horizontal-scroll-container" style={{ overflowX: 'scroll', whiteSpace: 'nowrap', marginTop: '14px' }}>
                            <div className="horizontal-scroll" style={{
                                display: 'inline-flex'
                            }}>
                                {[1, 2, 3, 4, 5, 6, 7, , 8, 9, 21, 34, 54, 56, 34, 23, 78, 48, 20, 45, 68,].map((idx) => (
                                    <div style={{
                                        flex: "0 0 auto", /* Ensure items don't grow or shrink */
                                        width: '200px',/* Set item width */
                                        /* Set item height */
                                        marginRight: '30px',
                                        paddingBottom: '12px' /* Add some space between items */
                                    }} ><Cardcomponent img={modi} name={"Narendra modi"} subname={'Indian prime minister'} btnname={'View Profie'} namesize={"12px"} subnamesize={"10px"}></Cardcomponent>


                                    </div>
                                ))}
                            </div>
                        </div>

                    </Grid>
                </Grid>


                <Grid container xs={12} style={{
                    maxWidth: '1440px', width: '100%',
                    display: 'flex', alignItems: 'center', marginTop: '22px'
                }} >
                    <Grid xs={12} sx={{
                        padding: '26px 20px 26px 30px', boxShadow: "0px 6px 12px 0px #0000001A", backgroundColor: '#FFFFFF', borderRadius: '20px', display: 'flex', boxShadow: "0px 6px 12px 0px #0000001A", flexDirection: 'column'
                    }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '12px' }}>
                            <div ><div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '6px' }}>Recently joined members</div>
                                <span style={{ fontSize: '14px', fontWeight: '400', color: '#626780' }} >Lorem Ipsum is simply dummy text of the printing.</span></div>
                            <div><Button variant='outlined' style={{ textTransform: 'none', color: '#2F80ED', borderRadius: '50px' }}>View all news</Button></div>
                        </div>
                        <Divider ></Divider>
                        <div className="horizontal-scroll-container" style={{ overflowX: 'scroll', whiteSpace: 'nowrap', marginTop: '14px' }}>
                            <div className="horizontal-scroll" style={{
                                display: 'inline-flex'
                            }}>
                                {[1, 2, 3, 4, 5, 6, 7, , 8, 9, 21, 34, 54, 56, 34, 23, 78, 48, 20, 45, 68,].map((idx) => (
                                    <div style={{
                                        flex: "0 0 auto",
                                        width: '328px',
                                        height: '360px',
                                        marginRight: '30px',
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '12px',
                                        padding: '14px',
                                        display: 'flex',
                                        marginBottom: '14px',
                                        justifyContent: 'space-evenly',
                                        boxShadow: "0px 6px 12px 0px #0000001A", /* Add some space between items */
                                    }} >
                                        <NewCard img={modi} name={"Narendra modi"} subname={'Indian prime minister'} btnname={'View Profie'} namesize={"12px"} subnamesize={"10px"}></NewCard>


                                    </div>
                                ))}
                            </div>
                        </div>

                    </Grid>
                </Grid>

                {/* imagesscrool */}
                <Grid container xs={12} style={{
                    maxWidth: '1440px', width: '100%',
                    display: 'flex', alignItems: 'center', marginTop: '22px'
                }} >
                    <Grid xs={12} sx={{
                        padding: '26px 20px 26px 30px', boxShadow: "0px 6px 12px 0px #0000001A", backgroundColor: '#FFFFFF', borderRadius: '20px', display: 'flex', boxShadow: "0px 6px 12px 0px #0000001A", flexDirection: 'column'
                    }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '12px' }}>
                            <div ><div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '6px' }}>Top news</div>
                                <span style={{ fontSize: '14px', fontWeight: '400', color: '#626780' }} >Lorem Ipsum is simply dummy text</span></div>
                            <div><Button variant='outlined' style={{ textTransform: 'none', color: '#2F80ED', borderRadius: '50px' }}>View all news</Button></div>
                        </div>
                        <Divider ></Divider>
                        <div className="horizontal-scroll-container" style={{ overflowX: 'scroll', whiteSpace: 'nowrap', marginTop: '16px ' }}>
                            <div className="horizontal-scroll" style={{
                                boxShadow: '0px 6px 12px 0px #0000001A', backgroundColor: '#FFFFFF', borderRadius: '12px', display: 'flex', justifyContent: 'space-evenly', boxShadow: "0px 6px 12px 0px #0000001A", display: 'inline-flex'
                            }}>
                                {images.map((idx) => (
                                    <div style={{
                                        flex: "0 0 auto", /* Ensure items don't grow or shrink */
                                        width: '500px',/* Set item width */
                                        marginRight: '22px',
                                        backgroundColor: '#FFFFFF',
                                        marginBottom: '12px',
                                        display: 'flex',
                                        height: '270px',
                                        justifyContent: 'space-evenly',


                                        /* Add some space between items */
                                    }} >
                                        <img height={'100%'} width={"100%"} style={{ objectFit: 'cover', borderRadius: '6px', boxShadow: "0px 6px 12px 0px #0000001A" }} src={modi} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </Grid>
                </Grid>


                {/* dropopen */}

                <Grid container xs={12} style={{
                    maxWidth: '1440px', width: '100%',
                    display: 'flex', alignItems: 'center', marginTop: '22px'
                }} >
                    <Grid xs={12} sx={{
                        padding: '26px 20px 26px 30px', boxShadow: "0px 6px 12px 0px #0000001A", backgroundColor: '#FFFFFF', borderRadius: '20px', display: 'flex', boxShadow: "0px 6px 12px 0px #0000001A", flexDirection: 'column'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '12px' }}>
                            <div ><div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '6px' }}>Top news</div>
                                <span style={{ fontSize: '14px', fontWeight: '400', color: '#626780' }} >Lorem Ipsum is simply dummy text</span></div>
                            <div><Button variant='outlined' style={{ textTransform: 'none', color: '#2F80ED', borderRadius: '50px' }}>View all news</Button></div>
                        </div>
                        <Accordion key={3} expanded={expanded1} onChange={handleExpansion1}  >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Stack paddingY={1}>
                                    <Typography data-testid='Default-department' style={{ fontSize: '16px', fontWeight: '600' }} className='m-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry? </Typography>
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion key={1} expanded={expanded2} onChange={handleExpansion2}   >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Stack paddingY={1}>
                                    <Typography data-testid='Default-department' style={{ fontSize: '16px', fontWeight: '600' }} className='m-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry? </Typography>
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion key={2} expanded={expanded3} onChange={handleExpansion3}  >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Stack paddingY={1}>
                                    <Typography data-testid='Default-department' style={{ fontSize: '16px', fontWeight: '600' }} className='m-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry? </Typography>
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </AccordionDetails>
                        </Accordion>
                    </Grid></Grid>




            </Grid>
        </Grid>
        <Login
            setLoginOpen={setLoginOpen}
            LoginOpen={LoginOpen}
            setSingup={setSingup}
            singup={singup}
            Findacc={Findacc}
            setFindacc={setFindacc}
        />
    </>)
}
export default Home







