module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/express-validations'
  },

  deployment: {
    client: 'pg',
    connection: 'postgres://'
  }
};
