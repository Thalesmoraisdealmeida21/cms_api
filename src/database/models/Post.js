const { Model, DataTypes } = require('sequelize')

class Post extends Model {
    static init(sequelize){
        super.init({
            titulo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            descricao: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        }, {
            sequelize
        })
    }
}


module.exports = Post;