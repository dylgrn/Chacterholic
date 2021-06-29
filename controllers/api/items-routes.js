const router = require('express').Router();
const { Items } = require('../../models');

router.get('/items', (req, res) => {
  res.render('items', data);
  });

router.post('/items', (req, res) => {
    console.log(req.body);
    Items.create({
        itemtype: req.body.itemtype,
        itemA: req.body.itemA,
        itemD: req.body.itemD,
        // post_url: req.body.post_url,
        // user_id: req.session.user_id
      }
    ).then(dbItemData => {
      req.session.save(() => {
        req.session.itemtype;
        req.session.itemA;
        req.session.itemD;
        // req.session.user_id = dbItemData.id;
        // req.session.username = dbItemData.username;
        // req.session.loggedIn = true;

      res.json(dbItemData);
    });
  });
});

  
  // Items.findAll({
  //   attributes: [
  //     'id',
  //     'post_url',
  //     'itemtype',
  //     'itemA',
  //     'itemD'
  //   ]
  // })
  // .then(dbItemData => res.json(dbItemData))
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });

  
  router.delete('/:id', (req, res) => {
    Items.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbItemData => {
      res.json(dbItemData);
    });
  });
  
  router.put('/', (req, res) => {
    Items.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(dbItemData => {
      res.json(dbItemData);
    });
  });
  
  module.exports = router;