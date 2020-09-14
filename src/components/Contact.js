import { makeStyles, withStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import EmailJs from "emailjs-com";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Send from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "#E76f51",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "tan",
  },
  button: {
    marginTop: "1rem",
    color: "#E76f51",
    borderColor: "tan",
    marginBottom: "3rem"
  },
  field: {
    margin: "1rem 0rem",
  },
  subtitle1: {
    color: 'tan',
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#E76f51",
      fontSize: '1rem',
    },
    "& label": {
      color: "#E76f51",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "tan",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email');
  const [message, setMessage] = useState('message');
  const classes = useStyles();
  const sendEmail = () => {
    var templateParams = {
      name,
      message,
      email
    };
    EmailJs.send('chuong-pham-contact', 'template_8ax8wyn', templateParams, 'user_Rhdr7Z5CvoxyqvB2lpa3C') //use your Service ID and Template ID
      .then(({ status, text }) => {
        if (status === 200) {
          alert('Email send Success!')
        }
      }, ({ text }) => {
        alert(`${text}`)
      });
  }
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h3" className={classes.heading}>
            Contact ME !
          </Typography>
          <InputField
            fullWidth={true}
            onInput={e => setName(e.target.value)}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            onInput={e => setEmail(e.target.value)}
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            onInput={e => setMessage(e.target.value)}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            onClick={sendEmail}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>

    </Box>
  );
};

export default Contact;
