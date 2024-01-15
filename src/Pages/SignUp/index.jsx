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
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
import { Alert } from "bootstrap"; 
import logo from "../../Assets/Images/h.PNG";

const SignUp = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(userName, email, password);
      navigate("/");
    } catch (err) {
      return alert("SigUp failed");
    }
  };
  return (
    <Container className={classes.contain}>
      <Box>
        <img
          src={logo}
          alt="loogo"
          style={{ maxWidth: "250px", margin: "20px" }}
        />
      </Box>
      <Paper
        className={classes.inner}
        component={Box}
        maxWidth="30%"
        mx="auto"
        p={4}
      >
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h1"
            mt={2}
            style={{ marginTop: "30px", textAlign: "center" }}
          >
            Create a new Account!
          </Typography>
          <Box mt={2} className={classes.innerbox}>
            <TextField
              placeholder="User Name"
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
              label="First Name"
              onChange={(e) => setUserName(e.target.value)}
            ></TextField>

            <TextField
              placeholder="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              type="password"
              placeholder="Password"
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <Box className={classes.btn}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                style={{
                  height: "50px",
                  color: "white",
                  backgroundColor: "#119F16",
                }}
              >
                SignUp
              </Button>

              <Typography style={{ marginTop: "20px", textAlign: "center" }}>
                <Link to="/">Already have an Account!</Link>
              </Typography>
            </Box>
          </Box>
        </form>
      </Paper>
    </Container>
    // <Container className={classes.contain} >
    //   <Paper
    //     className={classes.inner}
    //     component={Box}
    //     maxWidth="30%"
    //     mx="auto"
    //     p={4}
    //   >
    //     {error && <Alert variant="danger">{error}</Alert>}
    //     <form onSubmit={handleSubmit}>
    //       <Typography variant="h5" mt={2} style={{ marginTop: "30px" }}>
    //         Create a new Account!
    //       </Typography>

    //       <Box component="form" mt={2} className={classes.innerbox}>

    /* <Box className={classes.name}>
              <TextField
                className={classes.fname}
                placeholder="First Name"
                margin="normal"
                variant="outlined"
                color="primary"
                label="First Name"
              ></TextField>
              <TextField
                placeholder="Second Name"
                margin="normal"
                variant="outlined"
                color="primary"
                label="Second Name"
              ></TextField>
            </Box> */
    /* <TextField
              placeholder="Email /User Name"
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
              label="Email/ User Name"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              type="password"
              placeholder="Password"
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField> */
    /* <Box style={{ display: "flex", margin: "10px 5px" }}>
              <FormControl className={classes.container} noValidate>
                <FormLabel style={{ display: "flex", margin: "5px 0px" }}>
                  Date of Birthday
                </FormLabel>
                <TextField
                  id="date"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Box>
            <Box component="form" className={classes.radio}>
              <FormControl>
                <FormLabel style={{ display: "flex" }}>Gender</FormLabel>
                <RadioGroup row>
                  <FormControlLabel
                    label="Male"
                    value="Male"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    label="Female"
                    value="Female"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    label="Other"
                    value="Other"
                    control={<Radio />}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box>
              <Typography
                varient="subtitle2"
                style={{
                  color: "#777",
                  fontSize: "11px",
                  textAlign: "left",
                  margin: "5px 0px",
                }}
              >
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </Typography>
            </Box> */
    /* <Box className={classes.btn}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                style={{
                  height: "50px",
                  color: "white",
                  backgroundColor: "#119F16",
                }}
              >
                SignUp
              </Button>
            </Box>
            <Typography style={{ marginTop: "20px" }}>
              <Link to="/Login">Already have an Account!</Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container> */
  );
};

export default SignUp;
const useStyles = makeStyles((theme) => ({
  contain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    marginTop: 20,
  },
}));
