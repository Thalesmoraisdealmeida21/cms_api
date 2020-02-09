const { Model, DataTypes } = require('sequelize')

class user extends Model {
  static init(sequelize){
    super.init({
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
    },
    {
      sequelize
    })
  }
}

module.exports = user;