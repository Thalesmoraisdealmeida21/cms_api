const { Model, DataTypes } = require('sequelize')

class post extends Model {
    static init(sequelize){
        super.init({
            titulo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            resumo: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            descricao: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            imgCapa: {
                type: DataTypes.STRING,
                allowNull: true
            },
            userTenant: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "Users",
                    key: "id"
                }
            }
        }, {
            sequelize
        })
    }
}


module.exports = post;