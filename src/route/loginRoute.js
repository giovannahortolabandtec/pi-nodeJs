const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', async (req, res) => {
    res.json("Funcionou");
});

router.post('/', async (req, res) => {
    const  { login, password } = req.body;

    const response = await User.login(login, password);
    res.status(response.status).json(response.data);
})

module.exports = router;