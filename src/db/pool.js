const {Pool} = require("pg")

module.exports = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGROLE,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
})