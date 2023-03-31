import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Avatar, Button } from "@mui/material";
import { countries } from "../../utility/countries";
import { setLanguage } from "../../app/Stores/reducers/Language/languageSlice";
import i18next from "i18next";

function ToggleLanguageButton() {
  const language = useAppSelector((state) => state.language.language);
  const dispatch = useAppDispatch();

  const flag = countries.find(
    (country) => country.code === (language === "pl" ? "pl" : "gb")
  )?.flag;
  const newLanguage = language === "pl" ? "en" : "pl";
  const handleClick = () => {
    dispatch(setLanguage(newLanguage));
    i18next.changeLanguage(newLanguage);
  };

  return (
    <Button id="basic-button" onClick={handleClick} sx={{ p: 0 }}>
      <Avatar
        alt={language}
        src={flag}
        sx={{ width: 20, height: 20 }}
        variant="square"
      />
    </Button>
  );
}

export default ToggleLanguageButton;
