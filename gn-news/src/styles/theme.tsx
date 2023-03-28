import createTheme from "@mui/material/styles/createTheme";
import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.green,
      dark: colors.lightGreen,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.darkBlue,
      contrastText: colors.white,
    },
    background: {
      paper: colors.white,
    },
    text: {
      primary: colors.darkGrey,
    },
  },
  typography: {
    fontFamily: [
      '"Nunito"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Roboto"',
      '"Oxygen"',
      '"Ubuntu"',
      '"Cantarell"',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      "sans-serif",
    ].join(","),
  },
});

export default theme;
