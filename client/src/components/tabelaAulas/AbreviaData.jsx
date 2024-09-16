function AbreviaData(props) {
    const data = new Date(props.data);
    const hora = data.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit'})
    return (
        hora
    )
}

export default AbreviaData;