import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FormAula({ titulo, textoBotao,handleSubmit,id,tipo}) {
    const navigate = useNavigate();

    const [dataAula, setDataAula] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFim, setHoraFim] = useState('');
    const [turma, setTurma] = useState('');
    const [instrutor, setInstrutor] = useState('');
    const [uniCurricular, setUnidadeCurricular] = useState('');
    const [ambiente, setAmbiente] = useState('');
    
    useEffect(()=>{
        if(id){
            console.log(id)
            baixarAula(id);
        }
    },[]);

    async function baixarAula (id){
        try {
            const resposta = await fetch(`http://localhost:5000/aulas/${id}`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })

            if (!resposta.ok) {
                throw new Error('Erro ao buscar aula');
            }else{
                const respostaJSON = await resposta.json();
                console.log(respostaJSON);
                setTurma(respostaJSON.turma);
                setInstrutor(respostaJSON.instrutor);
                setUnidadeCurricular(respostaJSON.unidade_curricular);
                setAmbiente(respostaJSON.ambiente);
            }
        } catch (error) {
            console.log(error)
        }
    }

    function submit(e){
        e.preventDefault();
        const aula = {
            data:dataAula,
            data_hora_inicio:`${dataAula} ${horaInicio}`,
            data_hora_fim:`${dataAula} ${horaFim}`,
            turma:turma,
            instrutor:instrutor,
            unidade_curricular:uniCurricular,
            ambiente:ambiente,
            chave:null
        }    
        handleSubmit(aula,id);
        navigate(`/gestao_aulas/${tipo}`);
    }

    return (
        <>
            <div className='container col-sm-12 col-md-6 col-lg-3 mt-3'>
                <h2 className="text-center">{titulo}</h2>
                <form onSubmit={submit}>
                    <label className='form-label' htmlFor="">Data:</label>
                    <input
                        className='form-control'
                        type="date"
                        name=""
                        id=""
                        value={dataAula}
                        onChange={(e) => (setDataAula(e.target.value))}
                    />

                    <label className='form-label' htmlFor="">Hora Inicio:</label>
                    <input
                        className='form-control'
                        type="time"
                        name=""
                        id=""
                        value={horaInicio}
                        onChange={(e) => (setHoraInicio(e.target.value))}
                    />

                    <label className='form-label' htmlFor="">Hora Fim:</label>
                    <input
                        className='form-control'
                        type="time"
                        name=""
                        id=""
                        value={horaFim}
                        onChange={(e) => (setHoraFim(e.target.value))}
                    />

                    <label className='form-label' htmlFor="">Turma:</label>
                    <input
                        className='form-control'
                        type="text"
                        name=""
                        id=""
                        value={turma}
                        onChange={(e) => (setTurma(e.target.value))}
                    />

                    <label className='form-label' htmlFor="">Instrutor:</label>
                    <input
                        className='form-control'
                        type="text"
                        name=""
                        id=""
                        value={instrutor}
                        onChange={(e) => (setInstrutor(e.target.value))}
                    />

                    <label className='form-label' htmlFor="">Unidade Curricular:</label>
                    <input
                        className='form-control'
                        type="text"
                        name=""
                        id=""
                        value={uniCurricular}
                        onChange={(e) => (setUnidadeCurricular(e.target.value))}
                    />

                    <label className='form-label' htmlFor="">Ambiente:</label>
                    <input
                        className='form-control'
                        type="text"
                        name=""
                        id=""
                        value={ambiente}
                        onChange={(e) => setAmbiente(e.target.value)}
                    />

                    <a className='btn btn-danger mt-3 float-start' href="">Cancelar</a>
                    <button className='btn btn-success mt-3 float-end' type='submit' >{textoBotao}</button>
                </form>
            </div>
        </>
    )
}

export default FormAula