import { useEffect } from "react";
import "./About.scss";
import img from "./assets/RB_Leipzig_2014_logo.svg.png";

export default function About({ data, setData }) {
  console.log(data, setData);
  return (
    <div className="about">
      <div className="imgBlock">
        <img src={img} className="imgBlockLeft" />
        <p> </p>
      </div>
      <div className="bundesliga">
        <h3>Bundesliga</h3>
      </div>
      <div className="dfb">
        <h3>Deutsch Fußbal Pokal</h3>
      </div>
      <div className="legue">
        <h3>Champions Legue</h3>
      </div>
    </div>
  );
}
