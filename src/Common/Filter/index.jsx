import * as React from "react";
import Menu from "@mui/material/Menu";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Button } from "@mui/material";
import { Divider } from "rsuite";
import "../../App.css";
import { useState } from "react";
import MaterialUIPickers from "../DatePicker";
import SelectTextFields from "../SelectTextField";

export default function Filter() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [buttonColor, setButtonColor] = useState("#656d79");
  const [borderColor, setBorderColor] = useState("#656d79");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // active button
  const handleeClick = () => {
    setButtonColor("#3882ec");
    setBorderColor("#3882ec");
  };

  return (
    <div>
      <svg
        className={classes.icon}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        width="20px"
        height="20px"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
      >
        <path
          d="M4 3h16a1 1 0 011 1v1.586a1 1 0 01-.293.707l-6.415 6.414a1 1
                   0 00-.292.707v6.305a1 1 0 01-1.243.97l-2-.5a1 1 0 01-.757-.97v-5.805a1
                    1 0 00-.293-.707L3.292 6.293A1 1 0 013 5.586V4a1 1 0 011-1z"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box className={classes.contain}>
          <Box className={classes.top}>
            <Typography>Filters</Typography>
            <Button onClick={handleClose}>Clear</Button>
          </Box>
          <Divider style={{ border: "1px solid  #E4E5E7" }} />
          <Box className={classes.one}>
            <Typography>CONVERSATION STATUS</Typography>
            <Box
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  color: buttonColor,
                  borderColor: borderColor,
                  border: "1px solid",
                }}
                onClick={handleeClick}
              >
                Closed
              </Button>
              <Button variant="outlined">On Hold</Button>
            </Box>
          </Box>

          <Box className={classes.one}>
            <Typography>CHANNAL</Typography>
            <Box
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Button variant="outlined">Whatsapp</Button>
              <Button variant="outlined">twitter</Button>
              <Button variant="outlined">Website</Button>
            </Box>
          </Box>

          <Box className={classes.one}>
            <Typography>TAGS</Typography>
            <Box
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <Button variant="outlined">Potential Lead</Button>
              <Button variant="outlined">On Hold</Button>
              <Button variant="outlined">Website</Button>
              <Button variant="outlined">Order</Button>
              <Button variant="outlined">E-Commerce</Button>
            </Box>
          </Box>
          <Box className={classes.one}>
            <Typography>DATE</Typography>
            <MaterialUIPickers />
          </Box>
          <Box className={classes.one}>
            <Typography>ASSIGN AGENTS</Typography>
            <SelectTextFields />
          </Box>
        </Box>
      </Menu>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  contain: {
    width: 300,
    padding: 20,
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  one: {
    marginTop: 10,
    gap: 10,
  },
  icon: {
    cursor: "pointer",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#f7f8f8",
    },
  },
  btn: {
    "& .MuiButtonBase-root-MuiButton-root": {
      color: "gray !important",
    },
  },
}));
