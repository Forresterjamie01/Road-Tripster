

const express = require('express');
<<<<<<< HEAD
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const exphbs = require("express-handlebars");
=======
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const models = require('./models');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
>>>>>>> e822b5b05559d06f2d78dad8a86220e49e83562c

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 5030;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// app.use(routes);

app.get('/', function (req, res) {
    res.render('login');
});



app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));

});