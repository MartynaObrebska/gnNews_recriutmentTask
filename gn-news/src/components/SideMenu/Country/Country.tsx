import {
  MenuItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from "@mui/material";

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
    <Box
      component="a"
      href={`/country/${item.code}`}
      color="text.primary"
      sx={{
        textDecoration: "none",
      }}
    >
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
    </Box>
  );
}

export default Country;
