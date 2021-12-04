import { Sequelize } from "sequelize";

export class DbService{
  constructor({database, username, password, options}, logger){
    this.db = new Sequelize(database, username, password, options);
    this.logger = logger;
    this.logger.info(`Db init with params: {host: ${options.host}, database: ${database}}`)
  }

  async auth(){
    try {
      await this.db.authenticate();
      this.logger.info('Db connection has been established successfully.');
    } catch (err) {
      this.logger.error(`Unable to connect to the database: ${err}`);
    }
  }

  disconnect(){
    try {
      this.db.disconnect();
      this.logger.info('Db disconnected successfully.');
    } catch (err){
      this.logger.error(`Database disconnection error: ${err}`);
    }
  }

  sync(){
    try {
      this.db.sync({ alter: true })
      this.logger.info('Db is synchronized successfully.');
    } catch (err){
      this.logger.error('Db is synchronized with error:', err);
    }
  }
}
