import { useEffect, useState } from "react";
import "./App.scss";
import Loading from "./components/Loading";
import { Routes, Route, useNavigate } from "react-router-dom";
import MiddleContainer from "./components/Middle/MiddleContainer";
import Page404 from "./components/Page404";

function App() {
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

        <Route path=":page" element={<MiddleContainer />}></Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
