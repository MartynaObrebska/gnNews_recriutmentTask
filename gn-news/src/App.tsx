import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import SideMenu from "./components/SideMenu/SideMenu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a3cf34",
      dark: "#cadc16",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3a424d",
      contrastText: "#fff",
    },
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#545454",
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12} sx={{ height: "84px" }}>
          <Header />
        </Grid>
        <Grid
          item
          xs={2}
          color="primary"
          sx={{ borderRight: "1px solid #ddd" }}
        >
          <SideMenu />
        </Grid>
        <Grid item xs={10}>
          <MainContent />
        </Grid>
        <Grid item xs={12} sx={{ height: "84px" }}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
