import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, Box } from "@material-ui/core";

export default function InboxTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper style={{ boxShadow: "none" }}>
      <Box className={classes.tab}>
        <Tabs
          classes={{
            indicator: classes.indicator,
          }}
          value={value}
          textColor="primary"
          onChange={handleChange}
        >
          <Box className={classes.tabs}></Box>
          <Tab label="ALL(130)" style={{ fontWeight: "600" }} />
          <Tab label="UNREAD(34)" />
        </Tabs>
      </Box>
    </Paper>
  );
}
const useStyles = makeStyles(() => ({
  tab: {
    "& .MuiTab-root": {
      minWidth: "unset !important",
    },
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: "#0066ff !important",
    },
  },
  tabs: {
    "& .PrivateTabIndicator-colorPrimary-16": {
      color: "blue !important",
    },
  },
  indicator: {
    backgroundColor: "blue !important",
  },
}));
