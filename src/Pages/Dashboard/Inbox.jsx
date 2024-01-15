import { useState, useEffect } from "react";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { Divider } from "rsuite";
import { data } from "../../DummyData/index";
import { Avatar, Badge } from "@material-ui/core";
import whatsapp from "../../Assets/Images/whatsapp.png";
import NewChat from "../../Common/NewChat";
import Filter from "../../Common/Filter";
import { Audio, RotatingLines } from "react-loader-spinner";
import InboxTabs from "../../Common/InboxTabs";
import { useUserAuth } from "../../Context/UserAuthContext";

const Inbox = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  // const [selectedObject, setSelectedObject] = useState(null);

  const [showContainer, setShowContainer] = useState(true);

  //
  const [searchTerm, setSearchTerm] = useState("");
  //
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  //
  const sortChat = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //
  const handleIconClick = () => {
    setShowContainer(false);
  };
  /////////// for display messages /////////////////////
  /////////////////////////////////
  // const handleObjectClick = (item) => {
  //   setSelectedObject(item);
  // };
  ////////////////////////////////////
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Container className={classes.container}>
      <Box className={classes.top}>
        <Box className={classes.upper}>
          <Typography style={{ fontSize: "21px", fontWeight: "700" }}>
            Inbox
          </Typography>
          <NewChat />
        </Box>
        {showContainer ? (
          <Box className={classes.lower}>
            <Box className={classes.left}>
              <InboxTabs />
            </Box>
            <Box className={classes.right}>
              <svg
                onClick={() => setShowContainer(false)}
                className={classes.icon}
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
              <Divider
                style={{ border: "1px solid  #E4E5E7", height: "16px" }}
              />
              <Filter />
            </Box>
          </Box>
        ) : (
          <>
            <Box className={classes.outer}>
              <Box className={classes.searchInner}>
                <svg
                  className={classes.icon}
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
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    backgroundColor: "white",
                    border: "0px",
                    outline: "0px",
                    width: "100%",
                  }}
                />
              </Box>
              <Box>
                <svg
                  className={classes.cancel}
                  onClick={() => setShowContainer(true)}
                  width="24px"
                  height="24px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </Box>
            </Box>
          </>
        )}
      </Box>
      <Box className={classes.bottom}>
        {loading ? (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30vh",
            }}
          >
            <RotatingLines
              loading={loading}
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
            />
          </Box>
        ) : (
          sortChat.map((item) => {
            return (
              <Container
                style={{
                  margin: "0px",
                  padding: "0px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box className={classes.card}>
                  <Box
                    className={classes.profile}
                    // onClick={() => handleObjectClick(item)}
                  >
                    <Badge
                      overlap="circle"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      badgeContent={
                        <Box
                          style={{
                            backgroundColor: "white",
                            width: "20px",
                            height: "20px",
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center ",
                          }}
                        >
                          <Avatar
                            src={whatsapp}
                            style={{
                              width: "12px",
                              height: "12px",
                            }}
                          />
                        </Box>
                      }
                    >
                      <img src={item.img} alt="imag" className={classes.imag} />
                    </Badge>
                  </Box>
                  <Box className={classes.des}>
                    <Box className={classes.des1}>
                      <Typography className={classes.title}>
                        {item.title}
                      </Typography>
                      <Typography>2:30pm</Typography>
                    </Box>
                    <Typography className={classes.linkk}>
                      {item.link.substring(0, 80) + "..."}
                    </Typography>
                  </Box>
                </Box>
              </Container>
            );
          })
        )}

        {/* {selectedObject && <Message selectedObject={selectedObject} />} */}
      </Box>
    </Container>
  );
};

export default Inbox;

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  container: {
    margin: 0,
    padding: 0,
    border: "1px solid  #E4E5E7",
  },
  top: {
    borderBottom: "1px solid  #E4E5E7",
  },
  bottom: {
    height: "86vh",
    overflowY: "auto",
    WebkitOverflowScrolling: "none  ",
    "&::-webkit-scrollbar": {
      display: "none  ",
    },
  },
  upper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 12px",
    gap: "8px",
  },
  left: {
    display: "flex",
    gap: 10,
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "10px",
  },
  lower: {
    display: "flex",
    justifyContent: "space-between",
    padding: 5,
  },

  typography: {
    fontFamily: theme.typography.fontFamily,
    textTransform: theme.typography.textTransform,
    fontSize: theme.typography.fontSize,
  },
  card: {
    display: "flex",
    margin: 0,
    padding: 12,
    gap: 12,
    border: "1px solid  #E4E5E7",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#f7f8f8",
    },
  },
  imag: {
    width: " 40px",
    borderRadius: "50%",
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: 600,
    fontSize: 14,
  },
  link: {
    color: "#282C30",
  },
  des1: {
    display: "flex",
    justifyContent: "space-between",
  },
  send: {
    float: "right",
  },
  outer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: " 9px",
  },
  searchInner: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    gap: 10,
  },
  cancel: {
    cursor: "pointer",
    borderRadius: "50%",
    backgroundColor: "#f7f8f8",
    "&:hover": {
      backgroundColor: "#b8b8b8",
    },
  },
  icon: {
    cursor: "pointer",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#f7f8f8",
    },
  },
}));
