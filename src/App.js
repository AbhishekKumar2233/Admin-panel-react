import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Event from "./Components/Event";
import Results from "./Components/Results";
import Teams from "./Components/Teams";
import Analytics from "./Components/Analytics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/results" element={<Results />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
