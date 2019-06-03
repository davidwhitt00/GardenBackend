const router = require('express').Router();
const validateSessions = require('../middleware/validate-session');
const Transaction = require('../models').sequelize.model('transaction');

router.get('/', (req, res) => {
    // returns all transactions
    Transaction.findAll()
        .then(transactions => res.status(200).json(transactions))
        .catch(err => res.status(500).json(err))
})

router.post('/', validateSessions, (req, res) => {
    // create a new transaction
})

router.get('/:id', (req, res) => {
    // returns  transaction by id
})

router.put('/:id', validateSessions, (req, res) => {
    // update transaction by id
})

router.delete('/:id', validateSessions, (req, res) => {
    // delete transaction by id
})

module.exports = router;