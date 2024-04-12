const db = require('../api/connect');

const Item = {
  getAll: (callback) => {
    db.query('SELECT * FROM item', callback);
  }
};

module.exports = Item;

const getAllItems = (req, res) => {

};
// Função para atualizar um item existente
const updateItem = (req, res) => {
  const id = req.params.id;
  const { nome, descricao, valor } = req.body;
  // Aqui você implementaria a lógica para atualizar o item no banco de dados
  // Substitua este console.log com a lógica real de atualização no banco de dados
  console.log(`Atualizando o item com ID ${id}`);
  console.log(`Novos dados: Nome: ${nome}, Descrição: ${descricao}, Valor: ${valor}`);
  res.send(`Item com ID ${id} atualizado com sucesso.`);
};

// Função para excluir um item existente
const deleteItem = (req, res) => {
  const id = req.params.id;
  // Aqui você implementaria a lógica para excluir o item do banco de dados
  // Substitua este console.log com a lógica real de exclusão no banco de dados
  console.log(`Excluindo o item com ID ${id}`);
  res.send(`Item com ID ${id} excluído com sucesso.`);
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};


