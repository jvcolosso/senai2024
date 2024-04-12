//Dependências - Frameworks
const con = require("../connect/connect").con;

// CRUD - Create
const create = (req, res) => {
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
const read = (req, res) => {
  con.query("SELECT * FROM item", (err, result) => {
      if(err)
          res.json(err);
      else
          res.json(result);
  });
}

// CRUD - Update
const update = (req, res) => {
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
const del = (req, res) => {
  let id = req.params.id;
  con.query(`DELETE FROM item WHERE id = '${id}`, (err, result) => {
      if(err)
          res.json(err);
          else {
            if (result.affectedRows > 0)
                res.status(204).json(result).end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });

}
module.exports = {
    create,
    read,
    update,
    del

};
