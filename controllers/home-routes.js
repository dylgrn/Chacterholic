const { response, request } = require('express');
const router = require('express').Router();

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        post_url: 'https://handlebarsjs.com/guide/',
        title: 'Handlebars Docs',
        created_at: new Date(),
        user: {
            username: 'test_user'
        }
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/items', (req, res) => {
    res.render('items');
});
router.get('/sign-up', (req, res) => {
    res.render('sign-up');
});

// router.get('/homepage', (req, res) => {
//     console.log(req.session)
//     res.render('homepage');

// });





module.exports = router;