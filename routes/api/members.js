const express = require('express');
const router = express.Router();
const members = require('../../Members');

// Get all members
router.get('/', (request, response) => response.json(members));

// Get single member
router.get('/:id', (request, response) => {
    const found = members.some(member => member.id === parseInt(request.params.id))
    if (found) {
        response.json(members.filter(member => member.id === parseInt(request.params.id)));
    } else {
        response.status(400).json({ msg: `No member with id of ${request.params.id}` });
    }
});

module.exports = router;