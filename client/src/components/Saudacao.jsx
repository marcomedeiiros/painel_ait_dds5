import { useEffect, useState } from "react";
function Saudacao(){
    const [saudacaoPeriodo, setSaudacaoPeriodo] = useState('');
    useEffect(()=>{
        atualizaSaudacao();
        const intervalo = setInterval(atualizaSaudacao,1000);
        return ()=>{
            clearInterval(intervalo);
        }
    },[])
    // criando texto da saudação do cabeçalho
    function atualizaSaudacao(){
        const agora = new Date();
        // obtendo hora em inteiro exemplo 07:35:00 retorna 7
        const hora = agora.getHours();
        // obtendo dia da semana em inteiro iniciando em domingo que retorna 0 e sabado que retorna 6
        const dia = agora.getDay();
        // declarando variavel do texto da saudação
        let textoSaudacao = '';
        // definindo array com dias da semana
        const diaSemana = [
            'Domingo',
            'Segunda-Feira',
            'Terça-Feira',
            'Quarta-Feira',
            'Quinta-Feira',
            'Sexta-Feira',
            'Sabado'
        ];
        // adicionando o dia da semana ao textoSaudacao
        textoSaudacao += diaSemana[dia];
        // adicionando saudacao ao textosaudacao
        if(hora>=18){
            textoSaudacao += ' Boa Noite';
        }else if(hora>=12){
            textoSaudacao += ' Boa Tarde';
        }else{
            textoSaudacao += ' Bom dia';
        }
        // chamando função de atribuicao
        setSaudacaoPeriodo(textoSaudacao);
    }
    
    return(
        <div>{saudacaoPeriodo}</div>
    )
}

export default Saudacao;