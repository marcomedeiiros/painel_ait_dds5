function AbreviaInstrutor(props) {
    const nomeCompleto = props.nome; 
    const nomes = nomeCompleto.split(' '); 
    if (nomes.length === 1) {
     
        return nomes[0];
    }
    const inicialDoPrimeiroNome = nomes[0] + '.';
    const sobrenome = nomes[nomes.length - 1]; 
    return `${inicialDoPrimeiroNome} ${sobrenome}`;
}

export default AbreviaInstrutor;