import React from 'react';

function AbreviaAmbiente(props) {
    const { ambiente } = props;
    

    if (!ambiente || typeof ambiente !== 'string') {
        return 
    }

    const partes = ambiente.trim().split('-');

    const partesReduzidas = partes.slice(1);
    partesReduzidas.join('-')
    

   
    if (partesReduzidas.length < 2) {
        return <span>{ambiente}</span>;  
    }


    const ultimoNome = partesReduzidas[partesReduzidas.length - 1];
    const penultimoNome = partesReduzidas[partesReduzidas.length - 2];

    return <span>{penultimoNome} {ultimoNome}</span>;
}

export default AbreviaAmbiente;
