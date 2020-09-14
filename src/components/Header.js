import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typed from 'react-typed';
import Typography from '@material-ui/core/Typography';
import avatar from '../avatar-cp.jpeg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(2),
  },
  title: {
    color: '#fff',
  },
  subtitle: {
    color: '#fff',
    textTransform: 'uppercase',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify='center'>
        <Avatar className={classes.avatar} src={avatar} alt='chuongpham' />
      </Grid>
      <Typography className={classes.title} variant='h3'>
        <Typed strings={['__chris.p']} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant='h5'>
        <Typed
          strings={[
            'Front-End Developer',
            'Fullstack Developer'
          ]}
          typeSpeed={30}
          backSpeed={40}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
