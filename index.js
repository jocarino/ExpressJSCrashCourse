const { response } = require('express');
const express = require('express');
const path = require('path');

const app = express();

/* // Get request
app.get('/', (reqeust, response) => {
    response.sendFile(path.join(__dirname,'public','index.html'));
}) */

const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        email: 'bob@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannon@gmail.com',
        status: 'active'
    }
];


app.get('/api/members', (request, response) => response.json(members));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server port ${PORT}`));