// src/ThimbleGame.js
import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

const Newcomp = () => {
  let Titel = "Sales"
  let SubTitle = 'Direct sales'
  let Assigned = 100000
  let compleated = 60000
  let pending = 40000
  const [Enrollment, setEnrollment] = React.useState('Target wise');

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

  const handleChangeEnrollment = (event) => {
    setEnrollment(event.target.value);
};


  return (
    <div>
      {/* <Box  style={{backgroundColor:'white', width: '100%', maxWidth: '900px', display: 'flex', alignItems: 'center', overflowX: 'scroll',minWidth: '300px', boxShadow: '0px 2px 4px 0px rgba(34, 43, 69, 0.2)' }} >
        {[1,2,3,4].map((e) => (
          <div key={e} style={{ minWidth: '300px', width: '100%', margin: '10px',}}>
            {/* Add flexShrink: 0 here */}
            {/* <NewGraph></NewGraph> */}
          {/* </div> */}
      {/* //   ))} */}
      {/* // </Box> */} 
     
        {/* <Grid item xs={12}> <GraphTable></GraphTable></Grid> */}

    {/* <div style={{width:"590px"}}> <Branchview></Branchview></div> */}
    <ThimbleGame></ThimbleGame>

    </div>
  )
}

export default Newcomp


const ThimbleGame = () => {
  const [cups, setCups] = useState([false, false, false]);
  const [revealedCups, setRevealedCups] = useState([false, false, false]);
  const [message, setMessage] = useState('');
  const [betPlaced, setBetPlaced] = useState(false);
  const [shuffling, setShuffling] = useState(false);
  const [playerBalance, setPlayerBalance] = useState(1000); // Example balance
  const [betAmount, setBetAmount] = useState(100); // Example bet amount

  useEffect(() => {
    if (shuffling) {
      const interval = setInterval(() => {
        shuffleCups();
      }, 200);
      setTimeout(() => {
        clearInterval(interval);
        setShuffling(false);
        setMessage('Make your guess!');
      }, 2000);
    }
  }, [shuffling]);

  const placeBet = () => {
    if (playerBalance < betAmount) {
      setMessage('Insufficient balance to place the bet.');
      return;
    }

    setPlayerBalance(playerBalance - betAmount);
    const randomIndex = Math.floor(Math.random() * 3);
    const newCups = [false, false, false];
    newCups[randomIndex] = true;
    setCups(newCups);
    setRevealedCups([false, false, false]); // Reset revealed cups
    setBetPlaced(true);
    setMessage('Shuffling...');
    setShuffling(true);
  };

  const shuffleCups = () => {
    const shuffledCups = [...cups];
    for (let i = shuffledCups.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCups[i], shuffledCups[j]] = [shuffledCups[j], shuffledCups[i]];
    }
    setCups(shuffledCups);
  };

  const handleGuess = (index) => {
    if (!betPlaced || shuffling) {
      setMessage('Place a bet and wait for shuffling to complete!');
      return;
    }
    const newRevealedCups = [false, false, false];
    newRevealedCups[index] = true;
    setRevealedCups(newRevealedCups);
    if (cups[index]) {
      setPlayerBalance(playerBalance + betAmount * 2);
      setMessage('You win!');
    } else {
      setMessage('You lose! Try again.');
    }
    setBetPlaced(false);
  };

  return (
    <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Thimble Game
      </Typography>
      <Typography variant="h6" gutterBottom>
        Balance: ${playerBalance}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        {cups.map((cup, index) => (
          <Box
            key={index}
            sx={{
              border: '1px solid black',
              padding: '20px',
              width: '60px',
              height: '60px',
              position: 'relative',
              background:'red'

            }}
            onClick={() => handleGuess(index)}
          >
            {revealedCups[index] && cups[index] && (
              <Box
                sx={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'red',
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                }}
              ></Box>
            )}
           
          </Box>
        ))}
      </Box>
      <Button variant="contained" onClick={placeBet} disabled={betPlaced || shuffling}>
        Place Bet
      </Button>
      <Typography variant="h6" sx={{ marginTop: '20px' }}>
        {message}
      </Typography>
    </Container>
  );
};

