const express = require('express');
const router = express.Router();
const item = require('../api/item.js');

router.get('/item', item.getAllItems);
router.get('/item/:id', item.getItemById);
router.post('/item', item.createItem);
router.put('/item/:id', item.updateItem); // Rota para atualizar um item
router.delete('/item/:id', item.deleteItem); // Rota para excluir um item

module.exports = router;
