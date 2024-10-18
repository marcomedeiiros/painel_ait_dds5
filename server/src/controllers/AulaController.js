import { aymar, createAula, deleteAula, updateAula } from "../models/AulaModel.js";

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
        res.status(500).json(error);                
    }
}

export async function atualizarAulas(req,res) {
    console.log('AulaController atualizarAula');    

    const aula = req.body;
    const {id} = req.params;

    try {
        const [ status,resposta ] = await updateAula(aula,id);  
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);                
    }    
}

export async function excluirAula(req,res) {
    console.log('AulaController excluirAula');
    
    const {id} = req.params;

    try {
        const [ status,resposta ] = await deleteAula(id);  
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);                
    }
    
}