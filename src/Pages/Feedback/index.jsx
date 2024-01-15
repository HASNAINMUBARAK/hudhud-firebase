import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const Feedback = () => {
  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, message } = user;

    if (name && email && phone && address && message) {
      const res = await fetch(
        "https://contactform-b85bb-default-rtdb.firebaseio.com/Contactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        alert("Message send sucessfully");
      }
    } else {
      alert("please fill all the input Fields");
    }
  };
  return (
    <Container className={classes.contain}>
      <Paper
        className={classes.inner}
        component={Box}
        maxWidth="30%"
        mx="auto"
        p={4}
      >
        <Typography variant="h5" mt={2} style={{ marginTop: "30px" }}>
          Feedback!
        </Typography>

        <Box component="form" mt={2} className={classes.innerbox}>
          <form method="POST">
            <TextField
              className={classes.fname}
              placeholder="Name"
              margin="normal"
              variant="outlined"
              color="primary"
              label="Name"
              required
              fullWidth
              value={user.name}
              onChange={getUserData}
              name="name"
            ></TextField>
            <TextField
              placeholder="Mobile Number"
              margin="normal"
              variant="outlined"
              color="primary"
              label="Mobile Number"
              required
              fullWidth
              value={user.phone}
              onChange={getUserData}
              name="phone"
            ></TextField>

            <TextField
              placeholder="Email "
              value={user.email}
              onChange={getUserData}
              margin="normal"
              variant="outlined"
              color="primary"
              label="Email "
              required
              fullWidth
              name="email"
            ></TextField>
            <TextField
              placeholder="Address"
              value={user.address}
              onChange={getUserData}
              margin="normal"
              variant="outlined"
              color="primary"
              label="Address"
              required
              fullWidth
              multiline
              name="address"
            ></TextField>
            <TextField
              placeholder="Message"
              value={user.message}
              onChange={getUserData}
              margin="normal"
              variant="outlined"
              color="primary"
              label="Message"
              required
              fullWidth
              name="message"
            ></TextField>
            <Box className={classes.btn}>
              <Button
                onClick={postData}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  height: "50px",
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default Feedback;
const useStyles = makeStyles((theme) => ({
  contain: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    width: "90%",
  },
  inner: {
    width: "450px",
  },
  innerbox: {
    padding: "20px",
  },
  name: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  fname: {
    marginRight: 10,
  },
  radio: {
    display: "flex",
    marginTop: "20px",
  },
  btn: {
    marginTop: "20px",
  },
}));

// import { Button, Grid, Input, Typography } from "@material-ui/core";
// import React from "react";

// const Contact = () => {
//   return (
//     <Grid container>
//       <Typography>Contact Us</Typography>
//       <Grid item md={6} sm={12}>
//         <Input varient="outlined" label="Name" />
//       </Grid>
//       <Grid item md={6} sm={12}>
//         <Input varient="outlined" label="Email" />
//       </Grid>
//       <Grid item md={6} sm={12}>
//         <Input varient="outlined" label="Mobile Number" />
//       </Grid>
//       <Grid item md={6} sm={12}>
//         <Input varient="outlined" label="Address" />
//       </Grid>
//       <Grid item md={6} sm={12}>
//         <Input varient="outlined" label="Mesage" />
//       </Grid>
//       <Grid item md={6} sm={12}>
//         <Button> Submit</Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default Contact;
