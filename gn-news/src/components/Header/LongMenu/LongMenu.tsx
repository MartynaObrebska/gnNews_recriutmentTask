import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { countries } from '../../../utility/countries';
import Country from '../../SideMenu/Country/Country';
import { Accordion, AccordionSummary, Typography, AccordionDetails, MenuList } from '@mui/material';

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const handleChange =
    () => {
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
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
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
      ><MenuItem>
      </MenuItem>
        <MenuItem>
          <Accordion expanded={expanded} onChange={handleChange}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Countries</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MenuList
                sx={{
                  position: "relative",
                  overflow: "auto",
                  maxHeight: "calc(100vh - 84px - 84px)",
                  padding: 0,
                }}
              >
                {countries.map((item, index) => (
                  <MenuItem key={index} selected={item.name === 'Argentina'} onClick={handleClose}>
                    <Country item={item} />
                  </MenuItem>
                ))}</MenuList>
            </AccordionDetails>
          </Accordion></MenuItem>
      </Menu>
    </>
  );
}