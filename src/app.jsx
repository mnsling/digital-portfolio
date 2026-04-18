import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Journey from "./pages/journey";
import Reflections from "./pages/reflections"; // Import the new page
import { Navbar } from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/reflections" element={<Reflections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;