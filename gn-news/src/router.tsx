import { createBrowserRouter } from "react-router-dom";
import CountryNews from "./pages/CountryNews/CountryNews";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "country/:countryCode",
    element: <CountryNews />,
  },
]);

export default router;
