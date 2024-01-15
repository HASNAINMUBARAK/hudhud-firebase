import React, { useState } from "react";
import { Grid, makeStyles, Menu, MenuItem } from "@material-ui/core";
import Hamburger from "../Hamburger";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import logoo from "../../Assets/Images/logo.jpg";

const Navbar = () => {
  // const {  logOut } = useUserAuth();
  const classes = useStyles();
  //or Profile Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  // for hide login button
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid
        container
        className={classes.container}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        color="#rgb(62 138 173)"
      >
        <Grid item lg={1} md={2} sm={2} className={classes.grid1}>
          <Link to="/Home">
            <img
              src={logoo}
              alt="ew"
              style={{ fontSize: "2.5rem" }}
              className={classes.logo}
            />
          </Link>
        </Grid>
        <Grid
          item
          container
          lg={5}
          md={5}
          sm={5}
          className={classes.grid2}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Link to="/Home" className={classes.g2}>
            Home
          </Link>
          <Link to="/About" className={classes.g2}>
            {" "}
            About
          </Link>
          <Link to="/Feedback" className={classes.g2}>
            {" "}
            Feedback
          </Link>
          <Link to="/Login" className={classes.g2}>
            {" "}
            Login
          </Link>
        </Grid>
        <Grid
          item
          container
          lg={1}
          md={1}
          sm={1}
          className={classes.grid4}
          display="flex"
          alignItems="center"
        >
          <AccountCircleIcon
            style={{ fontSize: "2.5rem" }}
            onClick={handleClick}
          />

          <Menu
            id="simple-menu"
            style={{ margin: "45px 0px 0px -80px" }}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Setting</MenuItem>
          </Menu>
        </Grid>
        <Grid item className={classes.drawer}>
          <Hamburger />
        </Grid>
      </Grid>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10px 0px",
    boxShadow: "0px 0px 10px 0px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  grid1: {
    paddingLeft: 20,
  },
  logo: {
    width: "60px",
    borderRadius: "50%",
  },
  grid2: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  g2: {
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": {
      color: "#3e8aad",
      fontWeight: 700,
    },
  },
  grid3: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  grid4: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  drawer: {
    paddingRight: "20px",
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  image: {
    width: "100px",
  },
  btn: {
    color: "white",
    backgroundColor: "#2250f4",
    borderRadius: 5,
    padding: "7px 22px",
    border: "none",
    height: 40,
    fontWeight: 700,
    "&:hover": {
      color: " #3e8aad",
    },
  },
}));
export default Navbar;
