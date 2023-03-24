import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <div className="app">
      <Header />
      <SideMenu />
      <div className="content">
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
