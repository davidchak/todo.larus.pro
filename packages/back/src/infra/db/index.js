const path = require('path');
const { Sequelize } = require('sequelize')

module.exports.db = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '../../../dev.db')
});
