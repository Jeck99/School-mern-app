const users = require('../models/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
    register: async (req, res) => {
        if (users.exists({ email: req.body.email }) === true) return res.status(400).json({ message: 'Email already exists' });
        const hash = bcrypt.hashSync(req.body.password, 10);
        req.body.password = hash;
        await users.create(req.body, (err, user) => {
            if (err) return res.status(500).json({ message: 'Error registering user' });
            return res.status(201).json({ message: 'User registered successfully' });
        });
    },
    login: async (req, res) => {
        if (users.exists({ email: req.body.email }) === false) return res.status(401).json({ message: 'Email already exists' });
        users.findOne({ email: req.body.email })
            .then(user => {
                bcrypt.compare(req.body.password, user.password)
                    .then(isMatch => {
                        if (!isMatch) return res.status(403).json({ message: 'Invalid credentials' });
                        user.isLogin = true;
                        jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '30m' }, (err, token) => {
                            if (err) return res.status(500).json({ message: 'Error logging in user' });
                            return res.status(200).json({ message: 'User logged in successfully', token });
                        });
                    })
                    .catch(err => res.status(500).json({ message: 'Error logging in user' }));
            })
    }
}