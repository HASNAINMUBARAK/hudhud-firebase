import {
  Avatar,
  Container,
  Box,
  makeStyles,
  Typography,
  Link,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { data1 } from "../../DummyData/index";
import whatsapp from "../../Assets/Images/whatsapp.png";
import FixedTags from "../../Common/Autocomplete";
import SimpleAccordion from "../../Common/Accordion";
import { useUserAuth } from "../../Context/UserAuthContext";

const Rightbar = () => {
  const { user } = useUserAuth();
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.top}>
        <Box className={classes.tfirst}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Typography
            style={{ fontWeight: "800", fontSize: "18px", padding: "10px" }}
          >
            {user && user.email}
          </Typography>
          <Link to="#" style={{ textDecoration: "none", color: "#276ACA" }}>
            {/* {user && userName} */}
          </Link>
        </Box>
        <Box className={classes.tsecond}>
          <Box display="flex" className={classes.phone}>
            <Typography style={{ color: "#656D79" }}>Phone</Typography>
            <Typography style={{ paddingLeft: "60px" }}>
              +0 3456789010011
            </Typography>
          </Box>
          <Box display="flex" className={classes.whatsapp}>
            <Typography style={{ color: "#656D79" }}>WhatsApp</Typography>
            <Typography
              style={{
                paddingLeft: "27px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              +2 3742039743047
              <img src={whatsapp} alt="df" className={classes.whatsappi} />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.tthird}>
        <Typography style={{ color: "#656D79", marginBottom: "10px" }}>
          TAGS
        </Typography>
        {/* <SimpleAccordion /> */}
        <FixedTags />
      </Box>
      <Box className={classes.middle}>
        <Typography style={{ color: "#656D79", marginBottom: "10px" }}>
          RECENT FILES
        </Typography>
        {data1.map((item) => {
          return (
            <Box className={classes.card}>
              <Box className={classes.profile}>
                <img src={item.img} alt="imag" className={classes.imag} />
              </Box>
              <Box className={classes.des}>
                <Typography className={classes.title}>{item.title}</Typography>
                <Typography className={classes.title}>MP4 4.2MB</Typography>
              </Box>
              <Box className={classes.menu}>
                <svg
                  width="20px"
                  height="20px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M18 12.5a.5.5 0 100-1 .5.5 0 000 1zM12 12.5a.5.5 0 100-1 .5.5 0 000 1zM6 12.5a.5.5 0 100-1 .5.5 0 000 1z"
                    fill="#000000"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box className={classes.bottom}>
        <Typography>ACTVITY LOG</Typography>
        <Box className={classes.log}>
          <AvatarGroup max={6} style={{ marginBottom: 20 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/6.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
          </AvatarGroup>
        </Box>
        {/* <ExampleCollapsibleList /> */}
      </Box>
    </Container>
  );
};

export default Rightbar;
const useStyles = makeStyles((theme) => ({
  container: {
    height: "99.5vh",
    minWidth: 362,
    padding: 0,
    margin: 0,
    // paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    border: "1px solid  #E4E5E7",
  },
  top: {
    borderBottom: "1px solid  #E4E5E7",
  },
  tfirst: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 30,
  },
  phone: {
    display: "flex",
    margin: "20px",
  },
  whatsapp: {
    display: "flex",
    margin: "20px",
  },
  whatsappi: {
    width: "16px",
    height: "16px",
    paddingLeft: "10px",
  },
  tthird: {
    borderBottom: "1px solid  #E4E5E7",
    padding: 16,
  },
  imag: {
    borderRadius: 4,
    width: 36,
    height: 36,
  },
  profile: {
    display: "flex",
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
  middle: {
    height: "22vh",
    overflowY: "auto",
    padding: 16,
    borderBottom: "1px solid  #E4E5E7",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  card: {
    display: "flex",
    gap: "15px",
    padding: 5,
  },
  des: {
    width: 372,
  },
  bottom: {
    padding: 16,
    borderBottom: "1px solid  #E4E5E7",
  },
  list: {
    borderLeft: "2px solid #A0C7FE  ",
  },
}));
