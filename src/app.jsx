import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Reflections from "./pages/Reflections"; // Import the new page
import { Navbar } from "./components/Navbar";

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