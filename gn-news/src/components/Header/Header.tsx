import ToggleViewButtons from "./ToggleViewButtons/ToggleViewButtons";
import logo from "../../assets/gnNews.png";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PopUp from "./PopUp/PopUp";
import MenuIcon from "@mui/icons-material/Menu";

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
          color="secondary"
          justify-content="space-between"
        >
          <Toolbar sx={{ padding: 0 }}>
            <Box
              component="a"
              href="/"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img src={logo} alt="gnNews" loading="lazy" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                fontWeight: "800",
                padding: "0 20px",
                display: { xs: "inline", sm: "none" },
              }}
            >
              gnNews
            </Typography>
            <Stack spacing={2} direction="row" sx={{ padding: "0 20px" }}>
              <ToggleViewButtons />
              <Button
                variant="contained"
                sx={{
                  fontWeight: "800",
                  paddingTop: "9px",
                  display: { xs: "none", lg: "inline-flex" },
                }}
                onClick={handleOpen}
              >
                About
              </Button>
              <IconButton sx={{ display: { xs: "inline-flex", lg: "none" } }}>
                <MenuIcon fontSize="large" color={"primary"} />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <PopUp open={open} handleClose={handleClose} />
    </Grid>
  );
}

export default Header;
