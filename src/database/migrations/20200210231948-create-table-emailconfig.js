'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('ConfigEmails', 
      {
         id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
         },
         host: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        port: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        secure: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        }, 
        user: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: true,
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
    



      return queryInterface.dropTable('ConfigEmails');
    
  }
};
