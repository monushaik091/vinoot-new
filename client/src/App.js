
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Reception/sidebar';
import NotFound from './pages/NotFound';

import RegisterPage from './MasterLogin/RegisterPage';
import LoginPage from './MasterLogin/LoginPage';


function App() {
  return (
   
    <Router>
    <Routes>
 
    <Route path="/reg" element={<RegisterPage/>}/>
    <Route path="/" element={<LoginPage/>}/>

      
    
  
      <Route path="/Sidebar" element={<Sidebar/>}/>

      
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>

  );
}

export default App;
