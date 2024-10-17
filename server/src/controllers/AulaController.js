import { aymar, createAula } from "../models/AulaModel.js";

export async function criarAula(req,res) {
    console.log('AulaController criarAula');
    const aula = req.body;

    console.log(aula);

    try {
        const [status,resposta] = await createAula(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}

export async function mostrarAulas(req,res){
    console.log(aymar);
    try {
        const [ status,resposta ] = await aymar();  
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.aymar1(500).json(error);                
    }
}