import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Vegetation from "./pages/Vegetation";
import Agriculture from "./pages/Agriculture";
import Phenology from "./pages/Phenology";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vegetation" element={<Vegetation />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/phenology" element={<Phenology />} />
        </Route>
      </Routes>
    </Router>
  );
}
