import { useEffect } from "react";
import "./App.scss";
import About from "./components/Left/About";
import Loading from "./components/Loading";
import Menu from "./components/Right/Menu";
import Home from "./components/Middle/Home";
import History from "./components/Middle/History";
import Contact from "./components/Middle/Contact";
import Projects from "./components/Middle/Projects";
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
