const { response } = require('express');
const express = require('express');
const { request } = require('http');
const path = require('path');
const { send } = require('process');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

/* // Get request
app.get('/', (reqeust, response) => {
    response.sendFile(path.join(__dirname,'public','index.html'));
}) */



// Init middleware
// app.use(logger);


// Get all members
app.get('/api/members', (request, response) => response.json(members));

// Get single member
app.get('/api/members/:id', (request, response) => {
    response.send(request.params.id);
});


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server port ${PORT}`));