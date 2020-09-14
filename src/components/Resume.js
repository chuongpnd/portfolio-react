import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#233',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: 'o auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: '#E76f51 #E76f51 transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent #E76f51 #E76f51',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    color: '#fff',
    background: '#E76f51',
    lineHeight: 1,
    padding: '0.5rem 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: '#E76f51',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: '#fff',
    padding: 0,
    textTransform: 'uppercase',
  },
  body1: {
    color: '#E76f51',
  },
  subtitle1: {
    color: 'tan',
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component='header' className={classes.mainContainer}>
      <Typography variant='h4' align='center' className={classes.heading}>
        Working Timeline
			</Typography>
      <Box component='div' className={classes.timeLine}>
        <Typography
          variant='h2'
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
				</Typography>
        <Box component='div' className={classes.timeLineItem}>
          <Typography
            variant='h5'
            align='center'
            className={classes.subHeading}
          >
            Freelance Web Developer
					</Typography>
          <Typography variant='body1' align='center' className={classes.body1}>
            Freelance
					</Typography>
          <Typography
            variant='subtitle1'
            align='center'
            className={classes.subtitle1}
          >
            - Write a Web sale with Core ASP.NET MVC 5,
            <br />
            - Design Database by case studio
            <br />
            - Use MSSQL, write func, trigger, store procedure to handle Data.
					</Typography>
          <Divider />
          <Typography
            variant='subtitle1'
            align='center'
            className={classes.subtitle1}
          >
            Skill: C# ASP.NET, SQL - MSSQL
					</Typography>
        </Box>
        <Typography
          variant='h2'
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
				</Typography>
        <Box component='div' className={classes.timeLineItem}>
          <Typography
            variant='h5'
            align='center'
            className={classes.subHeading}
          >

            Intern - Business Analyst
					</Typography>
          <Typography variant='body1' align='center' className={classes.body1}>
            Dai-ichi-life Vietnam
					</Typography>
          <Typography
            variant='subtitle1'
            align='center'
            className={classes.subtitle1}
          >
            Make a test case for Application, Design database work flow, Analyst Business Specific Docs
					</Typography>
        </Box>
        <Typography
          variant='h2'
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
				</Typography>
        <Box component='div' className={classes.timeLineItem}>
          <Typography
            variant='h5'
            align='center'
            className={classes.subHeading}
          >
            Fullstack Developer
					</Typography>
          <Typography variant='body1' align='center' className={classes.body1}>
            RAYDAR - Fulltime
					</Typography>
          <Typography
            variant='subtitle1'
            align='center'
            className={classes.subtitle1}
          >
            - Javascript Language, Node, React/React Native, Redux
            <br />
            Backend Developer
            <br />
            - Crawl information, Data from another website in NODE.js
            <br />
            - Write Mystock (website product of company) in NODE.js/ SAILS.js framework
            Front-end developer
            <br />
            - Make Web app with REACT / REDUX framework (Core Site Product)
            <br />
            - Make Mobile app with REACT-NATIVE/ REDUX (Core App Product)
            <br />
            - Material-UI, GIT, Linux, work with Scrum, sprint planning, review
					</Typography>
          <Divider />
          <Typography
            variant='subtitle1'
            align='center'
            className={classes.subtitle1}
          >
            Skill: Javascript, Node, React, React-Native, Redux, Git, Linux, Material-ui, Scrum, Sprint Planning
					</Typography>
        </Box>
        <Typography
          variant='h2'
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
				</Typography>
        <Box component='div' className={classes.timeLineItem}>
          <Typography
            variant='h5'
            align='center'
            className={classes.subHeading}
          >
            Front-end Developer
					</Typography>
          <Typography variant='body1' align='center' className={classes.body1}>
            Officience - Fulltime
					</Typography>
          <Typography
            variant='subtitle1'
            align='center'
            className={classes.subtitle1}
          >
            - Javascript Language, Node, React/React Native, Redux
            <br />
            Backend
             <br />
            - Nodejs/Expressjs make app API
             <br />
            - Intergrate ElasticSearch for App to Search and Analyze
             <br />
            - SocketIO, RabbitMQ, Push notifications sw-push
             <br />
            - Docker, GitLab
            <br />
            Front-end
             <br />
            - REACT/REDUX
             <br />
            - Vue
             <br />
            - angular
             <br />
            -GitLab/GitHub
					</Typography>
          <Divider />
          <Typography
            variant='subtitle1'
            align='center'
            className={classes.subtitle1}
          >
            Skill: Javascript, SocketIO, ElasticSearch, Node, React, Redux, Git, Material-ui, Scrum, Sprint Planning
					</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
