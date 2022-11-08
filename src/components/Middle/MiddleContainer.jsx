import { Outlet, useParams } from "react-router-dom";
import About from "../Left/About";
import Menu from "../Right/Menu";
import { useState } from "react";
import "./MiddleContainer.scss";
import Contact from "./Contact";
import History from "./History";
import Home from "./Home";
import Projects from "./Projects";

export default function MiddleContainer() {
  const { page } = useParams();
  const [open, setOpen] = useState(false);
  return (
    <div className={`middleContainer  ${open ? "open" : "close"}`}>
      <About />
      {page === "home" ? (
        <Home />
      ) : page === "history" ? (
        <History />
      ) : page === "contacts" ? (
        <Contact />
      ) : page === "projects" ? (
        <Projects />
      ) : (
        <Page404 />
      )}

      <Menu setOpen={setOpen} open={open} page={page} />
    </div>
  );
}
