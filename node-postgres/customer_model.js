const Pool = require('pg').Pool
const pool = new Pool({
  user: 'iza',
  host: 'localhost',
  database: 'serviceporumbeni',
  password: 'root',
  port: 5432,
});

const getCustomer = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM customers ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  const createCustomer = (body) => {
    return new Promise(function(resolve, reject) {
      
      const {name, cnpcui,address,phone } = body
      pool.query('INSERT INTO customers (name,cnpcui,address,phone ) VALUES ($1, $2, $3, $4) RETURNING *', [name,cnpcui,address,phone ], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new customer has been successfully added`)
      })
    })
  }
  const deleteCustomer = (id) => {
    return new Promise(function(resolve, reject) {
      pool.query('DELETE FROM customers WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Customer deleted with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getCustomer,
    createCustomer,
    deleteCustomer
  }