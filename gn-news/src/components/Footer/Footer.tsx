import { Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { CurrentDate } from "./CurrentDate/CurrentDate";

function Footer() {
  const articlesData = useAppSelector((state) => state.news.news);
  return (
    <Grid item xs={12} sx={{ height: "84px" }}>
      <Grid
        container
        sx={{ height: "84px", color: "white", backgroundColor: "#3a424d" }}
      >
        <Grid item xs={2}>
          <Typography align="center" sx={{ lineHeight: "84px" }}>
            <CurrentDate />
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography align="center" sx={{ lineHeight: "84px" }}>
            Total articles:{" "}
            <span style={{ fontWeight: "800", paddingLeft: "5px" }}>
              {articlesData?.length}
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
