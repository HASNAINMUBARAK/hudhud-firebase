import { Container, Paper, Typography, Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "./UserAuthContext";
import { Alert } from "react-bootstrap";

const PhoneSignUp = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number, "num");
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/Home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className={classes.contain}>
      <Paper className={classes.inner} component={Box} mx="auto" p={4}>
        <Box style={{ margin: "20px" }}>
          {error && <Alert variant="danger">{error}</Alert>}
        </Box>
        <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Typography
            variant="h2"
            mt={2}
            style={{ margin: "30px 10px 0px 20px" }}
          >
            Please enter your mobile number to create an account.
          </Typography>
          <Box mt={2} className={classes.innerbox}>
            <PhoneInput
              defaultCountry="PK"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
              style={{ padding: "10px" }}
            />
            <div
              id="recaptcha-container"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px",
              }}
            ></div>
            <Box className={classes.btn}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{
                    height: "50px",
                    marginRight: "10px",
                    color: "white",
                    background: "#797b7e",
                  }}
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{
                  height: "50px",
                  color: "white",
                  background: "#4185f4",
                }}
              >
                Send OTP
              </Button>
            </Box>
          </Box>
        </form>
        <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Typography
            variant="h2"
            mt={2}
            style={{ margin: "30px 10px 0px 20px" }}
          >
            Please Verify your OPT Code.
          </Typography>
          <Box mt={2} className={classes.innerbox}>
            <input
              type="otp"
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
            <Box className={classes.btn}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{
                    height: "50px",
                    marginRight: "10px",
                    color: "white",
                    background: "#797b7e",
                  }}
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{
                  height: "50px",
                  color: "white",
                  background: "#4185f4",
                }}
              >
                Verify OTP
              </Button>
            </Box>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default PhoneSignUp;
const useStyles = makeStyles((theme) => ({
  contain: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    width: "90%",
  },
  inner: {
    width: 450,
  },
  innerbox: {
    padding: "20px",
  },
  btn: {
    float: "right",
    marginBottom: "20px",
  },
}));
