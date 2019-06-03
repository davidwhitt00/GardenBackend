require('dotenv').config()
module.exports = {
  development: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.User,
    password: process.env.Password,
    database: process.env.Database,
    host: process.env.Host,
    dialect: 'postgres'
  }
}
