//importando express
import express from 'express';

// importando cors
import cors from 'cors';

 //importando funções metodo controller
import { mostrarAulas,criarAula } from './controllers/AulaController.js';


//chamando função express
const app = express();
const porta = 5000;


app.use(cors());

app.get('/',(req,res)=>{
    res.send('Teste de API funcionando')
});


// rotas de aulas
app.post('/aulas',criarAula);
app.get('/aulas',mostrarAulas);

//iniciando API e exibindo mensagem no console com a porta
app.listen(porta,()=>{
    console.log(`API Rodando na porta ${porta}`)
});
