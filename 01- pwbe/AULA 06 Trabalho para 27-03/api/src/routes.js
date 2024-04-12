const express = require('express');
const router = express.Router();
const Item = require('./item');

// Simulação de banco de dados
let users = {
    'user1': {
        id: 'user1',
        name: 'Usuário 1',
        tasks: []
    },
    'user2': {
        id: 'user2',
        name: 'Usuário 2',
        tasks: []
    }
};

// Rota para criar uma nova tarefa
router.post('/tasks', (req, res) => {
    const { userId, description, dueDate, status } = req.body;
    const newItem = new Item(generateId(), description, dueDate, status, userId);
    users[userId].tasks.push(newItem);
    res.status(201).json(newItem);
});

// Rota para listar todas as tarefas de um usuário
router.get('/tasks/:userId', (req, res) => {
    const userId = req.params.userId;
    res.json(users[userId].tasks);
});

// Rota para atualizar uma tarefa
router.put('/tasks/:userId/:taskId', (req, res) => {
    const userId = req.params.userId;
    const taskId = req.params.taskId;
    const { description, dueDate, status } = req.body;
    const taskToUpdate = users[userId].tasks.find(task => task.id === taskId);
    if (!taskToUpdate) {
        return res.status(404).send('Tarefa não encontrada.');
    }
    taskToUpdate.updateDescription(description);
    taskToUpdate.updateDueDate(dueDate);
    taskToUpdate.updateStatus(status);
    res.send('Tarefa atualizada com sucesso.');
});

// Rota para excluir uma tarefa
router.delete('/tasks/:userId/:taskId', (req, res) => {
    const userId = req.params.userId;
    const taskId = req.params.taskId;
    const index = users[userId].tasks.findIndex(task => task.id === taskId);
    if (index === -1) {
        return res.status(404).send('Tarefa não encontrada.');
    }
    users[userId].tasks.splice(index, 1);
    res.send('Tarefa excluída com sucesso.');
});

// Função auxiliar para gerar IDs únicos para as tarefas
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

module.exports = router;
