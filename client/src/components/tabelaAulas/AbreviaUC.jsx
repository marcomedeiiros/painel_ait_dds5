function AbreviaUC(props) {
    const { nome } = props;
    const nomes = nome.split(' ');

    if (nomes.length < 2) {
     
        return <span>{nome}</span>;
    }

    const primeiroNome = nomes[0];
    const segundoNome = nomes[1];

    return <span>{primeiroNome} {segundoNome}</span>;
}

export default AbreviaUC;