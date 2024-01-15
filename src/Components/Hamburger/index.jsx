import React from "react";
import { useState } from "react";
import { Box } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const HamBurger = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  //or Profile Menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.RealHamburger}>
      <IconButton
        className={classes.hamBurgerBtn}
        edge="start"
        style={{ color: "white" }}
        fontSize="large"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {}}
      >
        <Box p={2}>
          {open ? (
            <KeyboardArrowRightIcon
              variant="contained"
              color="#22bcd0"
              className={classes.vs}
              fontSize="large"
              onClick={() => {
                setOpen(false);
              }}
            />
          ) : (
            <KeyboardArrowLeftIcon
              variant="contained"
              color="#22bcd0"
              fontSize="large"
            />
          )}
        </Box>
        <hr />
        <List>
          <ListItem className={classes.ListItem}>
            <Box className={classes.HeaderLinks}>
              <Box>
                <Link to="/Home" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Home
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link to="/About" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    About
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link to="/Feedback" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Feedback
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  <AccountCircleIcon
                    style={{ fontSize: "2.5rem" }}
                    onClick={handleClick}
                  />

                  <Menu
                    id="simple-menu"
                    style={{ margin: "45px 0px 0px 0px" }}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Setting</MenuItem>
                  </Menu>
                </Link>
              </Box>
            </Box>
          </ListItem>
        </List>
        <Divider />
      </SwipeableDrawer>
    </div>
  );
};
export default HamBurger;
const useStyles = makeStyles((theme) => ({
  HeaderItems: {
    cursor: "pointer",
    padding: "20px",
    "&:hover": {
      color: "#6605B8",
    },
  },
  vs: {
    color: "linear-gradient(90deg, #03228f 0%, #0e73e4 100%)",
  },
  hamBurgerBtn: {
    background: "#3E8AAD",
    "&:hover": {
      color: "#3E8AAD",
    },
  },
  RealHamburger: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      color: "#000",
    },
  },
  ListItem: {
    width: "150px",
    display: "flex",
    justifyContent: "space-around",
  },
  HeaderLinks: {
    width: "300px",
    height: "350px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  btn: {
    color: "white",
    backgroundColor: "#2250f4",
    borderRadius: 5,
    padding: "7px 22px",
    border: "none",
    height: 40,
    fontWeight: 700,
  },
}));
