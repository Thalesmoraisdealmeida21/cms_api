const { Model, DataTypes } = require('sequelize')

class ConfigEmail extends Model {
  static init(sequelize){
    super.init({
      host: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      port: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      secure: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }, 
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize
    })
  }
}

module.exports = ConfigEmail;