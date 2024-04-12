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

// Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas de Saída - FrontEnd
//Rotas de Saída - Clientes
router.get("/", teste);
router.post("/item", item.create);
router.get("/item", item.read);
router.put("/item:id", item.update); // Editar Cliente
router.delete("/item/:id", item.del); //Exluir Cliente

// Teste e porta no console
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});
