const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route   POST api/contacts
// @desc    add new contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Get all contacts');
});

// @route   PUT api/contacts
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Get all contacts');
});

// @route   DELETE api/contacts/:id
// @desc    Update contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete contacts');
});

module.exports = router;
