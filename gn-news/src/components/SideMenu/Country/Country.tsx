import { MenuItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

interface Props {
  item: {
    name: string;
    code: string;
    flag: string;
  };
}

function Country(props: Props) {
  const { item } = props;
  return (
    <MenuItem
      sx={{
        height: 50,
        bgcolor: "transparent",
        "&:hover": {
          backgroundColor: "primary.main",
        },
      }}
    >
      <ListItemAvatar>
        <Avatar
          variant="square"
          alt={item.code}
          src={item.flag}
          sx={{ width: 30, height: 30 }}
        />
      </ListItemAvatar>
      <ListItemText>{item.name}</ListItemText>
    </MenuItem>
  );
}

export default Country;
