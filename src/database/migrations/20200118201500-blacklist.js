'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('blacklists', 
      {
         token: Sequelize.TEXT,
         id: Sequelize.INTEGER
        });
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('blacklists');

  }
};
