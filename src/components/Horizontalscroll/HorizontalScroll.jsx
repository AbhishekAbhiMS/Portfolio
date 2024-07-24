import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';

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

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'auto',
    padding: theme.spacing(2),
  },
  image: {
    width: 150,
    height: 'auto',
    marginRight: theme.spacing(2),
  },
}));

const HorizontalScroll = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2} className={classes.root}>
        {images.map((imageUrl, index) => (
          <Grid item key={index}>
            <Paper>
              <img src={imageUrl} alt={`Image ${index}`} className={classes.image} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HorizontalScroll;
