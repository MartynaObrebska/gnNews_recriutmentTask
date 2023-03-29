import { Grid, MenuList } from "@mui/material";
import { countries } from "../../utility/countries";
import Country from "./Country/Country";

function SideMenu() {
  return (
    <Grid item xs={2} color="primary" sx={{ borderRight: "1px solid #ddd" }}>
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
