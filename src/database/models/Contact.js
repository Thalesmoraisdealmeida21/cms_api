const { Model, DataTypes } = require('sequelize')

class Contact extends Model {
    static init(sequelize){
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            telefone: {
                type: DataTypes.STRING,
                llowNull: true
            },
            assunto: {
                type: DataTypes.STRING,
                allowNull: true
            },
            mensagem: {
                type: DataTypes.TEXT,
                allowNull: true
            }
        }, {
            sequelize
        })
    }
}


module.exports = Contact;