const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');
const router = require('express').Router();

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,

    //  store: new SequelizeStore({
    //      db: sequelize
    //  })

};

app.use(session(sess));



const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

//sets up to use routes
app.use(routes);

// router.get('/homepage-with-post', (req, res) => {
//     console.log(req.session)
//     res.send('homepage-with-post');
// });

// router.get('/submit-homepage', (req, res) => {
//     res.send(req.query);
// });

// router.post('/submit-homepage-with-post', (req, res) => {
//     res.send(req.query);
// });


// sequelize.sync({ force: true }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
// });
app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});