import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { countries } from "../../../utility/countries";
import Country from "../../SideMenu/Country/Country";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  MenuList,
  Button,
} from "@mui/material";

interface Props {
  handleOpenPopUp: () => void;
}

export default function LongMenu(props: Props) {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChangeAccordion = () => {
    setExpanded(!expanded);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ display: { xs: "inline-flex", md: "none" } }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 300,
            width: 250,
          },
        }}
      >
        <MenuItem>
          <Button variant="text" onClick={props.handleOpenPopUp}>
            About
          </Button>
        </MenuItem>
        <MenuItem>
          <Accordion
            expanded={expanded}
            onChange={handleChangeAccordion}
            sx={{ width: "100%", borderRadius: 0, boxShadow: 0 }}
          >
            <AccordionSummary
              aria-controls="panel-content"
              id="panel-header"
              sx={{ p: 0 }}
            >
              <Typography>Countries</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              <MenuList>
                {countries.map((item, index) => (
                  <MenuItem
                    key={index}
                    selected={item.name === "Argentina"}
                    onClick={handleClose}
                    sx={{ p: 0 }}
                  >
                    <Country item={item} />
                  </MenuItem>
                ))}
              </MenuList>
            </AccordionDetails>
          </Accordion>
        </MenuItem>
      </Menu>
    </>
  );
}
