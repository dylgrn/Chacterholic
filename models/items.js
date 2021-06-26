// Set Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Data
// =============================================================
const items = [
  {
    itemType: 'Long Sword',
    attack: 20,
    diff: 15
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

// Routes
// =============================================================

app.get('/items.handlebars', (req, res) => {
  // Handlebars requires an object to be sent to the index.handlebars file.
  const data = {
    items: []
  };

  res.render('items', data);
});