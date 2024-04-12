const express = require('express');
const app = express();
const routes = require('./routes.js');

app.use(express.static('public'));
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
