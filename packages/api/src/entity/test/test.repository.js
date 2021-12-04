import sequelize from 'sequelize';


export class TestRepository {
  constructor(dbInstance, loggerInstance){
    this.logger = loggerInstance;
    this.model = dbInstance.db.define('Test', {
      title: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: sequelize.DataTypes.STRING,
        allowNull: true,
      },

      life: {
        type: sequelize.DataTypes.INTEGER,
        defaultValue: 5,
      },

      slides: {
        type: sequelize.DataTypes.JSON,
        allowNull: true
      },
      project_id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
    }, {
      modelName: 'test',
      tablename: 'tests',
      timestamps: false,
    });

    this.model.sync({ alter: true })
      .then(() => {
        this.logger.info('Table <Test> synchronized successfully')
      })
      .catch(err => {
        this.logger.error(`Table <Test> synchronized with error: ${err}`)
      })
  }
}
