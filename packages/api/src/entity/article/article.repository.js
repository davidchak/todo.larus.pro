import sequelize from 'sequelize';


export class ArticleRepository {
  constructor(dbInstance, loggerInstance){
    this.logger = loggerInstance;
    this.model = dbInstance.db.define('Article', {
      title: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: sequelize.DataTypes.STRING,
        allowNull: true,
      },

      likes: {
        type: sequelize.DataTypes.INTEGER,
        default: 0,
      },

      dislikes: {
        type: sequelize.DataTypes.INTEGER,
        defaul: 0,
      },

      elements: {
        type: sequelize.DataTypes.JSON,
        allowNull: true
      },

      project_id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true,
      },

    }, {
      modelName: 'article',
      tablename: 'articles',
      timestamps: false,
    });

    this.model.sync({ alter: true })
      .then(() => {
        this.logger.info('Table <Article> synchronized successfully')
      })
      .catch(err => {
        this.logger.error(`Table <Article> synchronized with error: ${err}`)
      })
  }
}
