import ToggleViewButtons from "./ToggleViewButtons/ToggleViewButtons";
import logo from "../../assets/gnNews.png";
import { AppBar, Box, Button, Grid, Stack, Toolbar } from "@mui/material";
import { useState } from "react";
import PopUp from "./PopUp/PopUp";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} sx={{ height: "84px" }}>
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
                onClick={handleOpen}
              >
                Click!
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <PopUp open={open} handleClose={handleClose}/>
    </Grid>
  );
}

export default Header;
