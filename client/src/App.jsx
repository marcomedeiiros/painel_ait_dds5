import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
function App() {
  return (
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/Login' element={<Login/>} />              
          </Routes>
        </Router> 
  );
}

export default App;