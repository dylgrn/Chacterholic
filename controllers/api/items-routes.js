const router = require('express').Router();
const { Items } = require('../../models');

const items = [
  {
    itemType: 'Long Sword',
    attack: 20,
    deff: 15
  },
  {
    itemType: 'Long Bow',
    attack: 18,
    deff: 8
  },
  {
    itemType: 'Axe',
    attack: 28,
    deff: 18
  },
  {
    itemType: 'Knives',
    attack: 17,
    deff: 12
  },
  {
    itemType: 'Staff',
    attack: 15,
    deff: 10
  },
  {
    itemType: 'Potion',
    hp: 50
  },
  {
    itemType: 'Armor',
    def: 50
  }
];


router.get('/items', (req, res) => {
  const data = {
    all: items
  }
    res.render('items', data);
  });

  module.exports = router;