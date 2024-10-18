import mysql from 'mysql2/promise';
import db from '../conexao.js';


const conexao = mysql.createPool(db);

export async function aymar(aula) {
    console.log("mostrando aula:", aula);
    const sql = `SELECT * FROM aulas`;

    try {
        const [rows] = await conexao.query(sql);
        console.log('Aulas lidas:', rows);
        return [200, rows];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}
export async function createAula(aula) {
    console.log("Modelo Aula:", aula);    
    const sql = `INSERT INTO aulas (
    date,
    horaInicio,
    horaFim,
    turma,
    instrutor,
    uniCurricular,
    ambiente    
    )
    VALUES (?,?,?,?,?,?,?)`;

    const params = [
        aula.date,
        aula.horaInicio,
        aula.horaFim,
        aula.turma,
        aula.instrutor,
        aula.uniCurricular,
        aula.ambiente
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Aula Cadastrada', retorno);
        return [201, 'Aula Cadastrada', retorno];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
} 

export async function updateAula(aula,id) {
    const conexao = mysql.createPool(db);
    console.log("Entrando no model Aula");
    const sql = `UPDATE aulas SET
    date = ?,
    horaInicio = ?,
    horaFim = ?,
    turma = ?,
    instrutor = ?,
    uniCurricular = ?,
    ambiente = ? 
    WHERE idpainel = ?
    `   

    const params = [
        aula.date,
        aula.horaInicio,
        aula.horaFim,
        aula.turma,
        aula.instrutor,
        aula.uniCurricular,
        aula.ambiente,
        id
    ];

    try {
        const [rows] = await conexao.query(sql, params);
        console.log('Atualizando aula');
        return [200, rows];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function deleteAula(id) {
    const conexao = mysql.createPool(db);

    console.log('deletando aula');

    const sql = `DELETE FROM aulas WHERE idpainel = ?`;

    const params = [id];

    try {
        const [rows] = await conexao.query(sql, params);
        console.log('Deletando aula');
        return [200, rows];
    } catch (error) {
        console.log(error);
        return [500, error];
    }

}