import { Outlet, useParams } from "react-router-dom";
import About from "../Left/About";
import Menu from "../Right/Menu";
import { useState } from "react";
import "./MiddleContainer.scss";
import Contact from "./Contact";
import History from "./History";
import Home from "./Home";
import OnlineShop from "./OnlineShop";
import Team from "./Team";
import ShowDetails from "./ShowDetails";

export default function MiddleContainer({ data, setData }) {
  const { page } = useParams();
  const [open, setOpen] = useState(false);
  return (
    <div className={`middleContainer  ${open ? "open" : "close"}`}>
      <About data={data} setData={setData} />
      {page === "home" ? (
        <Home />
      ) : page === "history" ? (
        <History />
      ) : page === "contacts" ? (
        <Contact />
      ) : page === "shop" ? (
        <OnlineShop />
      ) : page === "team" ? (
        <Team />
      ) : page === "/details" ? (
        <ShowDetails />
      ) : (
        <Page404 />
      )}

      <Menu setOpen={setOpen} open={open} page={page} />
    </div>
  );
}
