import { Container, Grid, makeStyles } from "@material-ui/core";
import Inbox from "../Dashboard/Inbox";
import Leftbar from "../Dashboard/Leftbar";
import Message from "../Dashboard/Message";
import Rightbar from "../Dashboard/Rightbar";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container display="flex" flexWrap="wrap">
        <Grid item sm={0.5} xs={0.5}>
          <Leftbar className={classes.leftbar} />
        </Grid>
        <Grid item md={3} sm={10} xs={10}>
          <Inbox />
        </Grid>
        <Grid item sm={6} className={classes.message}>
          <Message />
        </Grid>
        <Grid item sm={2} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  leftbar: {
    [theme.breakpoints.down("sm")]: {
      height: "99vh",
    },
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  message: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
