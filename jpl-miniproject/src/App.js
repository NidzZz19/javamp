import "./App.css";
import { Route, Routes } from "react-router-dom";

import Auth from "./components/Authentication/Auth";
import Home from "./components/HomePage/Home.jsx";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={true ? <Home /> : <Auth />} />
      </Routes>
    </div>
  );
}

export default App;
