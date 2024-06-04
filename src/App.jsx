import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Motive from "./pages/Motive.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/motive" element={<Motive />} />
      </Routes>
    </Router>
  );
}

export default App;
