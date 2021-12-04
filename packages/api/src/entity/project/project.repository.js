import sequelize from 'sequelize';


export class ProjectRepository {
  constructor(dbInstance, loggerInstance){
    this.logger = loggerInstance;
    this.model = dbInstance.db.define('Project', {
      title: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: sequelize.DataTypes.STRING,
        allowNull: true,
      },

    }, {
      modelName: 'project',
      tablename: 'projects',
      timestamps: false,
    });

    this.model.sync({ alter: true })
      .then(() => {
        this.logger.info('Table <Project> synchronized successfully')
      })
      .catch(err => {
        this.logger.error(`Table <Project> synchronized with error: ${err}`)
      })
  }
}
