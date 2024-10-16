import { createAula } from "../models/AulaModel.js";

export async function criarAula(req,res) {
    console.log('AulaController criarAula');
    const aula = req.body;

    try {
        const [status,resposta] = await createAula(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}

export async function mostrarAulas(req,res){
    return res.status(200).json(
        [
            {
                "id": "1300",
                "data": "2024-08-29T03:00:00.000Z",
                "data_hora_inicio": "2024-08-29T21:00:00.000Z",
                "data_hora_fim": "2024-08-30T01:00:00.000Z",
                "turma": "EMP-NBM-03",
                "instrutor": "JOEL HERBERT BARBOSA SILVA",
                "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
                "ambiente": "VTRIA-3-SALA-3004",
                "chave": null
              }
        ]
    );
}