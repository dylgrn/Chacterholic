const { response } = require('express');

const router = require('express').Router();

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


// router.get('/character', (req, res) => {
//     res.render('character');
//   });


router.get('/items', (req, res) => {
    res.render('items');
});
router.get('/sign-up', (req, res) => {
    res.render('sign-up');
});


router.get('/homepage', (req, res) => {
    console.log(req.session)
    res.render('homepage');
    
});
router.get('/homepage-with-post', (req, res) => {
    console.log(req.session)
    res.send('homepage-with-post');
});

router.get('/submit-homepage', (req, res) => {
    res.send(req.query);
});

router.post('/submit-homepage-with-post', (req, res) => {
    res.send(req.query);
});


// router.get('/homepage-with-post', (req, res) => {
//     console.log(req.session)
//     res.render('homepage-with-post');
// });

// router.get('/submit-homepage', (req, res) => {
//     res.send(req.query);
// });

// router.post('/submit-homepage-with-post', (req, res) => {
//     res.send(req.query);
// })





module.exports = router;