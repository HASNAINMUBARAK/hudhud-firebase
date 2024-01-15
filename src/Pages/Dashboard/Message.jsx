import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Button,
  TextField,
} from "@material-ui/core";
import { Divider } from "rsuite";
import whatsapp from "../../Assets/Images/whatsapp.png";
import ellipse from "../../Assets/Images/Ellipse5.png";
import SimpleMenu from "../../Common/Menu";
import ImageUpload from "../../Common/ImageUpload";

const Message = () => {
  // const { selectedObject } = props;
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.top}>
        <Box className={classes.left}>
          <Typography style={{ fontWeight: "600" }}>
            Oleh Sheptytskyi
          </Typography>
          <img src={whatsapp} alt="df" className={classes.whatsapp} />
          <Typography style={{ color: "#828993", fontSize: "14px" }}>
            4 min ago
          </Typography>
        </Box>
        <Box className={classes.right}>
          <img src={ellipse} alt="ewr" className={classes.user} />
          <Divider style={{ border: "1px solid  #E4E5E7", height: "16px" }} />
          <SimpleMenu />
        </Box>
      </Box>
      <Box className={classes.middle}>
        <Box className={classes.msg}>
          {/* <Typography>{selectedObject.title}</Typography> */}
          {/* <p>{props.selectedObject.link}</p> */}
          {/* <img src={props.selectedObject.imageUrl} alt={props.selectedObject.name} /> */}
        </Box>
      </Box>
      <Box className={classes.bottom}>
        <Box className={classes.upper}>
          <TextField
            multiline
            fullWidth
            border="none"
            placeholder="Type Here"
            InputProps={{ disableUnderline: true }}
          />
        </Box>
        <Box className={classes.lower}>
          <Box className={classes.first}>
            <ImageUpload />
            {/* <EmojiPicker/> */}
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
                d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z"
                stroke="#000000"
                stroke-width="1.5"
              ></path>
              <path
                d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8.5 10a.5.5 0 110-1 .5.5 0 010 1zM15.5 10a.5.5 0 110-1 .5.5 0 010 1z"
                fill="#000000"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>

            <Divider style={{ border: "1px solid  #E4E5E7", height: "16px" }} />
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
                d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6zM10 16l4-8"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              width="20px"
              height="20px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <rect
                width="7"
                height="5"
                rx="0.6"
                transform="matrix(1 0 0 -1 3 22)"
                stroke="#000000"
                stroke-width="1.5"
              ></rect>
              <rect
                width="7"
                height="5"
                rx="0.6"
                transform="matrix(1 0 0 -1 8.5 7)"
                stroke="#000000"
                stroke-width="1.5"
              ></rect>
              <rect
                width="7"
                height="5"
                rx="0.6"
                transform="matrix(1 0 0 -1 14 22)"
                stroke="#000000"
                stroke-width="1.5"
              ></rect>
              <path
                d="M6.5 17v-3.5a2 2 0 012-2h7a2 2 0 012 2V17M12 11.5V7"
                stroke="#000000"
                stroke-width="1.5"
              ></path>
            </svg>
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
                d="M6 18.01l.01-.011M6 6.01l.01-.011"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2 9.4V2.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6zM2 21.4v-6.8a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
                stroke="#000000"
                stroke-width="1.5"
              ></path>
            </svg>
            <Divider style={{ border: "1px solid  #E4E5E7", height: "16px" }} />
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
                d="M16 12h1.4a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6v-6.8a.6.6 0 01.6-.6H8m8 0V8c0-1.333-.8-4-4-4S8 6.667 8 8v4m8 0H8"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <Typography>Private Note</Typography>
          </Box>
          <Box className={classes.second}>
            <Box className={classes.s1}>
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M9 6v12M15 6v12M9 6a3 3 0 10-3 3h12a3 3 0 10-3-3M9 18a3 3 0 11-3-3h12a3 3 0 11-3 3"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <svg
                width="15px"
                height="15px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <Typography>Enter</Typography>
            </Box>
            <Box className={classes.s2}>
              <Button className={classes.btn}>
                <Typography>Send</Typography>
                <Divider
                  style={{
                    border: "1px solid  #E4E5E7",
                    height: "16px",
                    margin: "0px 5px",
                  }}
                />
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
                    d="M12 6v6h6"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Message;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: "5px 0px",
    height: "100vh",
    background: "#f7f8f8",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10px",
    gap: 10,
    height: "52px ",
    background: "white",
  },
  bottom: {
    background: "white",
    borderRadius: "5px",
    margin: "20px 10px",
  },
  whatsapp: {
    width: "16px",
    height: "16px",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
  user: {
    width: "20px",
    height: "20px",
  },
  msg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f7f8f8",
    height: "77vh",
  },
  upper: {
    padding: "0px 5px",
  },
  lower: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  first: {
    display: "flex",
    gap: 10,
    margin: "10px",
  },
  second: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "10px",
  },
  s1: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  s2: {
    gap: 5,
  },
  btn: {
    display: "flex",
    gap: 5,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
  add: {
    color: theme.palette.primary.main,
  },
}));
