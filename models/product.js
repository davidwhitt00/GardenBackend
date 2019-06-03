module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        product_name: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                max: 30,
                min:3
            }
        },
        product_description: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                max: 300
            }
        },
        product_price: {
            type: DataTypes.DOUBLE
        }, 
        product_image:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return Product;
}