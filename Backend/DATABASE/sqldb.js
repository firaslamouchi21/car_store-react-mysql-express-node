const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'car_store'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
  } else {
    console.log('el datbase jawha fsfs');
  }
});



function createCar(carData, callback) {
  const sql = 'INSERT INTO cars SET ?';
  connection.query(sql, carData, callback);
}

function getAllCars(callback) {
  const sql = 'SELECT * FROM cars';
  connection.query(sql, callback);
}

function getCarById(carId, callback) {
  const sql = 'SELECT * FROM cars WHERE id = ?';
  connection.query(sql, [carId], callback);
}

function updateCarById(carId, newData, callback) {
  const sql = 'UPDATE cars SET ? WHERE id = ?';
  connection.query(sql, [newData, carId], callback);
}

function deleteCarById(carId, callback) {
  const sql = 'DELETE FROM cars WHERE id = ?';
  connection.query(sql, [carId], callback);
}

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCarById,
  deleteCarById
};
