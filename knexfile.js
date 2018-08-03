// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/student_info'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};