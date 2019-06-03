const sequelize = require('../models').sequelize;
const Product = sequelize.model('product'); 
const User = sequelize.model('user');
const Transactions = sequelize.import('../models/transaction')
//Transactions.sync({force:true})
User.hasMany(Product);
Product.belongsTo(User);

sequelize.sync();
