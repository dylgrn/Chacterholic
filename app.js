
router.get('/homepage-with-post', (req, res) => {
    console.log(req.session)
    res.send('homepage-with-post');
});

router.get('/submit-homepage', (req, res) => {
    res.send(req.query);
});

router.post('/submit-homepage-with-post', (req, res) => {
    res.send(req.query.body);
})