

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { AppBar, Avatar, Badge, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Input from '@mui/joy/Input';
import p2 from ".././images/modi.png"
import "./Nav.css"
import logo from "../images/logo.png.png"
import logoname from "../images/PROFILE.svg"
import { NavLink, useNavigate } from 'react-router-dom';
import Admin from "./Admin/Json/Admin.json"
import virat from './Admin/Json/virat.json'


function Navbar({btnname="Download & Print",nav='/admin',setAdminData=null}) {
    const navigate=useNavigate()
    const [click, Setclick] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        Setclick(!click)
    };
    const handleClose = () => {
        setAnchorEl(null);
        Setclick(!click)
    };
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const [searchInput, setSearchInput] = React.useState('modi');

    const handleSearch = () => {
        console.log(searchInput.toLowerCase())
       if(setAdminData!=null){
        if (searchInput.toLowerCase() == 'modi') {
            
            setAdminData(Admin);
        } else if (searchInput.toLowerCase() == 'virat') {
            setAdminData(virat);
        } else {
            setAdminData(Admin);
        }
       }
      };


    return (
        <div style={{ backgroundColor: 'white', height: '71px', position: "static", display: 'flex', alignItems: 'center',justifyContent:'center',width:'100%' }} >
            <div className="navmain" style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", Margin: '0px 22px', margin: '0px 45px', width: '100%',maxWidth:'1440px' }}>
                <div ><img width={'164px'} height={'37px'} src={logo} alt="logo" />  </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}><div color='black' style={{ fontSize: '16px', margin: '0 20px' }}>service</div>

                <div><Input placeholder=' Search'
                        endDecorator={<SearchOutlinedIcon onClick={handleSearch} style={{ color: 'blue' }} fontSize='small' />}
                        sx={{
                            "--Input-radius": "24px",
                            "--Input-minHeight": "30px",
                            "--Input-paddingInline": "13px",
                            "--Input-decoratorChildHeight": "33px",
                            "--Input-focusedThickness": "1px",
                            "--Input-placeholderOpacity": 0.5
                        }}
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleSearch();
                          }
                        }}
                    /></div>   
     


                    <div className='btn' style={{padding:'3px', margin: '0 20px',borderRadius: '110px',}}><button  style={{border:'0px',
                         color: 'blue', height: '39px', padding: "10px 16px 10px16 px", borderRadius: '100px', fontSize: '16px', fontWeight: '500'

                    }} onClick={()=>{
                        navigate(`${nav}`)
                    }} >{btnname}</button></div>
                    <div>< NotificationsNoneIcon fontSize='large' /></div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 20px' }}> <div>

                        <Tooltip>
                            <IconButton onClick={handleClick} sx={{ p: 0 }}>
                            <Badge badgeContent="" color="success" 
                            anchorOrigin={{
                                
    vertical: 'bottom',
    horizontal: 'right',
  }}
> <Avatar alt="Remy Sharp" src={p2} /></Badge><span color='black' style={{ fontSize: '16px', fontWeight: '600', marginLeft: '10px' }}>Visvesvaraya</span>{click ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </Tooltip>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                            Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                            History
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                           <NavLink to='/'> Logout</NavLink>
                            </MenuItem>
                            
                        </StyledMenu>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));
export default Navbar;
