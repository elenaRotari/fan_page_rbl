import { useParams } from "react-router-dom";
import showList from "../Middle/shop.json";
export default function ShowDetails() {
  const { id, type } = useParams();

  return (
    <div style={{ color: "white" }}>
      {showList[type].find((el) => el.id === +id).name}
    </div>
  );
}
