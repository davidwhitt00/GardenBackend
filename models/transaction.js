module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('transaction', {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },

    prod_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    credit_card: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isCreditCard: true,       // check for valid credit card numbers
        // custom validations are also possible:
        }
    },

    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },

    transaction_id: {

      type: DataTypes.INTEGER,
      allowNull: false,

    }
  });
  
  return Transaction;
};