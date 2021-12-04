import sequelize from 'sequelize';


export class UserRepository {
  constructor(dbInstance, loggerInstance){
    this.logger = loggerInstance;
    this.model = dbInstance.db.define('User', {
      name: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },

      contacts: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },

      specialization: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },

      role: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },
      // courses(таблица)
      // complite - составной
      // medals(таблица)
    }, {
      modelName: 'user',
      tablename: 'users',
      timestamps: false,
    });

    this.model.sync({ alter: true })
      .then(() => {
        this.logger.info('Table <User> synchronized successfully')
      })
      .catch(err => {
        this.logger.error(`Table <User> synchronized with error: ${err}`)
      })
  }
}
