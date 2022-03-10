import Sequelize, {Model} from 'sequelize';


class Lesson extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      date: Sequelize.DATE,
    },
    {
      sequelize,
    }
    );
    return this;
  }

  static associate(models){
    this.belongsTo(models.Module, {foreignKey: 'module_id', as: 'modules'});
  }

}

export default Lesson;