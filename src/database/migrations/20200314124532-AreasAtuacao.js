'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('areasAtuacaos', {
         id: {
           type: Sequelize.INTEGER,
           autoIncrement: true,
           primaryKey: true
         },
         nome: {
           type: Sequelize.STRING,
           allowNull: true
         },
         descricao: {
           type: Sequelize.TEXT,
           allowNull: true
         },
         userTenant: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: "Users",
              key: "id"
          }
        },
         icone: {
          type: Sequelize.STRING,
          allowNull: true
        },
         createdAt: {
           type: Sequelize.DATE,
           allowNull: false

         },
         updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }  
        });

  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable('areasAtuacaos');
    
  }
};
