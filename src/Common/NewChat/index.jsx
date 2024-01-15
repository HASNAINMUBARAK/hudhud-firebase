import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Box, makeStyles, MenuItem, Typography } from "@material-ui/core";
import { Divider } from "rsuite";
import { data } from "../../DummyData/index";

const NewChat = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  // for sectionList on new chat button
  let FirstLetter = null;
  ////////////////////////////////////////////

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const sorted = data
    .sort((a, b) => a.title.localeCompare(b.title))
    .filter((obj) => obj.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((obj) => obj.title);

  return (
    <div className={classes.drop}>
      <Button className={classes.myButton} onClick={handleClick}>
        {" "}
        new chat
      </Button>
      <Menu
        style={{
          marginTop: "30px",
        }}
        className={classes.qq}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box className={classes.searchInner}>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ backgroundColor: "white", border: "0px", outline: "0px" }}
          />
        </Box>
        <Divider style={{ border: "1px solid  #E4E5E7" }} />
        <Box className={classes.a}>
          {sorted.map((title) => {
            const firstLetter = title.charAt(0);
            const shouldDisplayFirstLetter = firstLetter !== FirstLetter;
            FirstLetter = firstLetter;
            return (
              <Box key={title}>
                {shouldDisplayFirstLetter && (
                  <Typography style={{ padding: "5px 20px" }}>
                    {firstLetter}
                  </Typography>
                )}
                <MenuItem style={{ padding: "0px 40px" }}>{title}</MenuItem>
              </Box>
            );
          })}
        </Box>
      </Menu>
    </div>
  );
};
export default NewChat;
const useStyles = makeStyles((theme) => ({
  a: {
    width: 300,
    height: "50vh",
    overflowY: "auto",
    WebkitOverflowScrolling: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  myButton: {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "4px",
    textTransform: "none",
  },
  searchInner: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    gap: 10,
  },
  title: {
    fontSize: 18,
    padding: "10px 20px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#f7f8f8",
    },
  },
}));
