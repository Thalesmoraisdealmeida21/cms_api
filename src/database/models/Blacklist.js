const { Model, DataTypes } = require('sequelize')

class blacklist extends Model {
  static init(sequelize){
    super.init({
        token: {
            type: DataTypes.TEXT
        }
    },
    {
      timestamps: false,
      sequelize

    })
  }
}

module.exports = blacklist;