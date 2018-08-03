const databaseConnection = require('./databaseConnection');

module.exports = {
  getAll() {
    return databaseConnection('students');
  },
};
