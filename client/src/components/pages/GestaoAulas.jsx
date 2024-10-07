import React from 'react';
import Navbar from '../layout/Navbar';
import TabelaAulas from '../tabelaAulas/TabelaAulas';
import { Link } from 'react-router-dom';

function GestaoAulas() {
  return (
    <>
      <Navbar />


      <div className='container'>
        <h1 className='text-center mt-3'>Gestão de Aulas</h1>
        <div className='col-12 text-end my-2'>
        <Link to='/cadastro_aula' className='btn btn-primary ms-auto'>Cadastro aula</Link>
        </div>
        <TabelaAulas tipo='edit' />
      </div>
    </>
  )
}

export default GestaoAulas;