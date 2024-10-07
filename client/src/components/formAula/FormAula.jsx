import { useState } from 'react'
import Navbar from '../layout/Navbar';


function FormAula({ titulo, textoBotao, handleSubmit }) {
    const [dataAula, setDataAula] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFim, setHoraFim] = useState('');
    const [turma, setTurma] = useState('');
    const [instrutor, setInstrutor] = useState('');
    const [unidadeCurricular, setUnidadeCurricular] = useState('');
    const [ambiente, setAmbiente] = useState('');

    // const [aula, setAula] =useState({});

    function submit(e) {
        e.preventDefault();
        
        const aula = {
            data: dataAula,
            data_hora_inicio: horaInicio,
            data_hora_fim: horaFim,
            turma: turma,
            instrutor: instrutor,
            unidade_curricular: unidadeCurricular,
            ambiente: ambiente,
            chave: null
        }
        handleSubmit(aula);
    }

    return (
        <>
            <div className='container col-sm-12 col-md-6 col-lg-3 mt-3'>
                <h2 className='text-center'>{titulo}</h2>
                <form onSubmit={submit}>
                    <label className='form-label' htmlFor="">Data:</label>
                    <input className='form-control' type="date" name="" id="" value={dataAula} onChange={(e) => (setDataAula(e.target.value))} />

                    <label className='form-label' htmlFor="">Hora Inicio:</label>
                    <input className='form-control' type="time" name="" id="" value={horaInicio} onChange={(e) => (setHoraInicio(e.target.value))} />

                    <label className='form-label' htmlFor="">Hora Fim:</label>
                    <input className='form-control' type="time" name="" id="" value={horaFim} onChange={(e) => (setHoraFim(e.target.value))} />

                    <label className='form-label' htmlFor="">Turma:</label>
                    <input className='form-control' type="text" name="" id="" value={turma} onChange={(e) => (setTurma(e.target.value))} />

                    <label className='form-label' htmlFor="">Instrutor:</label>
                    <input className='form-control' type="text" name="" id="" value={instrutor} onChange={(e) => (setInstrutor(e.target.value))} />

                    <label className='form-label' htmlFor="">Unidade Curricular:</label>
                    <input className='form-control' type="text" name="" id="" value={unidadeCurricular} onChange={(e) => (setUnidadeCurricular(e.target.value))} />

                    <label className='form-label' htmlFor="">Ambiente:</label>
                    <input className='form-control' type="text" name="" id="" value={ambiente} onChange={(e) => (setAmbiente(e.target.value))} />

                    <a className='btn btn-danger mt-3 float-start' href="">Cancelar</a>
                    <button className='btn btn-success mt-3 float-end' type='submit'>{textoBotao}</button>
                </form>
            </div>
        </>
    )
}

export default FormAula