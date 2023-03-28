import { MenuList } from "@mui/material";
import { countries } from "../../utility/countries";
import Country from "./Country/Country";

function SideMenu() {
  return (
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
  );
}

export default SideMenu;
