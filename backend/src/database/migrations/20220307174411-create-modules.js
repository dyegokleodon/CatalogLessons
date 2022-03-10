module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('modules', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
      
    });
  },

  async down (queryInterface) {
    return queryInterface.dropTable('modules');
  }
};