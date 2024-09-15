import "./App.css";
import Home from "./components/Home";
import Tailor from "./components/Tailor";
import CarZone from "./components/CarZone";
import Influexa from "./components/Influexa";
import Mosto from "./components/Mosto";
import SpinFulence from "./components/SpinFulence";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/tailor" element={<Tailor/>}></Route>
      <Route path="/carzone" element={<CarZone/>}></Route>
      <Route path="/influexa" element={<Influexa/>}></Route>
      <Route path="/mosto" element={<Mosto/>}></Route>
      <Route path="/spinfulence" element={<SpinFulence/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
