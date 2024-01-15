import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { data } from "../../DummyData";

export default function SelectTextFields() {
  const classes = useStyles();
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mt: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextField
          select
          fullWidth
          sx={{
            ".MuiPaper-root": {
              height: "30vh !important",
            },
          }}
        >
          {data.map((item) => (
            <MenuItem
              key={item.value}
              value={item.title}
              height={"30vh !important"}
            >
              <Box className={classes.info}>
                <img src={item.img} alt="iage" className={classes.imag} />
                <Typography>{item.title}</Typography>
              </Box>
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  info: {
    display: "flex",
    alignItems: "self-end",
    gap: 10,
  },
  imag: {
    width: 25,
    borderRadius: "50%",
  },
}));
