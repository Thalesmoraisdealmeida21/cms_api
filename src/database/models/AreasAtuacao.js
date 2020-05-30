const { Model, DataTypes } = require('sequelize')

class areasAtuacao extends Model {
    static init(sequelize){
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: true,
               
            },
            descricao: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            icone: {
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


module.exports = areasAtuacao;