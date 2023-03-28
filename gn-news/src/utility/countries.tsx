const baseURL = "https://newsapi.org/images/flags/";

const countriesNames = [
  {
    name: "Argentina",
    code: "ar",
  },
  {
    name: "Australia",
    code: "au",
  },
  {
    name: "Austria",
    code: "at",
  },
  {
    name: "Belgium",
    code: "be",
  },
  {
    name: "Brazil",
    code: "br",
  },
  {
    name: "Canada",
    code: "ca",
  },
  {
    name: "China",
    code: "cn",
  },
  {
    name: "Czech Republic",
    code: "cz",
  },
  {
    name: "Egypt",
    code: "eg",
  },
  {
    name: "France",
    code: "fr",
  },
  {
    name: "Germany",
    code: "de",
  },
  {
    name: "Greece",
    code: "gr",
  },
  {
    name: "Italy",
    code: "it",
  },
  {
    name: "Japan",
    code: "jp",
  },
  {
    name: "Poland",
    code: "pl",
  },
  {
    name: "Ukraine",
    code: "ua",
  },
  {
    name: "United Kingdom",
    code: "gb",
  },
  {
    name: "United States",
    code: "us",
  },
];

export const countries = countriesNames.map((country) => ({
  name: country.name,
  code: country.code,
  flag: `${baseURL}${country.code}.svg`,
}));
