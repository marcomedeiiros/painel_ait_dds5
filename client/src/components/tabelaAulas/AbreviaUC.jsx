function AbreviaUC(props) {
    const { nome } = props;
    const nomes = nome.split(' ');

    if (nomes.length < 3) {
        return <span>{nome}</span>;
    }

    const primeiroNome = nomes[0];
    const antepenultimoNome = nomes[nomes.length - 3];

    return <span>{primeiroNome} {antepenultimoNome}</span>;
}

export default AbreviaUC;
