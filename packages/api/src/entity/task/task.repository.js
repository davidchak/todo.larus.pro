import sequelize from 'sequelize';


export class TaskRepository {
  constructor(dbInstance, loggerInstance){
    this.logger = loggerInstance;
    this.model = dbInstance.db.define('Task', {
      title: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: sequelize.DataTypes.STRING,
        allowNull: true,
      },

      status: {
        type: sequelize.DataTypes.STRING,
        defaultValue: 'создана',
      },

      start: {
        type: sequelize.DataTypes.DATE,
        defaultValue: new Date(),
      },

      finish: {
        type: sequelize.DataTypes.DATE,
        allowNull: true
      },

      article_id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true
      },

      test_id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true
      },
    }, {
      modelName: 'task',
      tablename: 'tasks',
      timestamps: false,
    });

    this.model.sync({ alter: true })
      .then(() => {
        this.logger.info('Table <Task> synchronized successfully')
      })
      .catch(err => {
        this.logger.error(`Table <Task> synchronized with error: ${err}`)
      })
  }
}
