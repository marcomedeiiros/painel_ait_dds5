import { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import TabelaAulas from '../tabelaAulas/TabelaAulas';
import { Link, useParams } from 'react-router-dom';

function GestaoAulas() {
  const { tipo } = useParams();
  const[ exibeAlert,setExibeAlerta ] = useState(false);
  const[ typemessage,setTypeMensagem ] = useState(tipo);
  const[ classeMensagem,setClasseMensagem ] = useState('');
  const[ textoMensagem,setTextoMensagem ] = useState('');

  useEffect(()=>{ 
    if(typemessage){
      setExibeAlerta(true);
      atualizaMensagem();
      setTimeout(()=>{
        setExibeAlerta(false);
      },500);
    }
  },[typemessage]);

  function mensagemDelete(){
    setTypeMensagem('delete');
  }

  function atualizaMensagem(){
    switch(typemessage){
      case 'cadastrada':
      setClasseMensagem('alert alert-sucess');
      setTextoMensagem('Aula Cadastrada');
      break;
      case 'deletada':
      setClasseMensagem('alert alert-danger');
      setTextoMensagem('Aula deletada');
      break;
      case 'editada':
      setClasseMensagem('alert alert-primary');
      setTextoMensagem('Aula editada');
      break;
    }
  }

  return (
    <>
      <Navbar />


      <div className='container'>
        <h1 className='text-center mt-3'>Gestão de Aulas</h1>
       { exibeAlert &&  <div className={classeMensagem}>{textoMensagem}</div>}
        <div className='col-12 text-end my-2'>
        <Link to='/cadastro_aula' className='btn btn-primary ms-auto'>Cadastro aula</Link>
        </div>
        <TabelaAulas tipo='edit' onDeleteSuccess={mensagemDelete} />
      </div>
    </>
  )
}

export default GestaoAulas;