module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        uid: {
            type: DataTypes.UUID,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allow_null: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allow_null: false
        },
        email: {
            type: DataTypes.STRING,
            allow_null: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allow_null: false
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'admin'
        }
    })

    return User;
}