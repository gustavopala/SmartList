import './App.css';
import { useLocation, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Landing from './vistas/Landing';
import Dashboard from './vistas/Dashboard';



function App() {

  return (
    <Routes>
        
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
  );
}


export default App;
