import "./Loading.scss";
import BarLoader from "react-spinners/BarLoader";

export default function Loading() {
  return (
    <div className="loading">
      <h1>Elena Rotari</h1>
      <BarLoader color="#fec135" height={2} speedMultiplier={1} width={400} />
      <p>loading...</p>
    </div>
  );
}
