import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TicketView from "./pages/TicketView";
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<TicketView/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
