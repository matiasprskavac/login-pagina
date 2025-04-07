const mysql = require("mysql2");
const util = require("util");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "sitio-integrador",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

pool.query = util.promisify(pool.query);

module.exports = pool;