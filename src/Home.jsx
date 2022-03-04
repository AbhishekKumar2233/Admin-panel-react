import React from "react";
import Sidebar from "./Components/Sidebar";
import "../src/styles.css";
import UserSide from "./Components/UserSide";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Listitem from "./Components/Listitem";

const Home = ({ data }) => (
  <div className="Home">
    <Sidebar />
    <div className="center">
      <Navbar />
      <Listitem />
      <Main>{data}</Main>
    </div>
    <UserSide />
  </div>
);

export default Home;
