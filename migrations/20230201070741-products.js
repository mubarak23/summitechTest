'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
 
    */
    const createTable = await queryInterface.createTable(
      'products',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: new Sequelize.UUIDV4(),
          unique: true,
          primaryKey: true,
        },
        userId: {
          type: Sequelize.UUID,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        softDelete: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          default: false,
        },
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE },
        deletedAt: { allowNull: true, type: Sequelize.DATE },
      },
      {
        paranoid: true,
      }
    );

    return Promise.all(createTable);
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
 */

    return queryInterface.dropTable('products');
  },
};
