import React from 'react';
import Navbar from '../layout/Navbar';
import TabelaAulas from '../tabelaAulas/TabelaAulas';

function GestaoAulas() {
  return (
    <>
      <Navbar />

      <div className='container'>
        <h1>Gestão de Aulas</h1>
        <TabelaAulas tipo='edit' />
      </div>
    </>
  )
}

export default GestaoAulas;