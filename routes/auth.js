const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

// @route   POST api/users
// @desc    Log in user
// @access  Private
router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;
