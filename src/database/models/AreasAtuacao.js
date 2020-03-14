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
            }
        }, {
            sequelize
        })
    }
}


module.exports = areasAtuacao;