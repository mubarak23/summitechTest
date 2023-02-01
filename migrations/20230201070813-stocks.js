'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
 
    */
    const createTable = await queryInterface.createTable(
      'stocks',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: new Sequelize.UUIDV4(),
          unique: true,
          primaryKey: true,
        },
        batchId: {
          type: Sequelize.UUID,
          allowNull: false,
        },
        productId: {
          type: Sequelize.UUID,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
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
