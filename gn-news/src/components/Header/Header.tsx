import ToggleViewButtons from "./ToggleViewButtons/ToggleViewButtons";
import logo from "../../assets/gnNews.png";
import { Button, Grid, Stack } from "@mui/material";

function Header() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ color: "white", backgroundColor: "#3a424d" }}
    >
      <Grid item xs={3}>
        <img src={logo} alt="gnNews" loading="lazy" />
      </Grid>
      <Grid item xs="auto">
        <Stack spacing={2} direction="row" sx={{ padding: "0 30px" }}>
          <ToggleViewButtons />
          <Button variant="contained">Contained</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Header;
