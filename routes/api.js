const express = require('express');

const router = express.Router();

const animals = [
  {
    id: '1',
    name: 'Sabel',
    species: 'Dog',
    type: 'Border Collie',
  },
  {
    id: '2',
    name: 'Seeley',
    species: 'Cat',
    type: 'Orange Tabby',
  },
];

/* GET sample data from API. */
router.get('/animal/:id', (req, res) => {
  const { id } = req.params;
  res.json(animals.filter(a => a.id === id)[0]);
});

module.exports = router;
