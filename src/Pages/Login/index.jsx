import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
import { Alert } from "bootstrap";
import GoogleButton from "react-google-button";
import logo from "../../Assets/Images/h.PNG";

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleLogIn } = useUserAuth();
  const navigate = useNavigate();

  // Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/Home");
    } catch (error) {
      return alert("Login failed");
    }
  };
  // Login with google
  const handleGoogleLogIn = async (e) => {
    e.preventDefault();
    try {
      await googleLogIn();
      navigate("/Home");
    } catch (error) {
      return alert("Login with Google Account failed");
    }
  };
  return (
    <Container className={classes.contain}>
      <Box>
        <img
          src={logo}
          alt="loogo"
          style={{ maxWidth: "250px", margin: "20px" }}
        />
      </Box>
      <Paper
        className={classes.inner}
        component={Box}
        maxWidth="30%"
        mx="auto"
        p={4}
      >
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h1"
            mt={2}
            style={{ marginTop: "30px", textAlign: "center" }}
          >
            Login Here!
          </Typography>
          <Box mt={2} className={classes.innerbox}>
            <TextField
              placeholder="Email /User Name"
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
              label="Email/ User Name"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              type="password"
              placeholder="Password"
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>

            <Box className={classes.btn}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                style={{
                  color: "white",
                  height: "50px",
                  backgroundColor: "#4185f4",
                }}
              >
                Login
              </Button>
              <Box className={classes.btn}>
                <GoogleButton
                  onClick={handleGoogleLogIn}
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
              <Box className={classes.btn}>
                <Link to="/PhoneSignUp" style={{ textDecoration: "none" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{
                      height: "50px",
                      color: "white",
                      backgroundColor: "#119F16",
                      textDecoration: "none",
                    }}
                  >
                    SignIn With Phone
                  </Button>
                </Link>
              </Box>
              <Typography style={{ marginTop: "20px", textAlign: "center" }}>
                <Link to="/Forget">Forget Password?</Link>
                <span> . </span>
                <Link to="/SignUp">Create an Account</Link>
              </Typography>
            </Box>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
const useStyles = makeStyles((theme) => ({
  contain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px",
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  inner: {
    width: "450px",
  },
  innerbox: {
    padding: "20px",
  },
  name: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  fname: {
    marginRight: 10,
  },
  radio: {
    display: "flex",
    marginTop: "20px",
  },
  btn: {
    marginTop: "20px",
  },
}));

// import {
//   Container,
//   Paper,
//   Typography,
//   Box,
//   TextField,
//   Button,
// } from "@material-ui/core";
// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

// const Login = () => {
//   //
//   // for birthday
//   const { register, handleSubmit } = useForm();
//   const [data, setData] = useState("");
//   const classes = useStyles();
//   //function
//   const onSubmit = (data) => {
//     setData(JSON.stringify(data));
//     console.log("data is here", data);
//   };
//   return (
//     <Container className={classes.contain}>
//       {/* <form onSubmit={handleSubmit(onSubmit)}>
//         <input {...register("firstName")} placeholder="First name" />
//         <select {...register("category", { required: true })}>
//           <option value="">Select...</option>
//           <option value="A">Option A</option>
//           <option value="B">Option B</option>
//         </select>
//         <textarea {...register("aboutYou")} placeholder="About you" />
//         <p>{data}</p>
//         <input type="submit" />
//       </form> */}
//       <Paper className={classes.inner} component={Box} mx="auto" p={4}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Typography variant="h5" mt={2} style={{ marginTop: "30px" }}>
//             Login Here!
//           </Typography>
//           <Box component="form" mt={2} className={classes.innerbox}>
//             <TextField
//               type="user name"
//               {...register("firstName")}
//               name="user name"
//               placeholder="User Name"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               color="primary"
//               label="User Name"
//             ></TextField>
//             <TextField
//               type="password"
//               {...register("password")}
//               name="password"
//               placeholder="Password"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               color="primary"
//               label="Password"
//             ></TextField>
//             <Box className={classes.btn}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 style={{ height: "50px" }}
//               >
//                 Login
//               </Button>
//             </Box>
//             <Typography style={{ marginTop: "20px" }}>
//               <Link to="/Forget">Forget Password?</Link>
//               <span> . </span>
//               <Link to="/SignUp">Create an Account</Link>
//             </Typography>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default Login;
// const useStyles = makeStyles((theme) => ({
//   contain: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "40px",
//     width: "90%",
//   },
//   inner: {
//     width: 450,
//   },
//   innerbox: {
//     padding: "20px",
//   },
//   btn: {
//     marginTop: "20px",
//   },
// }));
