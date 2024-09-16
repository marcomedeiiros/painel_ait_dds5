import { useEffect, useState } from "react";
import AbreviaData from "./AbreviaData";
import AbreviaUC from "./AbreviaUC";
import AbreviaInstrutor from "./AbreviaInstrutor";

function TabelaAulas() {
    const [aulas, setAulas] = useState([]);

    useEffect(() => {
        baixarAulas();
    }, [])

    async function baixarAulas() {
        try {
            const resposta = await fetch('http://localhost:5000/aulas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!resposta) {
                throw new Error('Erro ao buscar aulas');
            }
            const consulta = await resposta.json();
            setAulas(consulta);
        } catch (error) {
            console.log('Error ao consultar aulas', error)
        }
    }
    return (
        <div>
            <thead>
                <tr>
                    <th>Inicio</th>
                    <th>Fim</th>
                    <th>Turma</th>
                    <th>Instrutor</th>
                    <th>Unidade Curricular</th>
                    <th>Ambiente</th>
                </tr>
            </thead>
            <tbody>
                {aulas.map((aula) => (
                    <tr key={aula.id}>
                        <td><AbreviaData data={aula.data_hora_inicio} /></td>
                        <td><AbreviaData data={aula.data_hora_fim} /></td>
                        <td>{aula.turma}</td>
                        <td><AbreviaInstrutor nome={aula.instrutor} /></td>
                        <td><AbreviaUC nome={aula.unidade_curricular}  /></td>
                        <td>{aula.ambiente}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    )
}

export default TabelaAulas