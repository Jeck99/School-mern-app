const users = require('../models/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
    register: async (req, res) => {
        if (users.exists(req.body.user.email) == true) return res.status(400).json({ message: 'Email already exists' });
        bcrypt.hash(req.body.user.password, 10, async (err, hashPassword) => {
            if (err) return res.status(500).json({ message: err.message });
            req.body.user.password = hashPassword;
            await users.create(req.body.user)
                .then(result => res.status(200).json({ massage: "user added successfully", result }))
                .catch(err => res.status(500).json(err));
        })
    },
    login: async (req, res) => {
        if (users.exists({ email: req.body.user.email }) === false) return res.status(401).json({ message: 'Email already exists' });
        users.findOne({ email: req.body.user.email })
            .then(user => {
                bcrypt.compare(req.body.user.password, user.password)
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