// import { useContext } from "react";
// import { Context } from "../../context/MyContext";
import "./About.scss";
import img from "./assets/RB_Leipzig_2014_logo.svg.png";
import useFetch from "../../useFetch";
import { useState } from "react";
export default function About() {
  const [databl1, setDataBl1] = useFetch(
    "https://www.openligadb.de/api/getbltable/bl1/2022"
  );
  const [dataDfb, setDataDfb] = useFetch("https://www.openligadb.de/api/getb/");
  //
  const [dataCL, setDataCl] = useFetch(
    "https://www.openligadb.de/api/getmatchdata/uefacl22/2022"
  );

  https: return (
    <div className="about">
      <div className="imgBlock">
        <img src={img} className="imgBlockLeft" />
        <p>Where dreams are made! </p>
      </div>
      <div className="bundesliga">
        <h3>Bundesliga</h3>
        <div className="styledName">
          <p>Pl.</p>
          <p>Team</p>
          <p>Points</p>
        </div>
        <ul className="tableList">
          {databl1.data.slice(0, 6).map((list, index) => {
            return (
              <li
                style={{ listStyleType: "none", color: "white" }}
                key={list.TeamInfoId}
              >
                <p>{index + 1}</p>
                <div>
                  <img style={{ width: "1rem" }} src={list.TeamIconUrl} />
                  {list.TeamName}
                </div>
                <p> {list.Points}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="dfb">
        <h3>DFB - Pokal</h3>
      </div>
      <div className="legue">
        <h3>Champions Legue</h3>
      </div>
    </div>
  );
}
