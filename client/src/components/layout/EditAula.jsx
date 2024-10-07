import Navbar from './Navbar'
import { useState } from 'react';
import FormAula from '../formAula/FormAula';

function EditAula() {
    return (
        <div>
            <Navbar />
            <FormAula titulo='Editar Aula' textoBotao='Salvar' />
        </div>
    )
}

export default EditAula;