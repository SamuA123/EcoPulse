import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Vegetation from "./pages/Vegetation";
import Agriculture from "./pages/Agriculture";
import Phenology from "./pages/Phenology";
import Chatbot from "./pages/Chatbot"; // 👈 nuevo
import FloatingChatbot from "./components/FloatingChatbot";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/vegetation" element={<Vegetation />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/phenology" element={<Phenology />} />
          <Route path="/chatbot" element={<Chatbot />} /> {/* 👈 nueva ruta */}
        </Route>
      </Routes>
      <FloatingChatbot />
    </Router>
  );
}
