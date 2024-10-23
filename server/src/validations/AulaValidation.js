const propriedades = [
    'date',
    'horaInicio',
    'horaFim',
    'turma',
    'instrutor',
    'uniCurricular',
    'ambiente'
];


export function isNullOrEmpty(valor) {
    return valor === null || valor === '' || valor === undefined;
};

export function verificaAula(aula) {    
        return propriedades.some(prop=>isNullOrEmpty(aula[prop]));    
}