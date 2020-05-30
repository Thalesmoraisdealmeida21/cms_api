'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.createTable('contacts', {
         id: {
           type: Sequelize.INTEGER,
           allowNull: false,
           autoIncrement: true,
           primaryKey: true
         },

         userTenant: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: "Users",
              key: "id"
          }
        },
         nome: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        telefone: {
          type: Sequelize.STRING,
          allowNull: true
        },
        assunto: {
          type: Sequelize.STRING,
          allowNull: true
        },
        mensagem: {
          type: Sequelize.TEXT,
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
   
      return queryInterface.dropTable('contacts');
    
  }
};
