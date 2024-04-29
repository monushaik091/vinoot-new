
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Reception/sidebar';
import NotFound from './pages/NotFound';
import PrivateRoute from './MasterLogin/PrivateRoute';
import RegisterPage from './MasterLogin/RegisterPage';
import LoginPage from './MasterLogin/LoginPage';
import MasterUserT from './MasterLogin/MasterUserT';
import LoginForm from './Login/LoginForm';

function App() {
  return (
   
    <Router>
    <Routes>
 
    <Route path="/reg" element={<RegisterPage/>}/>
    {/* <Route path="/" element={<LoginPage/>}/> */}
    <Route path="/" element={<LoginForm/>}/>
      
    <Route element={<PrivateRoute/>}>
  
      <Route path="/Sidebar" element={<Sidebar/>}/>
      <Route path="/MasterUsert" element={<MasterUserT/>}/>

</Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>

  );
}

export default App;
