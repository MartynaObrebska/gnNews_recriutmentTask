import { Grid, MenuList } from "@mui/material";
import { countries } from "../../utility/countries";
import Country from "./Country/Country";

function SideMenu() {
  return (
    <Grid
      item
      lg={2}
      md={3}
      color="primary"
      sx={{
        borderRight: "1px solid #ddd",
        display: { xs: "none", md: "block" },
      }}
    >
      <MenuList
        sx={{
          position: "relative",
          overflow: "auto",
          maxHeight: "calc(100vh - 84px - 84px)",
          padding: 0,
        }}
      >
        {countries.map((item, index) => (
          <Country key={index} item={item} />
        ))}
      </MenuList>
    </Grid>
  );
}

export default SideMenu;
