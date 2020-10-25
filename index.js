const { response } = require('express');
const express = require('express');
const { request } = require('http');
const path = require('path');
const { send } = require('process');

const exphbs = require('express-handlebars');

const logger = require('./middleware/logger');

const members = require('./Members');

const app = express();

/* // Get request
app.get('/', (reqeust, response) => {
    response.sendFile(path.join(__dirname,'public','index.html'));
}) */

// Init middleware
// app.use(logger);

// Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (request, response) => response.render('index', {
    title: 'Member App',
    members
}));

/* // Set static folder
app.use(express.static(path.join(__dirname, 'public'))); */

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server port ${PORT}`));