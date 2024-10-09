import Navbar from './Navbar'
import { useState } from 'react';
import FormAula from '../formAula/FormAula';
import { useParams } from 'react-router-dom';

function EditAula() {
    const {id} = useParams();

    async function editAula( infoAula, id) {
        try {
            const resposta = await fetch (`http://localhost:5000/aulas/${id}`,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(infoAula)
            });
            if(!resposta.ok){
                const resposta = await resposta.json();
                console.log("Erro ao editar aula", resposta);
            }
            else{
                console.log("Aula editada");
               // alert("Aula editada com sucesso");
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <div>
            <Navbar />
            <FormAula titulo='Editar Aula' textoBotao='Salvar' id={id} handleSubmit={ editAula } tipo='editada'/>
        </div>
    )
}

export default EditAula;