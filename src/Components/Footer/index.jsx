import React from "react";
import { makeStyles } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";

const Footer = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#3e8aad", paddingBottom: "20px" }}>
      <hr
        style={{
          margin: "40px 0px",
          border: "none",
          height: "2px",
          padding: "0.8px 0px",
          background: "linear-gradient(45deg, transparent 10%, #002c40)",
        }}
      />
      <div className={classes.foottt}>
        <div className={classes.foot}>
          <div className={classes.one}>
            <h4 className={classes.heading}>Get the latest update</h4>
            <div className={classes.signin}>
              <input></input>
              <button>Signin</button>
            </div>
          </div>
          <div className={classes.four}>
            <h3 className={classes.heading}>Community</h3>
            <a href="/about"> About us</a>
            <a href="/about">How it work </a>
            <a href="/about"> Support</a>
            <a href="/about"> Become a partner</a>
          </div>
          <div className={classes.four}>
            <h3 className={classes.heading}>About Us</h3>
            <a href="/about"> About us</a>
            <a href="/about">How it work </a>
            <a href="/about"> Support</a>
            <a href="/about"> Become a partner</a>
          </div>
          <div className={classes.four}>
            <h3 className={classes.heading}>Contact Us</h3>
            <a href="/about">Contact No: 03454548340</a>
            <a href="/about">Email: GashGiran@gmail.com</a>
            <a href="/about">
              Location: Office#205, 2nd floor, Rawal Souq Plaza,Rwp
            </a>
            <a href="/about">Opening Hours: 24 hours</a>
          </div>
        </div>
        <div className={classes.foott}>
          <h4 className={classes.heading}>Join the Community</h4>
          <div className={classes.icons}>
            <TwitterIcon style={{ color: "#1da1f2", fontSize: "30px" }} />
            <InstagramIcon style={{ color: "#aa31be", fontSize: "30px" }} />
            <FacebookIcon style={{ color: "#1877f2", fontSize: "30px" }} />
            <TelegramIcon style={{ color: "#2fa3d9", fontSize: "30px"   }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  foottt: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  foot: {
    display: "flex",
    justifyContent: "space-between",
    margin: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      margin: "0px",
    },
  },
  heading: {
    color: "white",
  },
  one: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  signin: {
    display: "flex",
  },

  four: {
    display: "flex",
    flexDirection: "Column",
    gap: "8px",
    "& a": {
      color: "white",
      opacity: "0.7",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
}));
