const mysql =  require('mysql'); 

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'transportadora',
    database: 'test'
});

module.exports = con;