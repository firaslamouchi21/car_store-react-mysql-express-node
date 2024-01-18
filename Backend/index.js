const express = require('express');
const cors = require('cors');
const db = require('./DATABASE/sqldb.js');

const app = express();
const port = 4657;

app.use(cors());
app.use(express.json());

app.get('/cars', async (req, res) => {
  try {
    const results = await db.getAllCars((err, cars) => {
      if (err) {
        console.error('Error fetching all cars:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(cars);
      }
    });
  } catch (error) {
    console.error('Error fetching all cars:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/cars', (req, res) => {
  db.createCar(req.body, (err, results) => {
    if (err) {
      console.error('Error creating car:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'Car created successfully', carId: results.insertId });
    }
  });
});

app.get('/cars/:id', (req, res) => {
  const carId = req.params.id;
  db.getCarById(carId, (err, results) => {
    if (err) {
      console.error('Error querying car by ID:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Car not found' });
    } else {
      res.json(results[0]);
    }
  });
});

app.put('/cars/:id', (req, res) => {
  const carId = req.params.id;
  db.updateCarById(carId, req.body, (err) => {
    if (err) {
      console.error('Error updating car:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Car updated successfully' });
    }
  });
});

app.delete('/cars/:id', (req, res) => {
  const carId = req.params.id;
  db.deleteCarById(carId, (err, results) => {
    if (err) {
      console.error('Error deleting car:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Car not found' });
    } else {
      res.json({ message: 'Car deleted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`el serveur ye5dem 3al ${port}`);
});
