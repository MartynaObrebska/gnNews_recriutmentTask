import React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setLayout } from "../../../app/Stores/reducers/layoutSlice";

function ToggleViewButtons() {
  const view = useAppSelector((state) => state.layout.layout);
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    nextView: "list" | "grid"
  ) => {
    dispatch(setLayout(nextView));
  };

  return (
    <ToggleButtonGroup
      value={view}
      exclusive
      onChange={handleChange}
      size={"small"}
      color={"primary"}
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="grid" aria-label="grid">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleViewButtons;
