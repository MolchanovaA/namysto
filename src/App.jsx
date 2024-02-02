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
        <Route path="/namysto" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/media" element={<Media />} />
        <Route path="/past-projects" element={<PastProjects />} />
        <Route path="/current-projects" element={<CurrentProjects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
