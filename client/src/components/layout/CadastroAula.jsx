import Navbar from '../layout/Navbar'
import { useState } from 'react';
import FormAula from '../formAula/FormAula';

function CadastroAula() {

    async function cadastrarAula(infoAula) {
        try {
            const resposta = await fetch('http://localhost:5000/aulas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(infoAula)
            });

            if (!resposta.ok) {
                console.log('Erro ao cadastrar aula');
            } else {
                alert('Aula cadastrada com sucesso');
            }

        } catch (error) {
            console.error('Erro ao cadastrar Aula', error)
        }

    }

    return (
        <div>
            <Navbar />
            <FormAula titulo='Cadastrar Aula' textoBotao='Cadastrar' handleSubmit={cadastrarAula} />
        </div>
    )
}

export default CadastroAula