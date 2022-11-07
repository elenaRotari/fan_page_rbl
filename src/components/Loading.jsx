import "./Loading.scss";
import BarLoader from "react-spinners/BarLoader";

export default function Loading({ loading }) {
  return (
    <div className="loading">
      <h1>Welcome</h1>
      <BarLoader
        color="#fec135"
        height={2}
        speedMultiplier={1}
        width={400}
        loading
      />
      <p>loading...</p>
    </div>
  );
}
