const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();
// const routes = require('./controllers');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

app.get('/', function (req, res) {
    res.render('login');
});

app.listen(3000, () => {
    console.log('Server is starting at port ',3000);
});