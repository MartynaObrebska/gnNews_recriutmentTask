import {
  CardMedia,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import logo from "../../assets/gnNews_big.png";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 84px - 84px)"
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
            <Typography variant="h4" sx={{ fontWeight: "800" }}>
              Find latest news from around the world!
            </Typography>
            <Typography variant="h6">
              Select country to see all its news.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
}
