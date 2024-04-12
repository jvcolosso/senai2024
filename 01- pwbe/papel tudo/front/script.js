// Dependências - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

// Conexão com o SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'inventario'
});

// Rota de teste
const teste = (req, res) => {
    res.send("Back-end respondendo");
}

// CRUD - Create
const createItem = (req, res) => {
    let id = req.body.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;
    let query = `INSERT INTO item(id, nome, descricao, valor) VALUES('${id}', '${nome}', '${descricao}', ${valor})`;
    con.query(query, (err, result) => {
        if(err)
            res.json(err);
        else
            res.redirect("/");
    });
}

// CRUD - Read
const readItems = (req, res) => {
    con.query("SELECT * FROM item", (err, result) => {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

// CRUD - Update
const updateItem = (req, res) => {
    let id = req.params.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;
    let query = `UPDATE item SET nome = '${nome}', descricao = '${descricao}', valor = ${valor} WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err)
            res.json(err);
        else
            res.json({ message: `Item com ID ${id} atualizado com sucesso` });
    });
}

// CRUD - Delete
const deleteItem = (req, res) => {
    let id = req.params.id;
    let query = `DELETE FROM item WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err)
            res.json(err);
        else
            res.json({ message: `Item com ID ${id} excluído com sucesso` });
    });
}

// Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas de Saída - FrontEnd
app.get("/", teste);
app.post("/items", createItem);
app.get("/items", readItems);
app.put("/items/:id", updateItem); // Rota para atualização de um item
app.delete("/items/:id", deleteItem); // Rota para exclusão de um item

// Teste e porta no console
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});
