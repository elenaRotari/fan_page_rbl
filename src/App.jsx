import { useEffect, useState } from "react";
import "./App.scss";
import Loading from "./components/Loading";
import { Routes, Route, useNavigate } from "react-router-dom";
import MiddleContainer from "./components/Middle/MiddleContainer";
import Page404 from "./components/Page404";
import useFetch from "./useFetch";

function App() {
  const [data, setData] = useFetch(
    "https://api.openligadb.de/getmatchdata/bl1"
  );
  console.log(data, setData);
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator("/home");
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route
          path=":page"
          element={
            !data.isPending && <MiddleContainer data={data} setData={setData} />
          }
        ></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
