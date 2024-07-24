import { Box, Chip, Divider, Grid } from '@mui/material'
import React, { useState } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import "./NewGraph.css"

const NewGraph = ({ Titel = "Sales",SubTitle='Direct sales', Assigned = 100000, compleated = 60000, pending = 40000 }) => {

    const Assignedformate = formatIndianNumber(Assigned)
    const compleatedformate = formatIndianNumber(compleated)
    const pendingformate = formatIndianNumber(pending)

    function formatIndianNumber(number) {
        let str = number.toString();
        if (str.length <= 3) {
            return str;
        }
        let lastThree = str.substring(str.length - 3);
        let otherDigits = str.substring(0, str.length - 3);
        otherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
        return otherDigits + ',' + lastThree;
    }


    let compleatedValue = Math.floor((compleated / Assigned) * 100);

    let pendingValue = ((pending / Assigned) * 100).toFixed(1);
    let value = compleatedValue;

    return (<>        <Box padding={'20px'} style={{ minWidth: '280px', boxShadow: '0px 2px 4px 0px rgba(34, 43, 69, 0.2)' }} borderRadius={'12px'} bgcolor={'white'} >
            <Grid container spacing={2}>
                <Grid item xs={12}>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', minWidth: '270px' }}>
                        <div style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(7, 46, 119, 1)', display: 'flex', alignItems: 'center' }}>
                            <div style={{border:'1px solid  rgba(7, 46, 119, 0.2) ',borderRadius:'2px', marginRight: '10px',padding:'3px',}}><div style={{ background: '#072E77', borderRadius: '100%', width: '13px', height: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                                <CurrencyRupeeRoundedIcon style={{ color: 'white', width: '10px', height: '10px' }}></CurrencyRupeeRoundedIcon>
                            </div></div> {Titel} {SubTitle&&<span style={{border:'1px solid rgba(7, 46, 119, 0.2)',padding:'0 10px',borderRadius:'100px',marginLeft:'20px',fontSize:'10px',fontWeight:'400'}}>{SubTitle}</span>}</div> <MoreHorizIcon style={{ width: '20px', height: '20px' }} />
                    </div>
                </Grid>
                <Grid item xs={12} >


                    <div style={{ width: '100%', display: 'flex', alignItems: 'end', justifyContent: 'flex-start', flexWrap: 'wrap' }} >
                        <div style={{ minWidth: '100px', margin: '0 5px 10px 0px', display: 'flex', alignItems: 'center' }}><span style={{ fontSize: '22px', fontWeight: '700', color: compleated<=pending?'rgba(255, 56, 48, 1)':'rgba(52, 200, 90, 1)', margin: '0 10px 0 0' }}>{compleated<=pending?pendingformate:compleatedformate}</span>
                            <div style={{ minWidth: '120px', margin: '0 5px' }}>
                                {compleated<=pending ? <div style={{ verticalAlign: 'end', textAlign: 'start', marginRight: '20px', height: '100%', display: 'flex', alignItems: "end" }}>  <Chip
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '10px', fontWeight: '600' }}>
                                            {Math.ceil(pendingValue)}%
                                            <ArrowDownwardIcon style={{ color: 'rgba(255, 56, 48, 1)', height: '15px' }} />
                                        </Box>
                                    }
                                    size="small"
                                    sx={{ color: 'rgba(255, 56, 48, 1)', backgroundColor: 'rgba(255, 56, 48, 0.1)' }}
                                /> &nbsp;&nbsp;
                                    <span style={{ marginBottom: '5px', fontSize: '10px', fontWeight: '400', color: 'rgba(114, 126, 132, 1)' }}> Pending</span>
                                </div>

                                    : <div style={{ verticalAlign: 'end', textAlign: 'start', marginRight: '15px', height: '100%', display: 'flex', alignItems: "end" }}>  <Chip
                                        label={
                                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '10px', fontWeight: '600' }}>
                                                {Math.ceil(compleatedValue)}%
                                                <ArrowUpwardIcon style={{ color: '#34C85A', height: '15px' }} />
                                            </Box>
                                        }
                                        size="small"
                                        sx={{ color: '#34C85A', backgroundColor: 'rgba(52, 200, 90, 0.1)', paddintRight: '0', }}
                                    />&nbsp;&nbsp;
                                        <span style={{ marginBottom: '5px', fontSize: '10px', fontWeight: '400', color: 'rgba(114, 126, 132, 1)' }}> Compleated</span></div>}
                            </div>

                        </div>

                        <div style={{ display: 'flex', alignItems: 'end', marginBottom: '10px' }}>
                        <div className='dividerHide' style={{ height: '38px', marginRight: '10px' }}><Divider orientation="vertical"></Divider> </div>

                            <div >

                                <div style={{ minWidth: '80px', margin: '0 5px', marginBottom: '5px', fontSize: '10px', fontWeight: '400', color: 'rgba(114, 126, 132, 1)' }}>assigned</div>
                                <div style={{ minWidth: '80px', margin: '0 5px', color: 'rgba(34, 43, 69, 1)', fontSize: '14px', fontWeight: '600' }}>{Assignedformate}</div>
                            </div>
                            <div style={{ height: '38px', marginRight: '10px' }}><Divider orientation="vertical"></Divider> </div>

                            <div >
                                <div style={{ minWidth: '80px', margin: '0 5px', marginBottom: '5px', fontSize: '10px', fontWeight: '400', color: 'rgba(114, 126, 132, 1)' }}>Pending</div>
                                <div style={{ minWidth: '80px', margin: '0 5px', color: 'rgba(34, 43, 69, 1)', fontSize: '14px', fontWeight: '600' }}><NavLink style={{ fontSize: '14px', fontWeight: '600', color: '#2F80ED' }}>{pendingformate}</NavLink></div>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12}>

                    <Box position="relative" display="inline-flex" width="100%">
                        <BorderLinearProgressBackground variant="determinate" value={100} />
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            width="100%"
                        >
                            <BorderLinearProgressForeground variant="determinate" value={value > 100 ? 100 : value} />
                        </Box>
                        {value > 100 && (
                            <Box
                                position="absolute"
                                top={0}
                                left={0}
                                width="100%"
                                sx={{
                                    backgroundColor: 'green',
                                    height: '10px',
                                    borderRadius: '5px'
                                }}
                            />
                        )}
                    </Box>               </Grid>
            </Grid>
        </Box >
        
       
</>
    )
}

export default NewGraph




const BorderLinearProgressBackground = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 200],
    },
}));

const BorderLinearProgressForeground = styled(LinearProgress)(({ theme, value }) => ({
    height: 10,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: value > 100 ? 'green' : (theme.palette.mode === 'light' ? 'red' : 'red'),
    },
}));

