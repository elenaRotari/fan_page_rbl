import "./OnlineShop.scss";
import shopList from "./shop.json";
import img from "../Left/assets/mainShop.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function OnlineShop() {
  const [listState, setListState] = useState({
    type: Object.keys(shopList),
    size: shopList.mens[0].size,
    selectedType: "",
    selectedSize: "",
  });

  const navigator = useNavigate();
  const handleImgClick = (id, type) => {
    navigator(`/details/${id}-${type}`);
  };
  const handleChangeType = (e) => {
    setListState((prev) => (prev = { ...prev, selectedType: e.target.value }));
  };
  const handleChangeSize = (e) => {
    setListState((prev) => (prev = { ...prev, selectedSize: e.target.value }));
  };

  return (
    <div>
      <div className="mainShopIMG">
        <img src={img} />
      </div>
      <h1 className="titleShop">Our Products</h1>
      <div className="Filter">
        Filter
        <select name="text" onChange={handleChangeType}>
          <option value={""}>Select Type</option>
          {listState.type.map((option) => (
            <option key={option.id} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select placeholder="Size" onChange={handleChangeSize}>
          <option value="">Select Size</option>
          {listState.size.map((el) => (
            <option key={el.id} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className="shopContainer">
        <ul className="shopList">
          {!listState.selectedType
            ? listState.type.map((el) =>
                shopList[el].map((list) => (
                  <li
                    key={list.id}
                    className="cardShop"
                    onClick={() => handleImgClick(list.id, el)}
                  >
                    <img
                      style={{
                        width: "250px",
                        borderRadius: "5px",
                      }}
                      className="imgShop"
                      src={list.images[0]}
                    />
                    <h3>{list.name}</h3>
                    <h4>€{list.price}</h4>
                  </li>
                ))
              )
            : shopList[listState.selectedType]
                .filter((el) =>
                  el.size.includes(
                    !listState.selectedSize ? "S" : listState.selectedSize
                  )
                )
                .map((list) => (
                  <li
                    key={list.id}
                    className="cardShop"
                    onClick={() =>
                      handleImgClick(list.id, listState.selectedType)
                    }
                  >
                    <img
                      style={{
                        width: "250px",
                        borderRadius: "5px",
                      }}
                      className="imgShop"
                      src={list.images[0]}
                    />
                    <h3>{list.name}</h3>
                    <h4>€{list.price}</h4>
                  </li>
                ))}
        </ul>
      </div>
    </div>
  );
}
