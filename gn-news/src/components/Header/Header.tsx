import ToggleViewButtons from "./ToggleViewButtons/ToggleViewButtons";
import logo from "../../assets/gnNews.png";
import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color={"secondary"}
        justify-content="space-between"
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Box component="a" href="/">
              <img src={logo} alt="gnNews" loading="lazy" />
            </Box>
          </Box>
          <Stack spacing={2} direction="row" sx={{ padding: "0 30px" }}>
            <ToggleViewButtons />
            <Button
              variant="contained"
              sx={{ fontWeight: "800", paddingTop: "9px" }}
            >
              Click!
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
