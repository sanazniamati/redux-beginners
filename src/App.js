import { Routes, Route } from "react-router-dom";
import "./App.css";
// components
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="mx-0 my-[40px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imbId" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
