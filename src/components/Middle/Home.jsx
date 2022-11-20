import "./Home.scss";
import data from "../Left/assets/svGNkunku.png";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="img">
        <img
          className="mainImg"
          style={{ opacity: "100%", width: "110%" }}
          src={data}
        />
      </div>
    </div>
  );
}
