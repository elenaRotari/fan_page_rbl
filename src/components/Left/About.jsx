// import { useContext } from "react";
// import { Context } from "../../context/MyContext";
import "./About.scss";
import img from "./assets/RB_Leipzig_2014_logo.svg.png";
import useFetch from "../../useFetch";
import { useEffect, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function About() {
  const [dfb, setDfb] = useState({});
  const [databl1, setDataBl1] = useFetch(
    "https://www.openligadb.de/api/getbltable/bl1/2022"
  );

  const [dataDfb, setDataDfb] = useFetch(
    "https://www.openligadb.de/api/getmatchdata/dfb2022"
  );

  useEffect(() => {
    if (!dataDfb.isPending) {
      const { Team1, Team2, MatchResults, MatchDateTime, LeagueName } =
        dataDfb.data[3];

      setDfb(
        (prev) =>
          (prev = {
            ...prev,
            team1: Team1,
            team2: Team2,
            matchResults: MatchResults[0],
            matchDate: MatchDateTime,
            legueName: LeagueName,
          })
      );
    }
  }, [dataDfb]);

  const [dataCL, setDataCl] = useFetch(
    "https://www.openligadb.de/api/getmatchdata/uefacl22/2022"
  );

  return (
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

        <div className="infoDfb">
          <h4>
            <span>Runde 2: </span>
            {dfb?.matchDate?.slice(0, 10).split("-").reverse().join("-")}
          </h4>
          <div className="lastGame">
            <div>
              <img src={dfb?.team1?.TeamIconUrl} />
              {dfb?.team1?.TeamName}
            </div>
            {dfb?.matchResults?.PointsTeam1}
            <div>
              <img src={dfb?.team2?.TeamIconUrl} />
              {dfb?.team2?.TeamName}
            </div>
            {dfb?.matchResults?.PointsTeam2}
          </div>
        </div>
        <h4>Next Game</h4>
      </div>
      <div className="legue">
        <h3>Champions Legue</h3>
      </div>
      <div className="iconsRbl">
        <a href="https://twitter.com/RBLeipzig_EN" target="_blank">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/RBLeipzig/" target="_blank">
          <BsInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCkZwB4IGoNBvRmVT2gaO4XA"
          target="_blank"
        >
          <BsYoutube />
        </a>
        <a href="https://www.facebook.com/rbleipzig" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.tiktok.com/@rbleipzig" target="_blank">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
}
