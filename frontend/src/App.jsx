// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProjectLayout from "./layouts/ProjectLayout";
import Home from "./pages/Home";
import VistaProyecto from "./pages/VistaProyecto";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<ProjectLayout />}>
          <Route path="/proyecto/:id" element={<VistaProyecto />} />
        </Route>
      </Routes>
    
  );
}

export default App;
