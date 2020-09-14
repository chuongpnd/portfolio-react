import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: '#333',
  },
  root: {
    '& .MuiSvgIcon-root': {
      fill: '#fff',
      '&:hover': {
        fill: '#E76F51',
        fontSize: '2.5rem',
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  //const preventDefault = (event) => event.preventDefault();
  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <Link href="https://www.facebook.com/christ.p196" target="_blank" ><BottomNavigationAction icon={<Facebook />} className={classes.root} /> </Link>
      <Link href="https://www.instagram.com/__chris.p/" target="_blank"><BottomNavigationAction icon={<Instagram />} className={classes.root} /></Link>
    </BottomNavigation>
  );
};
export default Footer;
