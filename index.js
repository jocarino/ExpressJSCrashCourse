const express = require('express');
const path = require('path');

const app = express();

/* // Get request
app.get('/', (reqeust, response) => {
    response.sendFile(path.join(__dirname,'public','index.html'));
}) */

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server port ${PORT}`));