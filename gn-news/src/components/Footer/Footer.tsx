import { Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid
      container
      sx={{ height: "84px", color: "white", backgroundColor: "#3a424d" }}
    >
      <Grid xs={2}>
        <Typography align="center" sx={{ lineHeight: "84px" }}>
          Time placeholder
        </Typography>
      </Grid>
      <Grid xs={10}>
        <Typography align="center" sx={{ lineHeight: "84px" }}>
          Total articles:
        </Typography>{" "}
      </Grid>
    </Grid>
  );
}

export default Footer;
