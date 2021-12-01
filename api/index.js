const express = require('express')
const cors = require('cors')
const ToDo = require('./db')
const app = express()
const port = 4000

app.use(cors())
app.use(express.json()) // for parsing application/json

app.get('/todo', (req, res) => {
  ToDo
    .getAll(req.query.list)
    .then((list) => res.json(list))
})

app.post('/todo', (req, res) => {
  ToDo
    .create(req.body)
    .then(ToDo.get)
    .then((data) => res.json(data))
})

app.delete('/todo', (req, res) => {
  ToDo
    .deleteAll(req.query.list)
    .then(() => res.json([]))
})

app.get('/todo/:id', (req, res) => {
  ToDo
    .get(req.params.id)
    .then((data) => res.json(data))
})

app.post('/todo/:id', (req, res) => {
  ToDo
    .update(req.params.id, req.body)
    .then(ToDo.get)
    .then((data) => res.json(data))
})

app.delete('/todo/:id', (req, res) => {
  ToDo
    .delete(req.params.id)
    .then(() => res.json(null))
})

app.listen(port, () => {
  console.log(`ToDo api listening at http://localhost:${port}`)
})
