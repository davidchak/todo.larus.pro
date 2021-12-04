import sequelize from 'sequelize';


export class CourseRepository {
  constructor(dbInstance, loggerInstance){
    this.logger = loggerInstance;
    this.model = dbInstance.db.define('Course', {
      title: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: sequelize.DataTypes.STRING,
        allowNull: true,
      },

      project_id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
    }, {
      modelName: 'course',
      tablename: 'courses',
      timestamps: false,
    });

    this.model.sync({ alter: true })
      .then(() => {
        this.logger.info('Table <Course> synchronized successfully')
      })
      .catch(err => {
        this.logger.error(`Table <Course> synchronized with error: ${err}`)
      })
  }
}
