const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000,()=>{
    console.log("Back-end respondendo na porta 3000");
});