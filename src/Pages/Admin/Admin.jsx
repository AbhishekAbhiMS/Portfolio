import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, ListItem, Paper, Typography } from "@mui/material";
import * as React from 'react';
import modi from "../../images/modi.png"
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import skill from "../../images/Frame.svg"
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EditIcon from '@mui/icons-material/Edit';
import "./Admin.css"
import p1 from ".././../images/image 31.png"
import p2 from ".././../images/image 30.png"
import p3 from ".././../images/image 29.png"
import p4 from ".././../images/group.png"
import news1 from "../../images/Kohli.jpg"
import news2 from "../../images/abd.jpeg"
import news3 from "../../images/police.jpeg"
import { Link } from "react-scroll";
import AboutMEEdit from "../../aboutmeedit/AboutMeEdit";
import AddAchivement from "../../AddAchivement/AddAchivement";
import Navbar from "../Navbar";
import Admindata from "./Json/Admin.json"
import { useParams } from "react-router-dom";




const cardlist = [
  {
    img: news1,
    details: "Kohli's hiatus from cricket, prompted by personal reasons including the birth of his second child, stirred uncertainties regarding his IPL participation. ",
    profilephoto: p1,
    accountname: 'wings',
    timing: '19m'

  },
  {
    img: news2,
    details: "He Wants Me To Come - ABD Contradicts Gavaskar To Confirm Kohli's IPL Participation",
    profilephoto: p1,
    accountname: 'phantom',
    timing: '21m'

  },
  {
    img: news3,
    details: 'The very next day of the incident DGP Javed Ahmed in a press conference announced, "All culprits will be booked within 72 hours".',
    profilephoto: p1,
    accountname: 'zgod',
    timing: '2h'

  },
  {
    img: news1,
    details: "Kohli's hiatus from cricket, prompted by personal reasons including the birth of his second child, stirred uncertainties regarding his IPL participation. ",
    profilephoto: p1,
    accountname: 'wings',
    timing: '19m'

  },
  {
    img: news2,
    details: "He Wants Me To Come - ABD Contradicts Gavaskar To Confirm Kohli's IPL Participation",
    profilephoto: p1,
    accountname: 'phantom',
    timing: '21m'

  },
  {
    img: news3,
    details: 'The very next day of the incident DGP Javed Ahmed in a press conference announced, "All culprits will be booked within 72 hours".',
    profilephoto: p1,
    accountname: 'zgod',
    timing: '2h'

  },
  {
    img: news1,
    details: "Kohli's hiatus from cricket, prompted by personal reasons including the birth of his second child, stirred uncertainties regarding his IPL participation. ",
    profilephoto: p1,
    accountname: 'wings',
    timing: '19m'

  },
  {
    img: news2,
    details: "He Wants Me To Come - ABD Contradicts Gavaskar To Confirm Kohli's IPL Participation",
    profilephoto: p1,
    accountname: 'phantom',
    timing: '21m'

  },
  {
    img: news3,
    details: 'The very next day of the incident DGP Javed Ahmed in a press conference announced, "All culprits will be booked within 72 hours".',
    profilephoto: p1,
    accountname: 'zgod',
    timing: '2h'

  },
  {
    img: news1,
    details: "Kohli's hiatus from cricket, prompted by personal reasons including the birth of his second child, stirred uncertainties regarding his IPL participation. ",
    profilephoto: p1,
    accountname: 'wings',
    timing: '19m'

  },
  {
    img: news2,
    details: "He Wants Me To Come - ABD Contradicts Gavaskar To Confirm Kohli's IPL Participation",
    profilephoto: p1,
    accountname: 'phantom',
    timing: '21m'

  },
  {
    img: news3,
    details: 'The very next day of the incident DGP Javed Ahmed in a press conference announced, "All culprits will be booked within 72 hours".',
    profilephoto: p1,
    accountname: 'zgod',
    timing: '2h'

  }


]


function Admin() {
  // let { name }=useParams()
  // console.log(name,"aaaa")
  const [AboutEdit, setAboutEdit] = React.useState(false)


  const handelAboutEdit = () => {
    setAboutEdit(true)
    // console.log(LoginOpen,'aa');

  }
  const [Achivement, setAchivement] = React.useState(false)
  const [adminData, setAdminData] = React.useState(Admindata)
  const handelAchivement = () => {
    setAchivement(true)
    // console.log(LoginOpen,'aa');

  }
 
  return (
    <> <Navbar setAdminData={setAdminData} nav={"/preview"}></Navbar>
      {AboutEdit ? <div id="cardouter" style={{ backgroundColor: '#0606063b', zIndex: 2, height: '100vh', width: '100%', position: 'fixed', top: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => {
        if (e.target.id == 'cardouter') {
          setAboutEdit(!AboutEdit)
        }
      }} ><AboutMEEdit></AboutMEEdit></div> : null
      }
      {Achivement ? <div id="cardouter" style={{ backgroundColor: '#0606063b', zIndex: 2, height: '100vh', width: '100%', position: 'fixed', top: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => {
        if (e.target.id == 'cardouter') {
          setAchivement(!Achivement)
        }
      }} ><AddAchivement></AddAchivement></div> : null
      }

      <Grid sx={{ flexGrow: 1, padding: '40px 62px 29px 62px', marginBottom: '200px' }} container justifyContent={"center"} spacing={2} >
        <Grid item xs={12} display={'flex'} justifyContent={'center'} paddingBottom={'14px'} id='Quick Profile'>
          <div style={{width:'100%', maxWidth:'1440px',display:'flex',flexDirection:'column',justifyContent:'center'}} ><Grid container justifyContent="space-between" xs={12 } spacing={2}>

<Grid item xs={6.75}  height={"250px"} sx={{ maxWidth:'540px',
  backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', boxShadow: "0px 6px 12px 0px #0000001A"
}} >
  <div className="photo" style={{paddingRight:"20px"}}>

  <div className="user-details">
<div className="img-wrapper">
<svg className="svg" style={{height:'200px',width:'200px'}}>
<path className="bg" d="M40,90 A40,40 0 1,1 80,90" style={{ stroke: 'rgb(247, 247, 249)' }} />
<path className="meter" d="M40,90 A40,40 0 1,1 80,90" style={{ stroke: '#34C85A', strokeDashoffset: `${360-(2.1*80)}` }} />
</svg>
<img loading="lazy" alt="profile" className="user-img" src={adminData.ProfileImg} />
<div className="user-percentage" style={{ background: 'rgb(255, 255, 255)', color: '#34C85A' }}>80%</div>
</div>
</div>
    {/* <img style={{ borderRadius: '100%', width: '200px', height: "200px" }} src={adminData.ProfileImg} alt="modi" /> */}
  </div>
  <div className="content_admin" style={{ maxWidth: '520px' ,width:'100%'}} >
    <div className="contenttop" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '22px' }}>
      <div>
        <div style={{ marginBottom: '0', marginTop: '-5px', fontSize: '24px', fontWeight: '600' }}>{adminData.AboutMe?.Name}</div>
        <span style={{ fontSize: "14px", fontWeight: '400', color: '#626780' }}>{adminData.SubTitle}</span>
      </div>
      <div style={{  }}><span style={{ fontSize: "14px", fontWeight: '400', color: '#626780' }}>Profile last updated</span><span style={{ fontSize: "14px", fontWeight: '600', color: 'black' }}>- 20/000/0000</span></div>
      
    </div>
    <Divider ></Divider>
    <div className="contentbottom" style={{ marginTop: '22px', display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
      <div className="bottomleft"  >
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <LocationOnOutlinedIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />

          <ListItemText
            primary={adminData.AboutMe?.Place}
          // secondary= {'Secondary text' }
          /></div>

        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>

          <CalendarMonthOutlinedIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />
          <ListItemText
            primary={`${adminData.Experience} years`}
          // secondary={ 'Secondary text'}
          /></div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <AccountBalanceWalletOutlinedIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />
          <ListItemText
            primary={adminData.Income}
          // secondary={ 'Sec</ondary text'}
          /></div>

      </div>
      <Divider orientation="vertical" variant="middle" flexItem sx={{ margin: '0px 22px' }} />

      <div className="bottomright"  >
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <CallIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />
          <ListItemText
            primary={adminData.AboutMe?.PhoneNumber}
          /> </div> <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <MailOutlineRoundedIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />
          <ListItemText
            primary={adminData.AboutMe?.Email}
          /> </div> <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <CalendarMonthOutlinedIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />

          <ListItemText
            primary={adminData?.Joining}
          /></div>

      </div>
    </div>
  </div>
</Grid>

<Grid item xs={5} height={"250px"} sx={{overflow:'hidden',
  backgroundColor: '#FFFFFF', padding: '26px 20px 26px 20px', borderRadius: '20px', boxShadow: "0px 6px 12px 0px #0000001A"
}} >  <div className="right1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ fontSize: '16px', fontWeight: '600' }}>News</div>
    <div><Link spy={true} to="News" smooth={true}> <Button variant="contained" style={{ textTransform: 'none' }} sx={{ borderRadius: '50px', height: '36px', fontSize: '16px' }}>Find more news</Button></Link></div>
  </div>
  <div className="right2">
    <div style={{
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '22px',
      textAlign: 'left', color: '#BDBDBD'

    }}>2 min read 01 Dec 2023, 04:22 PM IST</div>
    <div style={{
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '22px',
      textAlign: 'left',
      padding: '10px 0'

    }}>ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ ದುರ್ಬಳಕೆ - 245 ನಕಲಿ ರೈತರಿಂದ 54.48 ಲಕ್ಷ ರೂಪಾಯಿ ಹಿಂಪಡೆಯಲು ಕ್ರಮ</div>
  </div>
  <Divider style={{ margin: '10px 0' }}></Divider>
  <div className="right3">
    <div style={{
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '22px',
      textAlign: 'left', color: '#BDBDBD'

    }}>2 min read 01 Dec 2023, 04:22 PM IST</div>
    <div style={{
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '22px',
      textAlign: 'left',
      padding: '10px 0'

    }}>ದುಬೈನಲ್ಲಿ 'ಪ್ರಧಾನಿ ಮೋದಿ', ಇಟಲಿ ಪ್ರಧಾನಿ 'ಮೆಲೋನಿ' ಒಟ್ಟಿಗಿರುವ ಫೋಟೋ ಮತ್ತೆ ವೈರಲ್, ನೆಟ್ಟಿಗರಿಂದ ತಮಾಷೆ ಕಾಮೆಂಟ್</div>
  </div>

</Grid>

</Grid></div>


        </Grid>

        <Grid container justifyContent={"space-between"} paddingTop={"15px"} maxWidth={"1440px"} >
          <Grid item xs={2.5}    >
            <div style={{
              position: 'sticky', top: '0', height: '500px',
              backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', borderRadius: '20px', display: 'flex', justifyContent: 'space-evenly', boxShadow: "0px 6px 12px 0px #0000001A"
            }} >

              <Grid item xs={12} >
                <Typography variant="h6" fontSize={'20px'} fontWeight={600} component="span">
                  Quick links
                </Typography>

                <ListItem sx={{ padding: '10px 0px' }} >
                  <ListItemAvatar >
                    <PersonIcon />
                  </ListItemAvatar>
                  <Link spy={true} to="Quick Profile" smooth={true} activeClass="activeClass" style={{ width: '100%' }}>
                    <span className="Quicklinks">
                      Quick Profile
                    </span>     </Link>             </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <InfoIcon />
                  </ListItemAvatar>
                  <Link spy={true} to="About me" smooth={true}>
                    <span className="Quicklinks">About me</span> </Link>
                </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <WorkIcon />
                  </ListItemAvatar>

                  <Link spy={true} to="Employment" smooth={true}>
                    <span className="Quicklinks">Employment</span></Link>
                </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <SchoolIcon />
                  </ListItemAvatar>

                  <Link spy={true} to="Achievements" smooth={true}>
                    <span className="Quicklinks">Education</span></Link>

                </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <EmojiEventsIcon />
                  </ListItemAvatar>
                  <Link spy={true} to="Achievements" smooth={true}>
                    <span className="Quicklinks">Achievements</span></Link>

                </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <img src={skill} alt="" />
                  </ListItemAvatar>
                  <Link spy={true} to="Skills & Languages" smooth={true}>
                    <span className="Quicklinks">Skills & Languages</span></Link>

                </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <NewspaperIcon />
                  </ListItemAvatar>
                  <Link spy={true} to="News" smooth={true}>
                    <span className="Quicklinks">News</span></Link>

                </ListItem>

              </Grid>
            </div>
          </Grid>

          <Grid item xs={9.5} >
            {/* first */}
            <div id="About me" style={{
              backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', boxShadow: "0px 6px 12px 0px #0000001A", flexDirection: 'column'
            }} >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '22px' }} ><span>About me</span><Button onClick={handelAboutEdit} variant="outlined" sx={{ borderRadius: '50px', display: 'flex', alignItems: 'center', textTransform: 'none' }}>Edit <EditIcon sx={{ paddingLeft: '5px' }} fontSize="small" /></Button></div>
              <div>
                <span>What is Lorem Ipsum?</span>
                <p style={{ marginTop: '0px' }} key={adminData.AboutMe?.Details}>
                  {adminData.AboutMe?.Details}
                </p>
              </div>
            </div>
            {/* second */}
            <div id={"Employment"} style={{
              backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px', display: 'flex', boxShadow: "0px 6px 12px 0px #0000001A", flexDirection: 'column'
            }} >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '22px' }} ><h4 style={{ marginBottom: '10px' }}>  Job Details</h4><Button variant="outlined" sx={{ borderRadius: '50px', display: 'flex', alignItems: 'center', textTransform: 'none' }}>Edit <EditIcon sx={{ paddingLeft: '5px' }} fontSize="small" /></Button></div>

              {adminData.JobDetails?.map((data, index) => {
                return (<>
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', height: '300px', overflowY: 'scroll' }} className="horizontal-scroll-container">

                    <div style={{ marginRight: '20px', display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%', position: 'sticky', top: 0 }} >
                      <div style={{ width: '26px', height: '26px', borderRadius: '100%', backgroundColor: ((index + 1) % 2 != 0) ? '#56CCF2' : '#9B51E0' }} > </div>
                      <div style={{ width: '2.5px', height: '100%', backgroundColor: ((index + 1) % 2 != 0) ? '#56CCF2' : '#9B51E0' }}></div>

                    </div>
                    <div>
                      <div key={index} style={{ margin: '0 0 18px 0', fontSize: '16px', fontWeight: '700' }}>{data?.JobTitle}<span><EditIcon sx={{ paddingLeft: '5px', color: '#BDBDBD' }} fontSize="small" /></span></div>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: '500', marginBottom: '18px' }}>{data?.CompanyName}   |   {data?.FromDate}- {data?.Todate}</div>
                        <span>{data?.AboutJob?.Details}</span>

                        <ul style={{ margin: '0' }}>
                          {data?.AboutJob?.Points.map((e, i) => {
                            return (<li key={i}>{e.Details}</li>
                            )
                          })
                          } </ul>
                      </div></div>
                  </div>
                </>)
              })}
            </div>

            {/* third */}

            <div id={"Achievements"} style={{
              backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px', display: 'flex', boxShadow: "0px 6px 12px 0px #0000001A", flexDirection: 'column'
            }} >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} ><h4 style={{ marginBottom: '10px' }}> Achievements</h4><Button onClick={handelAchivement} variant="outlined" sx={{ borderRadius: '50px', display: 'flex', alignItems: 'center', textTransform: 'none' }}>Add Achievements <EditIcon sx={{ paddingLeft: '5px' }} fontSize="small" /></Button></div>

              {adminData.Achievements?.map((data, index) => {
                return (<>
                  <div style={{ display: 'flex', alignItems: 'flex-start', height: data.Images.length != 0 ? '480px' : '300px', overflowY: 'scroll' }} className="horizontal-scroll-container">

                    <div style={{ marginRight: '20px', display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%', position: 'sticky', top: 0 }} >
                      <div style={{ width: '26px', height: '26px', borderRadius: '100%', backgroundColor: ((index + 1) % 2 != 0) ? '#56CCF2' : '#9B51E0' }} > </div>
                      <div style={{ width: '2.5px', height: '100%', backgroundColor: ((index + 1) % 2 != 0) ? '#56CCF2' : '#9B51E0' }}></div>

                    </div>
                    <div>
                      <div key={index} style={{ margin: '0 0 18px 0', fontSize: '16px', fontWeight: '700' }}>{data?.AchievementTitle}<span><EditIcon sx={{ paddingLeft: '5px', color: '#BDBDBD' }} fontSize="small" /></span></div>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: '500', marginBottom: '18px' }}>  {data?.FromDate} - {data?.Todate}</div>
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                          {data.Images?.length != 0 && data.Images.map((e, i) => {

                            return (

                              <div key={i} style={{ margin: '0 5px', marginBottom: '10px', }} ><img style={{ width: '12vw',height:'12vw',objectFit:'cover',objectPosition:'center ',minHeight:'150px',maxHeight:'190px', minWidth: '150px', maxWidth: '190px', }} src={e} alt="" /></div>

                            )
                          })}
                        </div>
                        <span>{data?.AboutAchievement?.Details}</span>

                        <ul style={{ margin: '0' }}>
                          {data?.AboutAchievement?.Points.map((e, i) => {
                            return (<li key={i}>{e.Details}</li>
                            )
                          })
                          } </ul>
                      </div></div>
                  </div>
                </>)
              })}
            </div>
            {/* forth */}
            <div id="Skills & Languages" className="admin_skills" >
              <div style={{  backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px', boxShadow: "0px 6px 12px 0px #0000001A" }} className="Adnim_skills_left">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '16px', fontWeight: '600' }}>Key skills</span> <Button variant="outlined" sx={{ borderRadius: '50px', display: 'flex', alignItems: 'center', textTransform: 'none' }}>Add key skills</Button> </div>
                <div style={{ margin: '18px 0px' }}> {adminData?.Skills?.map((e, i) => {
                  return (<span key={i} style={{ height: '24px', borderRadius: '4px', padding: '4px 10px 4px 10px', fontSize: '10px', margin: '10px 10px 10px 0px', backgroundColor: '#F2F2F2' }}>{e}</span>)
                })}</div>
              </div>

              <div style={{  backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px', boxShadow: "0px 6px 12px 0px #0000001A" }}  className="Adnim_skills_right">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '16px', fontWeight: '600' }}>Languages</span> <Button variant="outlined" sx={{ borderRadius: '50px', display: 'flex', alignItems: 'center', textTransform: 'none' }}>Add Language</Button> </div>
                <div style={{ margin: '18px 0px' }}> {adminData?.Languages?.map((e, i) => {
                  return (<span key={i} style={{ height: '24px', borderRadius: '4px', padding: '4px 10px 4px 10px', fontSize: '10px', margin: '10px 10px 10px 0px', backgroundColor: '#F2F2F2' }}>{e}</span>)
                })}</div>
              </div>
            </div>

            {/* fifth */}
            <div id="News" style={{
              backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px', display: 'flex', boxShadow: "0px 6px 12px 0px #0000001A", flexDirection: 'column'
            }} >

              <div style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 22px 0' }}>News</div>
              <Grid container gap={2}>{cardlist.map((e, i) => {
                return (<Grid item xs={3.8} key={i}>
                  <Card style={{ boxShadow: '0px 0px 0px white' }} key={i} sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140, borderRadius: '10px' }}
                      image={e.img}
                      title="green iguana"
                    />
                    <CardContent style={{ padding: '0px 0' }}>

                      <Typography style={{ fontSize: '14px', fontWeight: '700', padding: '15px 0 0 0' }} color="text.secondary">
                        {e.details}
                      </Typography>
                    </CardContent>
                    <CardActions >
                      <Typography sx={{ display: 'flex', alignItems: 'center' }} size="small"><img style={{ borderRadius: '100%', marginRight: '10px' }} width={'26px'} height={'26px'} src={e.profilephoto} alt="" /> <span style={{ fontSize: '14px', fontWeight: 500, color: 'gray' }}>{e.accountname}</span></Typography>
                      <Typography style={{ color: 'rgb(177 172 172)' }} fontSize={'12px'} fontWeight={'500'}>{e.timing} ago</Typography>
                    </CardActions>
                  </Card></Grid>)
              })

              }</Grid>
              <Divider style={{ margin: '15px 0' }}></Divider>
              <div style={{ display: 'flex', width: "100%", alignItems: 'center', justifyContent: 'center' }}><Button variant="contained">Find more news</Button></div>
            </div>


          </Grid >

        </Grid >
      </Grid >
    </>
  )
}

export default Admin;
