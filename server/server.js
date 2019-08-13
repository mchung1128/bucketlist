const express = require('express');
const PORT = 3000;
const db = require('../db/db.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());
app.use(express.static('client/dist'));

app.get('/list', (req, res) => {
  db.getAllItems()
    .then(data => res.send(data))
    .catch(err => console.log(`Error getting items: ${err}`))
});

app.post('/list', (req, res) => {
  var data = req.body;
  db.addItem(data)
    .then(item => res.status(200).send(data).end())
    .catch(err => console.log(`Error adding item: ${err}`))
});

app.put('/list', (req, res) => {
  var data = req.body;
  db.updateItem(data)
    .then(item => res.status(200).send(item).end())
    .catch(err => console.log(`Error updating item: ${err}`))
});

app.delete('/list', (req, res) => {
  var data = req.body;
  db.deleteItem(data)
    .then((item) => res.status(200).send(item).end())
    .catch(err => console.log(`Error deleting item: ${err}`))
});

app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
