const { request } = require('express');
const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

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

// Create member
router.post('/', (request, response) => {
    const newMember = {
        id: uuid.v4(),
        name: request.body.name,
        email: request.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        return response.status(400).json({ msg: 'Include a name and email' });
    }

    // In a database, it would be something like this
    // members.save(newMember);

    // Pushing new member to array
    members.push(newMember);

    // response.json(members);
    response.redirect('/');
});

// Update member
router.put('/:id', (request, response) => {
    const found = members.some(member => member.id === parseInt(request.params.id))
    if (found) {
        const updatedMember = request.body;
        members.forEach(member => {
            if (member.id === parseInt(request.params.id)) {
                member.name = updatedMember.name ? updatedMember.name : member.name;
                member.email = updatedMember.email ? updatedMember.email : member.email;

                response.json({ msg: 'Member uppdate', member });
            }
        })
    } else {
        response.status(400).json({ msg: `No member with id of ${request.params.id}` });
    }
});

// Delete member
router.delete('/:id', (request, response) => {
    const found = members.some(member => member.id === parseInt(request.params.id))
    if (found) {
        response.json({
            msg: 'Member deleted',
            members: members.filter(member => member.id !== parseInt(request.params.id))
        });
    } else {
        response.status(400).json({ msg: `No member with id of ${request.params.id}` });
    }
});

module.exports = router;