const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'bucketlist'
});

db.connect(err => {
  if (err) {
    console.log(`Error connecting to MySQL: ${err}`)
  } else {
    console.log(`Connected to MySQL!`)
  }
});

// get all items
const getAllItems = () => {
  const query = 'select * from list;'
  return new Promise((resolve, reject) => {
    db.query(query, (err, items) => {
      if (err) {
        reject(err);
      } else {
        resolve(items)
      }
    });
  });
};

const addItem = (data) => {
  var query = 'insert into list (category, item) values (?, ?);'
  var params = [data.category, data.item];
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, item) => {
      if (err) {
        reject(err)
      } else {
        resolve(item)
      }
    });
  });
};

const deleteItem = (data) => {
  var query = 'delete from list where item = ? and category = ?;'
  var params = [data.item, data.category];
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, item) => {
      if (err) {
        reject(err)
      } else {
        resolve(item)
      }
    });
  });
};

const updateItem = (data) => {
  var query = 'update list set completed = ? where item = ?;'
  var params = [!data.completed, data.item];
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, updatedItem) => {
      if (err) {
        reject(err)
      } else {
        resolve(updatedItem)
      }
    });
  });
};

module.exports = {
  getAllItems,
  addItem,
  deleteItem,
  updateItem
};
