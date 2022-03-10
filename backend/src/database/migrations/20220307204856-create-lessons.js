module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('lessons', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      date:{
        type: Sequelize.DATE,
        allowNull: false
      },
      module_id: {
        type: Sequelize.INTEGER,
        references: {model: 'modules', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
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
    return queryInterface.dropTable('lessons');
  }
};
