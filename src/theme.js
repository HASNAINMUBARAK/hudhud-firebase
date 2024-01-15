import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  spacing: 2,
  palette: {
    primary: {
      light: "#3882ec",
      main: "#EBF3FF",
    },
    secondary: {
      main: "#E4E5E7",
    },
  },
  typography: {
    fontFamily: "Nunito",
    fontSize: "13px",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  Button: {
    fontFamily: "Nunito",
    color: "white",
    border: "1px solid red",
  },
});
