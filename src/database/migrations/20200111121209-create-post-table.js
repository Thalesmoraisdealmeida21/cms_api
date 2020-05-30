'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

     
      return queryInterface.createTable('posts', {
              id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
              },
              titulo: {
                type: Sequelize.STRING,
                allowNull: false,
              },
              descricao: {
                type: Sequelize.TEXT,
                allowNull: false,
              },
              imgCapa: {
                type: Sequelize.STRING,
                allowNull: true
              },
              resumo: {
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
              createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            
              },
              updatedAt: {
                type:  Sequelize.DATE,
                allowNull: false
              }

        });
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('posts');
    
  }
};
