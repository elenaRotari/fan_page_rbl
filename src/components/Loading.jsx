import "./Loading.scss";
import BarLoader from "react-spinners/BarLoader";

export default function Loading() {
  return (
    <div className="loading">
      <h1>Elena Rotari</h1>
      <h2>RBL</h2>
      <h3>Fan Club</h3>
      <BarLoader color="white" height={2} speedMultiplier={1} width={400} />
      <p>loading...</p>
    </div>
  );
}
