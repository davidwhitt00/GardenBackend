const router = require('express').Router();
const User = require('../models').sequelize.model('user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

_createToken = (user) => {
    return jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
}

router.post('/login', async (req, res) => {
    try {
        const loggedInUser = await User.findOne({ where: { email: req.body.email } })
        const isUser = await bcrypt.compare(req.body.password, loggedInUser.password)

        if (isUser) {
            return res.status(200).send({
                loggedInUser,
                error: false,
                isUser,
                token: _createToken(loggedInUser)
            });

        } else {
            return res.status(500).send({
                error: true,
                errorMsg: "Wrong username or password"
            })
        }
    } catch (e) {
        return res.status(500).send({
            error: true,
            errorMsg: "User doesn't exist",
            fullMsg: e,
        })
    }

})

router.post('/getUserToken', async (req, res) => {
    console.log(req.errors)
    const loggedInUser = await User.findOne({ where: { email: req.body.email } })
    const pass = await bcrypt.compare(req.body.password,loggedInUser.dataValues.password)
    return res.status(200).send({
        loggedInUser,
        pass,
        token: _createToken(loggedInUser)

    });

})

module.exports = router;