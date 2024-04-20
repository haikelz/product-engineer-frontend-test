import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import VersionOne from "./pages/v1";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v1" element={<VersionOne />} />
      </Routes>
    </BrowserRouter>
  );
}
