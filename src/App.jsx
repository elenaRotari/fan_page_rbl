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

function App() {
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator("/page/home");
    }, 1500);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="page" element={<MiddleContainer />}>
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="history" element={<History />} />
          <Route path="contacts" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
