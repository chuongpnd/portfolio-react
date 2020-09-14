import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
//import Apps from '@material-ui/icons/Apps';
//import ArrowBack from '@material-ui/icons/ArrowBack';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import ContactMail from '@material-ui/icons/ContactMail';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Footer from '../components/Footer';
import Home from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import avatar from '../avatar-cp.jpeg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: '#333',
    margin: 0,
  },
  menu: {
    color: '#fff',
    '&:hover': {
      fill: '#E76F51'
    }
  },
  title: {
    color: '#fff',
  },
  menuSliderContainer: {
    width: 250,
    background: '#333',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: '#fff',
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: 'Home', listPath: '/' },
  { listIcon: <AssignmentInd />, listText: 'Resume', listPath: '/resume' },
  // { listIcon: <Apps />, listText: 'Portfolio', listPath: '/portfolio' },
  { listIcon: <ContactMail />, listText: 'Contact', listPath: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component='div'>
      <Avatar className={classes.avatar} src={avatar} alt='Chuong Pham' />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component='nav'>
        <AppBar position='static' className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon className={classes.menu} />
            </IconButton>
            <Typography variant='h5' className={classes.title}>
              Menu
						</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor='left' onClose={() => setOpen(false)}>
        {sideList()}
        <Divider />
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
