import { Outlet } from "react-router-dom";
import About from "../Left/About";
import Menu from "../Right/Menu";
import { useState } from "react";
import "./MiddleContainer.scss";

export default function MiddleContainer() {
  const [open, setOpen] = useState({ menuOpen: false, page: "Home" });
  return (
    <div className={`middleContainer  ${open.menuOpen ? "open" : "close"}`}>
      <About />
      <Outlet />
      <Menu setOpen={setOpen} open={open} />
    </div>
  );
}
