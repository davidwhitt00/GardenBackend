module.exports = app => {
    app.use('/api/product', require('./productsController'));
    app.use('/api/auth', require('./usersController'));
    app.use('/api/transaction', require('./transactionsController'));
    app.use('*/*', (req, res) => res.status(404).json({error: true, msg: 'route not found'}))
}