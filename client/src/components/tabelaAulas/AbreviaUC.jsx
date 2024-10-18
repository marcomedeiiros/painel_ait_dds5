
function AbreviaUC(props) {
    const unidSplit = props.data.split(' ');
    let unidUm = unidSplit.splice(0,1);
    unidUm = String(unidUm);

    let unidUmForm = unidUm.substring(0,4) + '. ';
    
    let array = unidSplit.splice(0,3);
    if (array[0] === 'DE') {
        return unidUmForm+array[0]+' '+array[1];
    } else {
        return unidUmForm+array[0];
    };
}

export default AbreviaUC