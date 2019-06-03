const router = require('express').Router();
const validateSessions = require('../middleware/validate-session');
const Product = require('../models').sequelize.model('product');

router.get('/', async (req, res) => {
    const products = await Product.findAll();
    return products ? res.status(200).json(products) :
        res.status(500).json({ err: true, msg: 'Products not found' });
})

router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ where: { id: req.params.id } });
    return product ? res.status(200).json(product) :
        res.status(500).json({ err: true, msg: 'Product not found' });
})

router.delete('/:id', validateSessions, async (req, res) => {
    const deletedValue = Product.destroy({ where: { id: req.params.id } });
    return deletedValue ? res.status(200).json({err: false, msg:`Product ${req.params.id} was deleted` }) :
        res.status(500).json({ err: true, msg: 'Product was not deleted' });
})
module.exports = router;