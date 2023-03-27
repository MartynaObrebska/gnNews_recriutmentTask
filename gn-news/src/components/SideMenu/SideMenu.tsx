import { MenuList, MenuItem, ListItemText } from "@mui/material";

function SideMenu() {
  const countries = [
    "Country placeholder",
    "Country placeholder",
    "Country placeholder",
    "Country placeholder",
    "Country placeholder",
    "Country placeholder",
    "Country placeholder",
  ];
  return (
    <MenuList>
      {countries.map((item, index) => (
        <MenuItem
          key={index}
          sx={{
            bgcolor: "transparent",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          <ListItemText>{item}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}

export default SideMenu;
