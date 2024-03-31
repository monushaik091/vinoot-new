
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Reception/sidebar';
function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route  path="/" element={<Sidebar />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
