const { Model, DataTypes } = require('sequelize')

class Blacklist extends Model {
  static init(sequelize){
    super.init({
        token: {
            type: DataTypes.STRING
        }
    },
    {
      timestamps: false,
      sequelize

    })
  }
}

module.exports = Blacklist;