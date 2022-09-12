const express = require('express')
const app = express()
const port = 3001

const  customer_model = require('./customer_model')

app.use(express.json()) //Express can accept incoming requests with JSON payloads. 

app.use(function (req, res, next) { //To allow requests to this app from React
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
    customer_model.getCustomer()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  app.post('/customers', (req, res) => {
    customer_model.createCustomer(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  app.delete('/customers/:id', (req, res) => {
    customer_model.deleteCustomer(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})