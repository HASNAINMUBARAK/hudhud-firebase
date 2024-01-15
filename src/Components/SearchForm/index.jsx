import React from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { getPost } from "../../Features/postSlicer";
import { setInput } from "../../Features/postSlicer";
import { useDispatch } from "react-redux";
import Filter from "../Filter";

const SearchForm = ({ handleChange }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.searchContain} >
      <box className={classes.Input}>
        <SearchIcon />
        <input
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value === "") {
              dispatch(getPost());
            } else {
              dispatch(setInput(e.target.value));
            }
          }}
          className={classes.input}
          type="text"
          placeholder="Search for a Country"
        />
      </box>
      <box className={classes.btncontainer}>
        <Filter />
      </box>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  searchContain: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 50px",
    background: "white",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  input: {
    border: "none",
    outline: "none",
  },
  Input: {
    width: "250px",
    height: "40px",
    boxShadow: "0px 0px 10px 1px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    color: "black",
    background: "white",
    [theme.breakpoints.down("md")]: {
      paddingTop: "10px",
    },
  },

  btn: {
    display: "flex",
    width: "120px",
    textAlign: "center",
    border: "none",
    borderRadius: "5px",
    height: "40px",
    boxShadow: "0px 0px 10px 1px",
    alignItems: "center",
    justifyContent: "center",
  },
  btncontainer: {
    [theme.breakpoints.down("md")]: {
      paddingTop: "10px",
    },
  },
}));
export default SearchForm;
