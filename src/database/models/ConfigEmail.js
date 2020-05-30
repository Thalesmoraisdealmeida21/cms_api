const { Model, DataTypes } = require('sequelize')

class ConfigEmail extends Model {
  static init(sequelize){
    super.init({
      host: {
        type: DataTypes.STRING,
        allowNull: true,
        
      },
      port: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      secure: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      }, 
      user: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userTenant: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Users",
            key: "id"
        }
      }
    },
    {
      sequelize
    })
  }
}

module.exports = ConfigEmail;