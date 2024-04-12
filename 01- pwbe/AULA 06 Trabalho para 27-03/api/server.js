const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para fazer o parse do corpo das requisições
app.use(bodyParser.json());

// Middleware para lidar com as rotas
app.use('/api', routes);

// Rota padrão para verificar se o servidor está rodando
app.get('/', (req, res) => {
    res.send('Servidor do Sistema de Gerenciamento de Tarefas está rodando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
