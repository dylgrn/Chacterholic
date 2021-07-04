const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const router = require('./controllers/home-routes');
const { response, request } = require('express');
const bodyParser = require('body-parser');
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
router.use(bodyParser.urlencoded({ extended: true}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

//sets up to use routes
app.use(routes);
// sequelize.sync({ force: true }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
// });


router.get('/homepage', (req, res) => {
    console.log(req.session)
    res.render('homepage');
});

router.post('/submit-homepage', (req, res) => {
    console.log(req.session)
    res.send(request.query);
});



app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});

