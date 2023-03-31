import { Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { CurrentDate } from "./CurrentDate/CurrentDate";

function Footer() {
  const articlesData = useAppSelector((state) => state.news.news);
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          height: "84px",
          color: "secondary.contrastText",
          bgcolor: "secondary.main",
        }}
      >
        <Grid
          item
          xs={articlesData ? 6 : 12}
          lg={articlesData ? 2 : 12}
          justifyContent="center"
        >
          <Typography
            align="center"
            sx={{
              lineHeight: { xs: articlesData ? "42px" : "84px", sm: "84px" },
            }}
          >
            <CurrentDate />
          </Typography>
        </Grid>
        {articlesData && (
          <Grid item xs={6} lg={10}>
            <Typography
              align="center"
              sx={{ lineHeight: { xs: "42px", sm: "84px" } }}
            >
              Total articles:{" "}
              <span style={{ fontWeight: "800", paddingLeft: "5px" }}>
                {articlesData?.length}
              </span>
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default Footer;
