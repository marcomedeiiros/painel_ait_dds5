import { aymar, createAula, deleteAula, updateAula, showOneAula } from "../models/AulaModel.js";
import { isNullOrEmpty, verificaAula } from "../validations/AulaValidation.js";

export async function criarAula(req, res) {
    console.log('AulaController criarAula');
    const aula = req.body;

    console.log(aula);

    if (verificaAula(aula)) {
        res.status(400).json({ message: 'Todas as propriedades devem ser preenhidas' });
    } else {

        try {

            const [status, resposta] = await createAula(aula);
            console.log(status, resposta)
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

export async function mostrarAulas(req, res) {
    console.log(aymar);
    try {
        const [status, resposta] = await aymar();
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function atualizarAulas(req, res) {
    console.log('AulaController atualizarAula');

    const aula = req.body;
    const { id } = req.params;

    if (verificaAula(aula) || isNullOrEmpty(id)) {
        res.status(400).json({ message: 'Todas as propriedades devem ser preenhidas' });
    } else {

        try {
            const [status, resposta] = await updateAula(aula, id);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

export async function excluirAula(req, res) {
    console.log('AulaController excluirAula');

    const { id } = req.params;

    if (isNullOrEmpty(id)) {
        res.status(400).json({ message: 'O id deve ser informado' });
    } else {

        try {
            const [status, resposta] = await deleteAula(id);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

}

export async function mostrarUmaAulas(req, res) {
    console.log('AulaController mostrarUmAula');

    const { id } = req.params;

    try {
        const [status, resposta] = await showOneAula(id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}