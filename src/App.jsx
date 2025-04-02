import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NuevaCuriosidad from "./pages/NuevaCuriosidad";
import MisCuriosidades from "./pages/MisCuriosidades";
import './App.css'; 


export default function App() {
  return (
    <>
      <br/>
      <br/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nueva-curiosidad" element={<NuevaCuriosidad />} />
        <Route path="/mis-curiosidades" element={<MisCuriosidades />} />
      </Routes>
    </>
  );
}
