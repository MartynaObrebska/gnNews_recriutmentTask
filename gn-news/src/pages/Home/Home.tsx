import { CardMedia, CardContent, Typography, Grid } from "@mui/material";
import logo from "../../assets/gnNews_big.png";

export default function Home() {
  return (
    <Grid
      item
      xs={12}
      md={9}
      lg={10}
      sx={{ maxHeight: "calc(100vh - 84px - 84px)" }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 84px - 84px)"
        overflow="auto"
      >
        <Grid
          sx={{
            paddingBottom: "50px",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={logo}
            alt="gnNews"
            sx={{ backgroundSize: "contain", objectFit: "contain" }}
          />
          <CardContent>
            <Typography align="center" variant="h4" sx={{ fontWeight: "800" }}>
              Find latest news from around the world!
            </Typography>
            <Typography align="center" variant="h6">
              Select country to see all its news.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Grid>
  );
}
