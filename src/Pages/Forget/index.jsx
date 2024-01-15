import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const Forget = () => {
  const classes = useStyles();
  return (
    <Container className={classes.contain}>
      <Paper className={classes.inner} component={Box} mx="auto" p={4}>
        <Typography
          variant="h5"
          mt={2}
          style={{ margin: "30px 10px 0px 10px" }}
        >
          Please enter your email address or mobile number to search for your
          account.
        </Typography>
        <Box component="form" mt={2} className={classes.innerbox}>
          <TextField
            placeholder="Email/ Phone Number"
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
            label="Email/ Phone Number"
          ></TextField>

          <Box className={classes.btn}>
            <Link to="/">
              <Button
                variant="contained"
                color="primary"
                style={{ height: "50px", marginRight: "10px" }}
              >
                Cancel
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              style={{ height: "50px" }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Forget;
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
    display: "flex",
    justifyContent: "end",
    marginTop: "20px",
  },
}));
