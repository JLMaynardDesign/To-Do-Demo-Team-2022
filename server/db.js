const Pool = require("pg").Pool;

const pool = new Pool({
  user: "jaspersm1",
  password: "",
  host: "localhost",
  port: 5432,
  database: "makeshifttodo"
});

module.exports = pool;
