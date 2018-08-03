const database = require('./databaseConnection');

module.exports = {

  list() {
    return database('students').select();
  },
  read(id) {
    return database('students')
      .select()
      .where('id', id)
      .first();
  },
  create(student) {
    return database('students')
      .from('students')
      .insert(student)
      .returning('*')
      .then(record => record[0]);
  },
  update(id, student) {
    return database('students')
      .update(student)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('students')
      .delete()
      .where('id', id);
  },
};
