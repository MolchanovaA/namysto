import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import SupportUs from "./components/SupportUs";
import Media from "./components/Media";
import PastProjects from "./components/PastProjects";
import CurrentProjects from "./components/CurrentProjects";
import ErrorPage from "./components/ErrorPage";
import Achievements from "./components/Achievements";

import "./components/styles/main.css";

function App() {
  const [menuRequest, setMenuRequest] = useState("");
  return (
    <>
      {" "}
      <Header setMenuRequest={setMenuRequest} />
      <Routes>
        <Route path="/namysto/" element={<Home />} />
        <Route path="/namysto/contacts" element={<Contacts />} />
        <Route path="/namysto/support-us" element={<SupportUs />} />
        <Route path="/namysto/media" element={<Media />} />
        <Route path="/namysto/past-projects" element={<PastProjects />} />
        <Route path="/namysto/current-projects" element={<CurrentProjects />} />
        <Route path="/namysto/achievements" element={<Achievements />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
