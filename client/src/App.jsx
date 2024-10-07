import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import GestaoUsuario from './components/pages/GestaoUsuario';
import ImportCSV from './components/pages/ImportCSV';
import CadastroAula from './components/layout/CadastroAula';
import GestaoAulas from './components/pages/GestaoAulas';
import EditAula from './components/layout/EditAula';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/gestao_usuario' element={<GestaoUsuario />} />
        <Route path='/import_csv' element={<ImportCSV />} />
        <Route path='/cadastro_aula' element={<CadastroAula />} />
        <Route path='/gestao_aulas' element={<GestaoAulas />} />
        <Route path='/edit_aula/:id' element={<EditAula />} />
      </Routes>
    </Router>
  );
}

export default App;