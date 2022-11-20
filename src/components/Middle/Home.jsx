import "./Home.scss";
import img from "../Left/assets/mainNk.png";

export default function Home() {
  return (
    <div className="homeContainer">
      <img className="mainImg" src={img} alt="nkunku" />
    </div>
  );
}
