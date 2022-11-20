import "./Home.scss";
import data from "../Left/assets/mainNk.png";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="img">
        <img className="mainImg" src={data} />
      </div>
    </div>
  );
}
