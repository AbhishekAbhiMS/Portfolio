
import { Box, Grid, Table } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import flag from "../../assets/images/flag.svg"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { NavLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const DashboardGraph = ({ Assigned = "1000000", compleated = '800000', pending = '200000' }) => {

    const [Dateselect, setDateselect] = React.useState('This month');
    const [Enrollment, setEnrollment] = React.useState('');

    let compleatedValue = Math.floor((compleated / Assigned) * 100);
    let pendingValue = Math.floor((pending / Assigned) * 100);




    const handleChangeEnrollment = (event) => {
        setEnrollment(event.target.value);
    };
    const handleChangeDateselect = (event) => {
        setDateselect(event.target.value);
    };

    return (
        <Box padding={'20px'} borderRadius={'12px'} bgcolor={'white'} box-shadow='0px 2px 4px 0px rgba(34, 43, 69, 0.2)'
        >
            <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '18px' }}>Salse</div>
            <Grid container spacing={2} margin={0} padding={0} width={'100%'}>
                <Grid item xs={12} style={{ padding: '0' }}>

                    <div
                        data-testid='linear-grad'
                        style={{
                            width: '100%',
                            height: '43px',
                            background: 'linear-gradient(180deg, white 50%, #0e409d 50%)',
                        }}
                    >
                        <div
                            data-testid='back-groundC-olor'
                            style={{
                                minHeight: '43px',
                                background: '#0e409d',
                                float: 'left',
                                width: '18%',

                                borderTopRightRadius: '26px 56%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '14px', fontWeight: '600'
                            }}
                        >
                            <span>Direct sales </span><span style={{ fontSize: '10px', fontWeight: '400', margin: '3px 0px 0 3px', color: 'white' }}>(YPR)</span>
                        </div>

                        <div
                            data-testid='float-dth'
                            style={{
                                minHeight: '43px',
                                background: 'white',
                                float: 'right',
                                width: '82%',
                                left: '-2px',
                                borderBottomLeftRadius: '23px 61%',
                                display: 'flex',
                                alignItems: 'end',
                                justifyContent: 'end'
                            }}
                        >
                            <FormControl variant="standard" sx={{ minWidth: 100, mr: 3, border: '1px solid #cdd7e1', borderRadius: '50px', padding: '0 5px', mb: 1 }}>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={Enrollment}
                                    onChange={handleChangeEnrollment}
                                    label="Dateselect"
                                    IconComponent={KeyboardArrowDownIcon}
                                    sx={{
                                        '&::before': {
                                            borderBottom: 'none !important',
                                        },
                                        '&:hover:not(.Mui-disabled)::before': {
                                            borderBottom: 'none !important',
                                        },
                                        '&::after': {
                                            borderBottom: 'none !important',
                                        },

                                    }}
                                >
                                    <MenuItem value={"Today"}>Today</MenuItem>
                                    <MenuItem value={"Yesterday"}>Yesterday</MenuItem>
                                    <MenuItem value={"This month"}>This month</MenuItem>
                                    <MenuItem value={"This month till day"}>This month till day</MenuItem>
                                    <MenuItem value={"Last month"}>Last month</MenuItem>
                                    <MenuItem value={"3 month"}>3 month</MenuItem>
                                    <MenuItem value={"6 month"}>6 month</MenuItem>

                                    <MenuItem value={"This Financial year"}>This Financial year</MenuItem>

                                    <MenuItem value={"Customs"}>Customs</MenuItem>



                                </Select>
                            </FormControl>
                            <FormControl variant="standard" sx={{ minWidth: 120, mb: 1 }}>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={Dateselect}
                                    onChange={handleChangeDateselect}
                                    label="Dateselect"
                                    IconComponent={(props) => (
                                        <CalendarMonthSharpIcon
                                            {...props}
                                            sx={{
                                                transition: 'none !important',
                                                transform: 'none !important',
                                                '&.MuiSelect-iconOpen': {
                                                    transform: 'none !important',
                                                },
                                            }}

                                        />
                                    )}
                                    sx={{
                                        '&::before': {
                                            borderBottom: 'none !important',
                                        },
                                        '&:hover:not(.Mui-disabled)::before': {
                                            borderBottom: 'none !important',
                                        },
                                        '&::after': {
                                            borderBottom: 'none !important',
                                        },

                                    }}
                                >
                                    <MenuItem value={"Today"}>Today</MenuItem>
                                    <MenuItem value={"Yesterday"}>Yesterday</MenuItem>
                                    <MenuItem value={"This month"}>This month</MenuItem>
                                    <MenuItem value={"This month till day"}>This month till day</MenuItem>
                                    <MenuItem value={"Last month"}>Last month</MenuItem>
                                    <MenuItem value={"3 month"}>3 month</MenuItem>
                                    <MenuItem value={"6 month"}>6 month</MenuItem>

                                    <MenuItem value={"This Financial year"}>This Financial year</MenuItem>

                                    <MenuItem value={"Customs"}>Customs</MenuItem>



                                </Select>
                            </FormControl>


                        </div>
                    </div>
                    <div style={{width:'100%', border: '1px solid #cdd7e1',   padding: "15px 35px 15px 34px", display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} >
                      
                                <div style={{ width: '100%', minWidth: '135px', }}>


                                    <RangeSlider compleatedValue={compleatedValue} ></RangeSlider>
                                </div>

                      </div>

                    <div style={{ border: '1px solid #cdd7e1', borderTop: '0', borderBottomRightRadius: '12px', borderBottomLeftRadius: '12px', padding: "15px 35px 15px 34px", display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} >
                        <div style={{ fontSize: '14px', fontWeight: '600', minWidth: '76px', display: 'flex', minHeight: '42px', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }} >
                            <div style={{ fontSize: '10px', fontWeight: '400', color: '#727E84' }} >Assigned</div>
                            <div>{Assigned}</div>
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: '600', minWidth: '126px', minHeight: '42px', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between', margin: '0 18px' }} >
                            <div style={{ fontSize: '10px', fontWeight: '400', color: '#727E84' }} >Completed</div>

                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '76px' }}><NavLink style={{ fontSize: '14px', fontWeight: '600', color: 'blue' }} href='#'>{compleated}</NavLink>  <span style={{ display: 'flex' }} >{compleatedValue} %  <ArrowUpwardIcon fontSize='small' style={{ color: 'green' }}></ArrowUpwardIcon> </span>
                            </div>
                        </div>

                        <div style={{ fontSize: '14px', fontWeight: '600', minWidth: '126px', minHeight: '42px', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }} >
                            <div style={{ fontSize: '10px', fontWeight: '400', color: '#727E84' }} >Pending</div>

                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '76px' }}><NavLink style={{ fontSize: '14px', fontWeight: '600', color: 'blue' }} >{pending}</NavLink> <span style={{ display: 'flex' }} > {pendingValue} % <ArrowDownwardIcon fontSize='small' style={{ color: 'red' }}></ArrowDownwardIcon></span>
                            </div>
                        </div>



                    </div>

                </Grid>
            </Grid >
        </Box >
    )
}

export default DashboardGraph





const RangeSlider = ({ compleatedValue }) => {
    const [rangeValue, setRangeValue] = useState(compleatedValue);
    const [bgcolor, setBgcolor] = useState(rangeValue <= 100 ? 'rgba(255, 74, 0, 1)' : 'rgba(52, 200, 90, 1)')
    return (
        <div
            style={{ width: '100%', position: 'relative', cursor: 'pointer', height: '30px', display: 'flex', alignItems: 'center', }}
        >
            <input
                type="range"

                value={rangeValue}
                style={{
                    width: '100%',
                    cursor: 'pointer',
                    appearance: 'none',
                    height: '16px',
                    background: 'linear-gradient(to right,' + bgcolor + ',' + bgcolor + rangeValue + '%, #ccc ' + rangeValue + '%, #ccc)',
                    borderRadius: '5px',
                    outline: 'none',
                    zIndex: 1, // Ensure the range is clickable
                    position: 'absolute', // Position it on top of the thumb
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    backgroundColor: '#FF4A00',
                    borderRadius: '50%',
                    left: `${rangeValue <= 100 ? rangeValue + .1 : 100}%`,
                    transform: 'translateX(-50%)',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    zIndex: 2, // Ensure the thumb is clickable
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '10px',
                    fontWeight: '600',
                    justifyContent: 'center',
                    userSelect: 'none'
                }}
            >  {rangeValue}%</div>
            <div
                style={{
                    position: 'absolute',

                    left: `${rangeValue > 100 ? rangeValue > 200 ? 40 : 100 - ((rangeValue - 100) * 0.5) : 100}%`,
                    transform: 'translateX(-50%)',
                    zIndex: 2, // Ensure the thumb is clickable
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    userSelect: 'none'
                }}
            >
                <img src={flag} alt="" style={{ marginLeft: '18px', marginBottom: '11px' }} />
            </div>
        </div>
    );
};

{/* <RadioGroup
row
size="small">
<FormControlLabel data-testid='Person2'
  value="Enrolment"
  label={'Enrolment'} control={<Radio
    sx={{
      '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
        color: '#072E77'
      }
    }}
    data-testid='e'
  />}
  checked={checkSales == 'Enrolment'}
onChange={handleOptionChange}
/>
</RadioGroup>        </Grid>

<Grid item xs={2.5}>
<RadioGroup
row
size="small">
<FormControlLabel data-testid='e1'
  value="Group business"
  label={'Group business'} control={<Radio
    sx={{
      '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
        color: '#072E77'
      }
    }}
    data-testid='g1'
  />}
  checked={checkSales == 'Group business'}
onChange={handleOptionChange}
/>
</RadioGroup> */}