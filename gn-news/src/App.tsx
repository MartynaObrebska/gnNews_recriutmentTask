import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import SideMenu from "./components/SideMenu/SideMenu";
import { Grid, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

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
