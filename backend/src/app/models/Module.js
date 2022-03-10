import Sequelize, {Model} from 'sequelize';


class Module extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
    },
    {
      sequelize,
    }
    );
    return this;
  }
  static associate(models){
    this.hasMany(models.Lesson, {foreignKey: 'module_id', as: 'lessons'});
  }
};

export default Module;